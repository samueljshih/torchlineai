import Image from "next/image";
import { cn } from "@/lib/utils";

/** Same artwork file as the Torchline app's BrandMark (torchline-web/public/assets). */
export const LOGO_SRC = "/torchline_logo.png";

/** The Torchline mark. Every place the brand renders uses this, so it cannot drift. Size it by height. */
export function BrandMark({ className, alt = "" }: { className?: string; alt?: string }) {
  return <Image src={LOGO_SRC} alt={alt} width={190} height={316} unoptimized loading="eager" className={cn("w-auto", className)} />;
}
