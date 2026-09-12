import { useEffect, useState } from "react";
import { Menu, X, CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Custom Orders", href: "#custom" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card rounded-none py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-cocoa text-primary-foreground">
            <CakeSlice className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none font-semibold">
              Swatham
            </span>
            <span className="block truncate text-[0.65rem] tracking-[0.28em] text-muted-foreground uppercase">
              The Cake Walk
            </span>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-gold after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Order Now</a>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/70 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-4 mt-3 grid gap-1 rounded-3xl border border-border bg-card/95 p-3 shadow-soft sm:mx-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-1">
            <Button asChild variant="gold" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Order Now
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
