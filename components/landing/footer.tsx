import Image from "next/image";
import { LOGO_URL } from "./content";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Image src={LOGO_URL} alt="Torchline Logo" width={24} height={24} className="h-6 w-6 object-contain" />
          <span className="text-sm font-medium tracking-[-0.01em] text-zinc-400">© 2026 Torchline AI</span>
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
