import { CakeSlice, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Custom Orders", href: "#custom" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-cocoa text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-gold text-cocoa">
              <CakeSlice className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="font-display block text-xl">Swatham</span>
              <span className="block text-[0.65rem] tracking-[0.28em] uppercase opacity-70">
                The Cake Walk
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm opacity-75">
            ஸ்வாதம் — The Taste Of Food. Homemade cakes and desserts, crafted fresh for
            every celebration.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#contact"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/10"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg">Quick Links</h3>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm opacity-80">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-opacity hover:opacity-100 hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Contact</h3>
          <ul className="mt-5 grid gap-2 text-sm opacity-80">
            <li>24 Anna Salai, Nungambakkam, Chennai 600034</li>
            <li>+91 98400 12345</li>
            <li>hello@swathamcakewalk.com</li>
            <li>Open daily · 9:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs opacity-70 sm:px-6">
          © {new Date().getFullYear()} Swatham – The Cake Walk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
