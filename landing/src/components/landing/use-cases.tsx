import { SectionHeading } from "./section-heading";

const cases = ["Restaurants", "Real estate agents", "eCommerce stores", "service businesses"];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for Teams That Need Instant Customer Response"
          description="From local businesses to fast-growing brands, SmartReply keeps your pipeline active."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white"
            >
              <h3 className="text-base font-semibold text-slate-800">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">Automate first response and convert more WhatsApp conversations into sales.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
