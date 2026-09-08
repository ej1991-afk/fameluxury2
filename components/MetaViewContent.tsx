"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/Analytics";

interface MetaViewContentProps {
  contentId: string;
  contentName: string;
  value: number;
  currency?: string;
}

export function MetaViewContent({
  contentId,
  contentName,
  value,
  currency = "AED",
}: MetaViewContentProps) {
  useEffect(() => {
    trackEvent("view_item", {
      content_ids: contentId,
      content_name: contentName,
      content_type: "product",
      value,
      currency,
    });
  }, [contentId, contentName, value, currency]);

  return null;
}
