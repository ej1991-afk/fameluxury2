import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility — ignored while scroll animation is disabled */
  stagger?: boolean;
  /** Kept for API compatibility — ignored while scroll animation is disabled */
  delayMs?: number;
  as?: ElementType;
}

/** Pass-through wrapper — scroll reveal animation is currently disabled. */
export function Reveal({
  children,
  className = "",
  stagger: _stagger = false,
  delayMs: _delayMs = 0,
  as: Tag = "div",
  ...rest
}: RevealProps) {
  return (
    <Tag className={className || undefined} {...rest}>
      {children}
    </Tag>
  );
}
