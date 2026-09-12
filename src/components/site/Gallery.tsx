import { useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import birthday from "@/assets/cake-birthday.jpg";
import wedding from "@/assets/cake-wedding.jpg";
import chocolate from "@/assets/cake-chocolate.jpg";
import fruit from "@/assets/cake-fruit.jpg";
import kids from "@/assets/cake-kids.jpg";
import designer from "@/assets/cake-designer.jpg";
import cupcakes from "@/assets/cake-cupcakes.jpg";
import bento from "@/assets/cake-bento.jpg";
import hero from "@/assets/hero-cake.jpg";
import baker from "@/assets/about-baker.jpg";

const images = [
  { src: designer, alt: "Hand-painted floral designer cake" },
  { src: birthday, alt: "Pink birthday cake with candles" },
  { src: wedding, alt: "Tiered white and gold wedding cake" },
  { src: cupcakes, alt: "Pastel buttercream cupcakes on a marble stand" },
  { src: chocolate, alt: "Chocolate ganache drip cake" },
  { src: hero, alt: "Blush and cream celebration cake with roses" },
  { src: fruit, alt: "Fresh fruit and cream cake" },
  { src: bento, alt: "Pink bento cake in a box" },
  { src: kids, alt: "Kids jungle theme fondant cake" },
  { src: baker, alt: "Baker decorating a cake by hand" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-gradient-warm py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="A little taste of our work"
          subtitle="Tap any photo to view it up close."
        />

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 4) * 0.06} className="break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-soft"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-cocoa opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="animate-fade-in fixed inset-0 z-100 grid place-items-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close preview"
            className="glass-card absolute top-5 right-5 grid size-11 place-items-center rounded-full"
          >
            <X className="size-5" />
          </button>
          <img
            src={images[active]!.src}
            alt={images[active]!.alt}
            className="animate-scale-in max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-lift"

          />
        </div>
      ) : null}
    </section>
  );
}
