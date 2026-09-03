"use client";

import { useState } from "react";
import { getAllBrands } from "@/lib/cars";
import { whatsappUrl } from "@/lib/site";
import { IconWhatsApp } from "@/components/Icons";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const brands = getAllBrands();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Hi Fame Luxury, I'd like to enquire about a luxury car rental in Dubai.`,
      name && `Name: ${name}`,
      phone && `Mobile: ${phone}`,
      brand && `Preferred brand: ${brand}`,
      from && `From: ${from}`,
      to && `To: ${to}`,
    ].filter(Boolean);
    // Prefer same-tab navigation on mobile so WhatsApp can open the chat
    window.location.href = whatsappUrl(lines.join("\n"));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`luxury-panel ${compact ? "p-5" : "p-6 sm:p-7"}`}
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">
        Instant enquiry
      </p>
      <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight">
        Reserve your drive
      </h2>
      <p className="mt-2 text-sm text-muted">
        Share dates and a preferred brand. The concierge confirms availability on WhatsApp.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          Full name
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="luxury-input"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          Mobile
          <input
            required
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="luxury-input"
            placeholder="+971 50 000 0000"
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          Brand
          <select
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="luxury-input"
          >
            <option value="">Any luxury brand</option>
            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-1.5 text-xs font-semibold text-muted">
            From
            <input
              name="from"
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="luxury-input"
            />
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-muted">
            To
            <input
              name="to"
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="luxury-input"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <IconWhatsApp className="h-4 w-4" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
