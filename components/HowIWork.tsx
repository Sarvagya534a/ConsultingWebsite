import FadeIn from "./FadeIn";

const processSteps = [
  {
    title: "I understand your business",
    body: "Placeholder description goes here. Two short lines about getting to know who you serve, what you sell, and where the friction actually lives.",
  },
  {
    title: "I understand your daily operations",
    body: "Placeholder description goes here. Two short lines about sitting with the day-to-day — the tools, the handoffs, the small repeated tasks.",
  },
];

const questions = [
  {
    number: "1",
    title: "Question one",
    body: "Placeholder description goes here. Two or three short lines that explain what this question really means in practice.",
  },
  {
    number: "2",
    title: "Question two",
    body: "Placeholder description goes here. Two or three short lines that explain what this question really means in practice.",
  },
  {
    number: "3",
    title: "Question three",
    body: "Placeholder description goes here. Two or three short lines that explain what this question really means in practice.",
  },
];

const labelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-accent";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-container flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            How I Work
          </span>
          <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h2 className="mt-12 max-w-prose font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            {/* PLACEHOLDER */}
            Not everything should be automated. Here&apos;s how I decide.
          </h2>
        </FadeIn>

        {/* Block 1 — My process */}
        <FadeIn className="mt-20 flex flex-col items-center md:mt-24">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            The Process
          </span>
        </FadeIn>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-12 sm:gap-10 md:grid-cols-2 md:gap-14">
          {processSteps.map((step, i) => (
            <FadeIn
              key={step.title}
              delay={i * 120}
              className="flex flex-col items-center px-2 text-center"
            >
              <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                {/* PLACEHOLDER */}
                {step.title}
              </h3>
              <p className="mt-3 max-w-[360px] text-sm leading-relaxed text-ink-soft sm:text-base">
                {/* PLACEHOLDER */}
                {step.body}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <FadeIn className="my-20 md:my-24">
          <div aria-hidden className="h-px w-16 bg-ink/15" />
        </FadeIn>

        {/* Block 2 — The questions I ask */}
        <FadeIn className="flex flex-col items-center">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            The Questions I Ask
          </span>
        </FadeIn>

        <div className="mt-12 grid w-full grid-cols-1 gap-14 sm:gap-12 md:grid-cols-3 md:gap-10">
          {questions.map((q, i) => (
            <FadeIn
              key={q.number}
              delay={i * 120}
              className="flex flex-col items-center px-2 text-center"
            >
              <span className="font-serif text-6xl leading-none text-accent sm:text-7xl">
                {q.number}
              </span>
              <h3 className="mt-6 font-sans text-lg font-semibold text-ink">
                {/* PLACEHOLDER */}
                {q.title}
              </h3>
              <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-ink-soft sm:text-base">
                {/* PLACEHOLDER */}
                {q.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 md:mt-24">
          <p className="max-w-prose font-serif text-lg italic leading-relaxed text-ink-soft sm:text-xl">
            {/* PLACEHOLDER */}
            A closing line goes here — something warm and human that ties it all
            together.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
