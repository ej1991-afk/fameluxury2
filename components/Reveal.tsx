"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  /** Stagger direct children as they appear */
  stagger?: boolean;
  delayMs?: number;
  as?: ElementType;
}

export function Reveal({
  children,
  className = "",
  stagger = false,
  delayMs = 0,
  as: Tag = "div",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Mark as armed after mount so SSR content stays visible for no-JS / SEO.
    node.classList.add("reveal-enabled");

    let frame = 0;
    const reveal = () => {
      frame = window.requestAnimationFrame(() => {
        node.classList.add("reveal-in");
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const mergedStyle =
    delayMs > 0
      ? ({
          ...style,
          "--reveal-delay": `${delayMs}ms`,
        } as CSSProperties)
      : style;

  return (
    <Tag
      ref={ref}
      className={`reveal ${stagger ? "reveal-stagger" : ""} ${className}`.trim()}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
