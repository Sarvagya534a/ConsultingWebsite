import FadeIn from "./FadeIn";

const labelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-accent";

const questions = [
  "How often does this slow the work down?",
  "Can an intelligent system handle it reliably?",
  "What does fixing it actually free up?",
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-container flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            How I Work
          </span>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            A short two-sentence opener goes here. Something credible and warm
            that earns the reader&apos;s attention before the journey begins.
          </p>
          <h2 className="mt-8 max-w-prose font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.5rem]">
            {/* PLACEHOLDER */}
            Here&apos;s what working together looks like.
          </h2>
        </FadeIn>

        {/* Step 1 */}
        <FadeIn className="mt-14 flex w-full max-w-[640px] flex-col items-center md:mt-16">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            First
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[1.875rem]">
            {/* PLACEHOLDER */}
            I sit with your business and watch how the work actually flows.
          </h3>
        </FadeIn>

        {/* Step 2 */}
        <FadeIn
          delay={120}
          className="mt-16 flex w-full max-w-[640px] flex-col items-center md:mt-20"
        >
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            Then
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[1.875rem]">
            {/* PLACEHOLDER */}
            We find the bottlenecks — and decide which ones are worth solving.
          </h3>
          <ul className="mt-6 flex flex-col items-center gap-2 font-serif italic text-ink-soft">
            {questions.map((q) => (
              <li key={q} className="text-lg sm:text-xl">
                {/* PLACEHOLDER */}
                {q}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Step 3 */}
        <FadeIn
          delay={240}
          className="mt-16 flex w-full max-w-[640px] flex-col items-center md:mt-20"
        >
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            Finally
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[1.875rem]">
            {/* PLACEHOLDER */}
            We design intelligent systems that streamline the work — and free up
            real output.
          </h3>
        </FadeIn>
      </div>
    </section>
  );
}
