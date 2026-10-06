import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  onClick?: () => void;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  onClick,
}) => (
  <div
    className={`scroll-stack-card ${itemClassName}`.trim()}
    onClick={onClick}
  >
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  maxStackDepth?: number;
  onStackComplete?: () => void;
  onActiveCardChange?: (index: number) => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.02,
  itemStackDistance = 12,
  stackPosition = '12%',
  scaleEndPosition = '6%',
  baseScale = 0.94,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  maxStackDepth = 3,
  onStackComplete,
  onActiveCardChange,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const initialTopsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef(new Map());
  const activeCardIndexRef = useRef<number>(-1);
  const endElementTopRef = useRef<number>(0);
  const rafPendingRef = useRef(false);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return typeof value === 'number' ? value : parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
      };
    }
  }, [useWindowScroll]);

  const scrollToCard = useCallback((targetIndex: number) => {
    const cardTop = initialTopsRef.current[targetIndex];
    if (cardTop === undefined) return;

    const { containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const targetScroll = Math.max(0, cardTop - stackPositionPx + 5);

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScroll, { duration: 0.9 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, [getScrollData, parsePercentage, stackPosition]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const endElementTop = endElementTopRef.current;

    // 1. Identify which card is currently active / in focus
    let activeIndex = 0;
    for (let j = 0; j < cardsRef.current.length; j++) {
      const jCardTop = initialTopsRef.current[j] || 0;
      const jTrigger = jCardTop - stackPositionPx;
      if (scrollTop >= jTrigger - 30) {
        activeIndex = j;
      }
    }

    if (activeIndex !== activeCardIndexRef.current) {
      activeCardIndexRef.current = activeIndex;
      onActiveCardChange?.(activeIndex);
    }

    // 2. Transform each card with bounded stacking depth
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = initialTopsRef.current[i] || 0;
      const pinStart = cardTop - stackPositionPx;
      const pinEnd = endElementTop - containerHeight / 2;

      let translateY = 0;
      let scale = 1;
      let opacity = 1;
      let pointerEvents = 'auto';

      if (i > activeIndex) {
        // Future card scrolling into view normally
        translateY = 0;
        scale = 1;
        opacity = 1;
        pointerEvents = 'auto';
      } else if (i === activeIndex) {
        // The currently active card - pinned cleanly at top stack position
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isPinned) {
          translateY = scrollTop - cardTop + stackPositionPx;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPositionPx;
        }
        scale = 1;
        opacity = 1;
        pointerEvents = 'auto';
      } else {
        // Earlier card stacked behind active card
        const depth = activeIndex - i;
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

        if (depth > maxStackDepth) {
          // Beyond max stack depth - tuck away and hide to prevent filling the whole page
          opacity = 0;
          pointerEvents = 'none';
          const stackedOffset = Math.min(depth, maxStackDepth) * itemStackDistance;
          if (isPinned) {
            translateY = scrollTop - cardTop + stackPositionPx - stackedOffset;
          } else if (scrollTop > pinEnd) {
            translateY = pinEnd - cardTop + stackPositionPx - stackedOffset;
          }
          scale = baseScale;
        } else {
          // Visible stacked tab
          opacity = Math.max(0.3, 1 - (depth * 0.18));
          pointerEvents = 'auto';
          const stackedOffset = depth * itemStackDistance;
          if (isPinned) {
            translateY = scrollTop - cardTop + stackPositionPx - stackedOffset;
          } else if (scrollTop > pinEnd) {
            translateY = pinEnd - cardTop + stackPositionPx - stackedOffset;
          }
          scale = Math.max(baseScale, 1 - (depth * itemScale));
        }
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        opacity: Math.round(opacity * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.05 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.opacity - newTransform.opacity) > 0.01;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        card.style.opacity = `${newTransform.opacity}`;
        card.style.pointerEvents = pointerEvents;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    maxStackDepth,
    useWindowScroll,
    onStackComplete,
    onActiveCardChange,
    parsePercentage,
    getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    // Use rAF dedup to prevent multiple scroll events per frame
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    requestAnimationFrame(() => {
      updateCardTransforms();
      rafPendingRef.current = false;
    });
  }, [updateCardTransforms]);

  const recalculatePositions = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Temporarily reset transforms to get true positions
    const savedTransforms = cards.map(card => card.style.transform);
    const savedOpacities = cards.map(card => card.style.opacity);
    cards.forEach(card => {
      card.style.transform = 'none';
      card.style.opacity = '1';
    });

    // Force reflow
    void scrollerRef.current?.offsetHeight;

    initialTopsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement;
    if (endElement) {
      endElementTopRef.current = endElement.getBoundingClientRect().top + window.scrollY;
    }

    // Restore transforms
    cards.forEach((card, i) => {
      card.style.transform = savedTransforms[i];
      card.style.opacity = savedOpacities[i];
    });

    // Clear cached transforms to force full re-render
    lastTransformsRef.current.clear();
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Record static natural top positions
    initialTopsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    // Cache end element position
    const endElement = scroller.querySelector('.scroll-stack-end') as HTMLElement;
    if (endElement) {
      endElementTopRef.current = endElement.getBoundingClientRect().top + window.scrollY;
    }

    cards.forEach((card, i) => {
      card.style.zIndex = `${i + 1}`;
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, opacity';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.cursor = 'pointer';

      // Click on any card in the stack to open it
      card.onclick = (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button')) {
          return;
        }
        scrollToCard(i);
      };
    });

    setupLenis();
    updateCardTransforms();

    // Recalculate positions on resize
    const handleResize = () => {
      recalculatePositions();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      initialTopsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    setupLenis,
    updateCardTransforms,
    scrollToCard,
    recalculatePositions,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;