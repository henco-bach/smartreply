const chatRows = [
  {
    side: "left",
    text: "Hi, do you have tables for 6 tonight?"
  },
  {
    side: "right",
    text: "Yes, we have 7:30 PM available. Should I reserve it for you?"
  },
  {
    side: "left",
    text: "Perfect. Please book it."
  },
  {
    side: "right",
    text: "Done. You're confirmed for 6 guests at 7:30 PM."
  }
] as const;

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden pt-4 sm:pt-10">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(circle_at_top,rgba(37,211,102,0.24),rgba(255,255,255,0))]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-14">
        <div className="animate-reveal-up space-y-8 [animation-delay:80ms]">
          <p className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark">
            AI WhatsApp Automation
          </p>
          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Never Miss a WhatsApp Lead Again.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              SmartReply uses AI to instantly respond to customer messages so you can capture more sales while you sleep.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-float transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Start Free
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:text-slate-900"
            >
              Book Demo
            </a>
          </div>
          <p className="text-sm text-slate-500">Trusted by teams handling thousands of customer chats every week.</p>
        </div>

        <div className="relative animate-reveal-up [animation-delay:200ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent blur-2xl" aria-hidden />
          <div className="relative mx-auto w-full max-w-sm animate-float-slow rounded-[2.2rem] border border-slate-200 bg-white p-3 shadow-float">
            <div className="rounded-[1.8rem] border border-slate-100 bg-slate-50 px-4 pb-5 pt-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">WhatsApp Inbox</p>
                  <p className="text-xs text-slate-500">SmartReply Assistant</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-brand animate-pulse-soft" />
              </div>
              <div className="space-y-3">
                {chatRows.map((row) => (
                  <div key={row.text} className={`flex ${row.side === "right" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        row.side === "right"
                          ? "rounded-br-md bg-brand text-white"
                          : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      {row.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-brand/30 bg-brand/5 px-3 py-2 text-xs text-brand-dark">
                SmartReply sent in 1.2s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
