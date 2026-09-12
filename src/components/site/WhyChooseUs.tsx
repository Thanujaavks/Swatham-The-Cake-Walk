import { Leaf, Gem, HeartHandshake, Truck, BadgeIndianRupee, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Real butter, fresh cream and seasonal fruit, sourced weekly." },
  { icon: Gem, title: "Premium Quality", desc: "Belgian chocolate and pure vanilla in every single layer." },
  { icon: HeartHandshake, title: "Handmade with Love", desc: "Every flower, drip and letter is piped by hand." },
  { icon: Truck, title: "Fast Delivery", desc: "Same-day slots available across the city, chilled and safe." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Boutique quality at honest, transparent prices." },
  { icon: Sparkles, title: "Custom Designs", desc: "Bring a photo or an idea — we'll make it edible." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why Choose Us" title="Reasons our customers keep coming back" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="group h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className="grid size-14 place-items-center rounded-2xl bg-blush/60 text-blush-foreground transition-transform duration-500 group-hover:rotate-6">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
