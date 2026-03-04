import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </BaseIcon>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 9 16H3L12 3Z" />
      <path d="M12 9v4" />
      <path d="M12 16h.01" />
    </BaseIcon>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-3" />
      <path d="M12 15v-6" />
      <path d="M16 15V8" />
    </BaseIcon>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />
    </BaseIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 14a7 7 0 1 1-10-10 8 8 0 1 0 10 10Z" />
    </BaseIcon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16v10H9l-5 4V6Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </BaseIcon>
  );
}

export function InboxIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 7h18v10H3z" />
      <path d="M3 13h5l2 3h4l2-3h5" />
    </BaseIcon>
  );
}
