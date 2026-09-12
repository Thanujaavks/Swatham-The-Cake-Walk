import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { FeaturedCakes } from "@/components/site/FeaturedCakes";
import { CustomOrders } from "@/components/site/CustomOrders";
import { Gallery } from "@/components/site/Gallery";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Swatham – The Cake Walk | Custom Homemade Cakes in Chennai";
const description =
  "Freshly baked birthday, wedding, chocolate, bento and custom designer cakes handmade with premium ingredients. Crafting sweet memories, one cake at a time.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedCakes />
        <CustomOrders />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Swatham – The Cake Walk",
            description,
            telephone: "+91 98400 12345",
            email: "hello@swathamcakewalk.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "24 Anna Salai, Nungambakkam",
              addressLocality: "Chennai",
              postalCode: "600034",
              addressCountry: "IN",
            },
            openingHours: "Mo-Su 09:00-21:00",
          }),
        }}
      />
    </div>
  );
}
