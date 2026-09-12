import { CakeSlice, Ruler, Palette, ImagePlus, PartyPopper } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: CakeSlice,
    title: "Choose your flavour",
    desc: "Vanilla bean, Belgian chocolate, red velvet, butterscotch, fresh fruit and more.",
  },
  {
    icon: Ruler,
    title: "Select the size",
    desc: "From a 300g bento to five celebration tiers — we scale to your guest list.",
  },
  {
    icon: Palette,
    title: "Pick a design",
    desc: "Share your palette and theme; we sketch the decoration before we bake.",
  },
  {
    icon: ImagePlus,
    title: "Upload inspiration",
    desc: "Send a reference photo on WhatsApp and we'll recreate it in our style.",
  },
  {
    icon: PartyPopper,
    title: "Place your order",
    desc: "Confirm the date, we bake fresh and deliver it right on time.",
  },
];

export function CustomOrders() {
  return (
    <section id="custom" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Custom Orders"
          title="Your cake, designed step by step"
          subtitle="A simple five-step process from first idea to the moment the candles are lit."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <div className="glass-card group relative h-full rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-2">
                <span className="font-display absolute top-4 right-5 text-4xl text-gold/40">
                  {i + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-cocoa text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Button asChild variant="gold" size="lg">
            <a href="#contact">Start my custom cake</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
