import Image from "next/image";

const links = [
  { label: "Product", href: "#features" },
  { label: "Pricing", href: "#start" },
  { label: "Docs", href: "#how-it-works" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
        <div className="flex items-center gap-3">
          <Image src="/logo-cropped.png" alt="SmartReply logo" width={44} height={44} className="h-11 w-11 object-contain" unoptimized />
          <span className="text-base font-semibold tracking-tight text-slate-900">SmartReply</span>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 text-sm text-slate-600">
          {links.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-dark">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
