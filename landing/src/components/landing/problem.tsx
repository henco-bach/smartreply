import { AlertIcon, ChartIcon, ClockIcon } from "./icons";
import { SectionHeading } from "./section-heading";

const problems = [
  {
    title: "Slow replies",
    text: "Manual responses lag behind customer intent and reduce conversion momentum.",
    Icon: ClockIcon
  },
  {
    title: "Missed messages",
    text: "Leads go unanswered when your team is busy, offline, or overloaded.",
    Icon: AlertIcon
  },
  {
    title: "Lost sales",
    text: "Delayed follow-up gives buyers time to move to faster competitors.",
    Icon: ChartIcon
  }
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Problem"
          title="Most Businesses Are Losing WhatsApp Leads"
          description="Speed wins in chat. Every unanswered message is a missed opportunity."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/30"
            >
              <div className="mb-5 inline-flex rounded-xl bg-brand/10 p-3 text-brand-dark transition group-hover:bg-brand/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
