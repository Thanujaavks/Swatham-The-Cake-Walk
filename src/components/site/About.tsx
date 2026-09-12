import { Reveal } from "./Reveal";
import aboutBaker from "@/assets/about-baker.jpg";

const specialities = [
  "Birthday cakes",
  "Wedding cakes",
  "Anniversary cakes",
  "Cupcakes",
  "Dessert collections",
  "Fully customised designs",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -top-6 -left-6 size-40 rounded-full bg-blush/50 blur-2xl" />
          <img
            src={aboutBaker}
            alt="Baker piping delicate cream flowers onto a fresh cake"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative w-full rounded-[2.5rem] object-cover shadow-lift"
          />
          <div className="glass-card absolute -right-2 -bottom-8 rounded-3xl px-6 py-5 sm:right-8">
            <p className="font-display text-3xl">100%</p>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Homemade &amp; fresh
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">
              Baked at home, with the kind of care you can taste
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground">
              Swatham began in a small family kitchen, with one belief: a cake should taste
              as beautiful as it looks. Every layer is baked fresh to order using premium
              butter, real chocolate, seasonal fruit and pure vanilla — never premixes,
              never shortcuts.
            </p>
            <p className="mt-4 text-muted-foreground">
              From a tiny bento cake for a quiet apology to a five-tier centrepiece for a
              wedding hall, we design each order around your story, your colours and your
              flavour.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {specialities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm"
                >
                  <span className="size-2 shrink-0 rounded-full bg-gradient-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
