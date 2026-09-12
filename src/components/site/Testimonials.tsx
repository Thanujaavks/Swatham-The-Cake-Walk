import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reviews = [
  {
    name: "Priya Ramesh",
    initials: "PR",
    text: "The bento cake for my sister's birthday was gorgeous and tasted even better. The buttercream was so light — everyone asked where I ordered from.",
  },
  {
    name: "Arun Kumar",
    initials: "AK",
    text: "We ordered a three-tier cake for our wedding reception. They matched our theme colours perfectly and delivered exactly on time. Flawless service.",
  },
  {
    name: "Divya Shankar",
    initials: "DS",
    text: "My son's jungle theme cake was the star of the party. The fondant animals were adorable and the sponge stayed moist till the next day.",
  },
  {
    name: "Nithya Balan",
    initials: "NB",
    text: "Genuinely homemade taste with a professional finish. The chocolate truffle is now our family's default anniversary cake.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="bg-gradient-warm py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Reviews" title="Sweet words from our customers" />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((r) => (
                <figure key={r.name} className="w-full shrink-0 px-1">
                  <div className="glass-card rounded-[2rem] p-8 sm:p-12">
                    <Quote className="size-8 text-gold" />
                    <blockquote className="font-display mt-6 text-2xl leading-relaxed sm:text-3xl">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-cocoa text-sm font-semibold text-primary-foreground">
                        {r.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-medium">{r.name}</span>
                        <span className="flex text-gold">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} className="size-4 fill-current" />
                          ))}
                        </span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gradient-gold" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
