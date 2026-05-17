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
            Here&apos;s what working together looks like.
          </h2>
        </FadeIn>

        {/* Step 1 */}
        <FadeIn className="mt-20 flex w-full max-w-[640px] flex-col items-center md:mt-24">
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            First
          </span>
          <h3 className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[2rem]">
            {/* PLACEHOLDER */}
            I sit with your business and watch how the work actually flows.
          </h3>
          <p className="mt-5 max-w-[560px] text-base leading-relaxed text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            A line or two about getting to know your people, your tools, and the
            small repeated tasks that quietly eat the day.
          </p>
        </FadeIn>

        {/* Step 2 */}
        <FadeIn
          delay={120}
          className="mt-24 flex w-full max-w-[640px] flex-col items-center md:mt-28"
        >
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            Then
          </span>
          <h3 className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[2rem]">
            {/* PLACEHOLDER */}
            We find the bottlenecks — and decide which ones are worth solving.
          </h3>
          <p className="mt-5 max-w-[560px] text-base leading-relaxed text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            Not every slow step is worth touching. For each bottleneck we
            surface, I keep coming back to three honest questions.
          </p>

          <ul className="mt-8 flex flex-col items-center gap-2 font-serif italic text-ink-soft">
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
          className="mt-24 flex w-full max-w-[640px] flex-col items-center md:mt-28"
        >
          <span className={labelClass}>
            {/* PLACEHOLDER */}
            Finally
          </span>
          <h3 className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-[2rem]">
            {/* PLACEHOLDER */}
            We design intelligent systems that streamline the work — and free up
            real output.
          </h3>
          <p className="mt-5 max-w-[560px] text-base leading-relaxed text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            A line or two about building the right intelligent systems — saving
            hours, lifting production, and keeping what makes your work yours.
          </p>
        </FadeIn>

        <FadeIn className="mt-24 md:mt-28">
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
