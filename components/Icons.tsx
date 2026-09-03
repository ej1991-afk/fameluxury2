import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, className, ...rest } = props;
  return { title, className: className ?? "h-5 w-5", ...rest };
}

export function IconCheck(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M6.6 3.8c.4-.4.9-.6 1.5-.5l2.3.4c.6.1 1 .5 1.2 1.1l.8 2.4c.2.6 0 1.2-.4 1.6L10.6 11c.8 1.6 2.1 2.9 3.7 3.7l2.2-1.4c.4-.3 1.1-.4 1.6-.2l2.4.8c.6.2 1 .7 1.1 1.3l.4 2.3c.1.6-.1 1.1-.5 1.5-.9.9-2.2 1.5-3.6 1.4C11.3 20.1 3.9 12.7 3.6 6.2c0-1.4.6-2.7 1.5-3.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M12 3 5 6v6c0 4.4 3 7.4 7 9 4-1.6 7-4.6 7-9V6l-7-3z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4.5L15 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconCar(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M4 14h16l-1.2-4.2A2 2 0 0 0 16.9 8H7.1a2 2 0 0 0-1.9 1.8L4 14z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M5 14v3H7v-3M17 14v3h2v-3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7.5" cy="17.5" r="1.4" fill="currentColor" />
      <circle cx="16.5" cy="17.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="m12 3.2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.6 7.2 18.1l.9-5.4L4.2 8.9l5.4-.8L12 3.2z" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconId(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="9" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 10h5M14 14h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconDelivery(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M3 7h11v10H3z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 10h4l3 3v4h-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" fill="currentColor" />
      <circle cx="17" cy="18" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconVisa(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 48 32" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect width="48" height="32" rx="4" fill="currentColor" opacity="0.12" />
      <text x="24" y="21" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="Arial">VISA</text>
    </svg>
  );
}

export function IconMastercard(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 48 32" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect width="48" height="32" rx="4" fill="currentColor" opacity="0.12" />
      <circle cx="20" cy="16" r="7" fill="currentColor" opacity="0.55" />
      <circle cx="28" cy="16" r="7" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function IconAmex(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 48 32" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect width="48" height="32" rx="4" fill="currentColor" opacity="0.12" />
      <text x="24" y="21" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" fontFamily="Arial">AMEX</text>
    </svg>
  );
}

export function IconApplePay(props: IconProps) {
  const { title, ...rest } = base(props);
  return (
    <svg viewBox="0 0 48 32" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect width="48" height="32" rx="4" fill="currentColor" opacity="0.12" />
      <text x="24" y="21" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="700" fontFamily="Arial">APPLE PAY</text>
    </svg>
  );
}
