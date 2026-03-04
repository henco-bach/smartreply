import { BoltIcon, ChatIcon, InboxIcon, MoonIcon } from "./icons";
import { SectionHeading } from "./section-heading";

const features = [
  {
    title: "AI replies to customers instantly",
    text: "Send natural responses in seconds to keep every conversation active.",
    Icon: BoltIcon
  },
  {
    title: "Works 24/7",
    text: "Respond overnight, weekends, and holidays without adding headcount.",
    Icon: MoonIcon
  },
  {
    title: "Integrates with WhatsApp",
    text: "Connect your WhatsApp workflow in minutes with no custom system rebuild.",
    Icon: ChatIcon
  },
  {
    title: "Captures leads automatically",
    text: "Collect names, intent, and contact details while the conversation flows.",
    Icon: InboxIcon
  }
];

export function SolutionSection() {
  return (
    <section id="features" className="relative scroll-mt-28 overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,211,102,0.15),rgba(255,255,255,0)_42%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft sm:p-12">
        <SectionHeading
          eyebrow="The Solution"
          title="SmartReply Handles It Automatically"
          description="Automate first-touch response without sacrificing quality, clarity, or brand voice."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map(({ title, text, Icon }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand/30 hover:bg-white">
              <div className="mb-4 inline-flex rounded-xl bg-white p-2.5 text-brand-dark shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
