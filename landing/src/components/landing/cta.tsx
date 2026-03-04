export function CtaSection() {
  return (
    <section id="start" className="scroll-mt-28 px-6 pb-24 pt-14 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-brand/30 bg-gradient-to-br from-brand/20 via-brand/10 to-white p-10 text-center shadow-float sm:p-14">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Turn WhatsApp Into Your Best Sales Channel
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Stop losing high-intent leads to delayed replies. Let SmartReply engage every prospect instantly.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-float transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Start Using SmartReply
          </a>
        </div>
      </div>
    </section>
  );
}
