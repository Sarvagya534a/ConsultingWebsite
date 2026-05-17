import FadeIn from "./FadeIn";

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

export default function HowIWork() {
  return (
    <section id="how-i-work" className="px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-container flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
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

        <div className="mt-20 grid w-full grid-cols-1 gap-14 sm:gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
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
