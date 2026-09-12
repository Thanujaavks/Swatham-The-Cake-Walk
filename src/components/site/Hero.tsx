import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCake from "@/assets/hero-cake.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroCake}
        alt="Three-tier blush and cream celebration cake with gold leaf and fresh roses"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent lg:via-background/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />



      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pt-32 pb-20 sm:px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-eyebrow"
          >
            ஸ்வாதம் · The Taste Of Food
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-5xl leading-[1.05] sm:text-7xl"
          >
            Swatham
            <span className="block text-gradient-gold">The Cake Walk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            Crafting Sweet Memories, One Cake at a Time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button asChild variant="gold" size="lg">
              <a href="#contact">
                Order Now <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outlineWarm" size="lg">
              <a href="#cakes">Explore Cakes</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="glass-card mt-12 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl px-6 py-4"
          >
            <span className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              Loved by 1,200+ happy celebrations
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
