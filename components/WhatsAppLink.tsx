"use client";

import type { ComponentProps, MouseEvent } from "react";
import { trackEvent } from "@/components/Analytics";

type WhatsAppLinkProps = ComponentProps<"a"> & {
  eventLabel?: string;
};

export function WhatsAppLink({
  eventLabel = "whatsapp",
  onClick,
  children,
  ...props
}: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent("whatsapp_click", {
      event_category: "engagement",
      event_label: eventLabel,
    });
    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
