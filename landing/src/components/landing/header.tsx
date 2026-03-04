import Image from "next/image";

const navLinks = [
  { label: "Product", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-6 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-slate-200 bg-white/80 shadow-soft backdrop-blur-xl">
          <div className="flex h-[4.5rem] items-center justify-between px-4 sm:px-6">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/logo-cropped.png" alt="SmartReply logo" width={44} height={44} className="h-11 w-11 object-contain" unoptimized priority />
              <span className="text-base font-semibold tracking-tight text-slate-900">SmartReply</span>
            </a>

            <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand/30 hover:text-slate-900"
              >
                Book Demo
              </a>
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark"
              >
                Start Free
              </a>
            </div>

            <details className="relative md:hidden">
              <summary className="flex cursor-pointer list-none items-center rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand/30 hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
                      {link.label}
                    </a>
                  ))}
                  <a href="#start" className="mt-1 rounded-xl bg-brand px-3 py-2 text-center text-sm font-semibold text-white">
                    Start Free
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
