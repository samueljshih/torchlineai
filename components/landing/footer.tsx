import { Wordmark } from "./nav";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Wordmark size="sm" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600">© 2026</span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="transition-colors duration-300 hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-white">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
