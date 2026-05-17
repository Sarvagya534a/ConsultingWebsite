import FadeIn from "./FadeIn";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <Nav />
      <div className="flex flex-1 items-center justify-center px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
        <FadeIn className="mx-auto flex w-full max-w-prose flex-col items-center text-center">
          {/* PLACEHOLDER: circular photo */}
          <div
            aria-hidden
            className="mb-10 h-[180px] w-[180px] rounded-full bg-[#d9d2c7]"
          />
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {/* PLACEHOLDER */}
            Headline goes here — one strong line about what I do
          </h1>
          <p className="mt-6 max-w-prose text-base text-ink-soft sm:text-lg">
            {/* PLACEHOLDER */}
            Sub-headline goes here — one supporting line
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-opacity hover:opacity-90"
          >
            Let&apos;s Talk
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
