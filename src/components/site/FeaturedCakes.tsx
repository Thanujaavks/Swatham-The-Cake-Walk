import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";
import birthday from "@/assets/cake-birthday.jpg";
import wedding from "@/assets/cake-wedding.jpg";
import chocolate from "@/assets/cake-chocolate.jpg";
import fruit from "@/assets/cake-fruit.jpg";
import kids from "@/assets/cake-kids.jpg";
import designer from "@/assets/cake-designer.jpg";
import cupcakes from "@/assets/cake-cupcakes.jpg";
import bento from "@/assets/cake-bento.jpg";

const cakes = [
  {
    name: "Birthday Cakes",
    image: birthday,
    desc: "Soft vanilla sponge, whipped buttercream and personalised toppers.",
    price: "₹850",
  },
  {
    name: "Wedding Cakes",
    image: wedding,
    desc: "Multi-tier showpieces with sugar florals and hand-piped gold work.",
    price: "₹6,500",
  },
  {
    name: "Chocolate Cakes",
    image: chocolate,
    desc: "Belgian dark ganache over a deep, fudgy chocolate crumb.",
    price: "₹950",
  },
  {
    name: "Fruit Cakes",
    image: fruit,
    desc: "Fresh cream layered with strawberry, kiwi and blueberry.",
    price: "₹1,050",
  },
  {
    name: "Kids Theme Cakes",
    image: kids,
    desc: "Hand-sculpted fondant characters your little one will adore.",
    price: "₹1,400",
  },
  {
    name: "Custom Designer Cakes",
    image: designer,
    desc: "Hand-painted artistry, edible gold leaf and bespoke detailing.",
    price: "₹2,200",
  },
  {
    name: "Cupcakes",
    image: cupcakes,
    desc: "Boxes of six or twelve, swirled in pastel buttercream.",
    price: "₹450",
  },
  {
    name: "Bento Cakes",
    image: bento,
    desc: "Cute lunchbox cakes with a message piped just for them.",
    price: "₹600",
  },
];

export function FeaturedCakes() {
  return (
    <section id="cakes" className="bg-gradient-warm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Signatures"
          title="Featured cakes for every celebration"
          subtitle="Baked to order, decorated by hand, delivered fresh on the day you need it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cakes.map((cake, i) => (
            <Reveal key={cake.name} delay={(i % 4) * 0.08}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="glass-card absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium">
                    From {cake.price}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="text-xl">{cake.name}</h3>
                  <p className="text-sm text-muted-foreground">{cake.desc}</p>
                  <Button asChild variant="outlineWarm" size="sm" className="mt-1 w-full">
                    <a href="#contact">Order</a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
