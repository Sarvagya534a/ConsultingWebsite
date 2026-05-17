export default function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-6 sm:px-8 sm:py-8">
        <a
          href="#"
          className="font-serif text-lg text-ink transition-colors hover:text-accent"
        >
          {/* PLACEHOLDER: your name */}
          Your Name
        </a>
        <a
          href="#contact"
          className="text-sm tracking-wide text-ink transition-colors hover:text-accent"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
