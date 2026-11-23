import { BrandMark } from "./brand-mark";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="tone-dark border-t border-edge">
      <Container className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <BrandMark alt="Torchline Logo" className="h-10" />
          <span className="text-sm font-semibold tracking-[-0.01em] text-fg-muted">© 2026 Torchline AI</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-fg-subtle">
          <a href="#" className="transition-colors duration-300 hover:text-fg">
            Privacy
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-fg">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
