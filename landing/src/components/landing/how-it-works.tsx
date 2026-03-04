import { SectionHeading } from "./section-heading";

const steps = [
  {
    id: "01",
    title: "Connect WhatsApp",
    text: "Link your business number and route incoming messages to SmartReply."
  },
  {
    id: "02",
    title: "Train AI on your business",
    text: "Add FAQs, offers, and tone so replies sound aligned with your brand."
  },
  {
    id: "03",
    title: "SmartReply handles conversations",
    text: "Let AI qualify leads, answer questions, and keep chats moving to conversion."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Launch in Minutes, Not Months"
          description="Set up once, then let SmartReply run continuously across every inbound chat."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand-dark">
                Step {step.id}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
