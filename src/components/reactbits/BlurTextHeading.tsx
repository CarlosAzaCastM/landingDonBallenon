import React, { useState } from 'react';

interface BlurTextHeadingProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

/**
 * React Bits inspired BlurText / SplitText hybrid adapted for static SSR:
 * Renders 100% visible by default for instant LCP and accessibility,
 * and provides an authored exponential ease-out blur-refraction wave on interaction.
 */
export default function BlurTextHeading({
  text,
  highlightWords = [],
  className = '',
}: BlurTextHeadingProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const words = text.split(' ');

  const normalize = (w: string) =>
    w.replace(/[.,¡!¿?"]/g, '').toLowerCase();
  const normalizedHighlights = highlightWords.map((w) =>
    w.toLowerCase()
  );

  return (
    <h1
      className={`font-extrabold tracking-tight text-[var(--ink-navy)] select-none ${className}`}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {words.map((word, idx) => {
        const isHighlighted = normalizedHighlights.includes(normalize(word));
        const isHovered = activeIndex === idx;
        const isNeighbor =
          activeIndex !== null && Math.abs(activeIndex - idx) === 1;

        return (
          <React.Fragment key={`${word}-${idx}`}>
            <span
              onMouseEnter={() => setActiveIndex(idx)}
              style={{
                transition:
                  'transform 420ms cubic-bezier(0.16, 1, 0.3, 1), filter 420ms cubic-bezier(0.16, 1, 0.3, 1), background-color 280ms ease-out, color 280ms ease-out',
                transform: isHovered
                  ? 'translateY(-3px) scale(1.03)'
                  : isNeighbor
                    ? 'translateY(-1px)'
                    : 'translateY(0) scale(1)',
                filter:
                  activeIndex !== null && !isHovered && !isNeighbor
                    ? 'blur(0.6px)'
                    : 'blur(0px)',
              }}
              className={`inline-block motion-safe-transform ${
                isHighlighted
                  ? 'px-2.5 py-0.5 rounded-lg bg-[var(--bg-navy)] text-[var(--bg-pacifico)] border-2 border-[var(--seam-strong)]'
                  : ''
              }`}
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </h1>
  );
}
