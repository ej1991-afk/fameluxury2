import { WhatsAppLink } from "@/components/WhatsAppLink";
import { whatsappUrl } from "@/lib/site";
import { IconWhatsApp } from "@/components/Icons";

export function WhatsAppButton() {
  return (
    <WhatsAppLink
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      eventLabel="floating_button"
      aria-label="Chat on WhatsApp"
      className="touch-manipulation fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      style={{ marginBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      <IconWhatsApp className="h-7 w-7 text-white" />
    </WhatsAppLink>
  );
}
