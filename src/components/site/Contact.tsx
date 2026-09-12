import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const details = [
  { icon: MapPin, label: "Address", value: "24 Anna Salai, Nungambakkam, Chennai 600034" },
  { icon: Phone, label: "Phone", value: "+91 98400 12345" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98400 12345" },
  { icon: Mail, label: "Email", value: "hello@swathamcakewalk.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sun · 9:00 AM to 9:00 PM" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We'll get back to you within a few hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's plan your next celebration"
          subtitle="Tell us the date, the flavour and the occasion — we'll take it from there."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="glass-card h-full rounded-[2rem] p-8">
              <ul className="grid gap-6">
                {details.map((d) => (
                  <li key={d.label} className="flex min-w-0 gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush/60 text-blush-foreground">
                      <d.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                        {d.label}
                      </span>
                      <span className="block text-sm">{d.value}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="Swatham The Cake Walk location map"
                  src="https://www.google.com/maps?q=Nungambakkam,Chennai&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="h-full rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required placeholder="+91 ..." />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Occasion, date, flavour, size and any design ideas..."
                  />
                </div>
              </div>
              <Button type="submit" variant="gold" size="lg" className="mt-7 w-full" disabled={sending}>
                {sending ? "Sending..." : "Send enquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
