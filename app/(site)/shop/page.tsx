import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MerchandiseCard from "@/components/shop/MerchandiseCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Bororunners Running Club merchandise and kit. Running vests, t-shirts, hoodies and more. Order through Sprinters Sportswear.",
};

const merchandise = [
  {
    name: "Club Running Vest",
    photo: "/images/photos/race-day-1.jpg",
    description: "The iconic red Bororunners race vest. Lightweight, breathable, and designed for race day performance.",
    price: "Contact for pricing",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Club T-Shirt",
    photo: "/images/photos/training-1.jpg",
    description: "Bororunners training t-shirt. Perfect for sessions and casual wear. Moisture-wicking fabric.",
    price: "Contact for pricing",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Club Hoodie",
    photo: "/images/photos/social-1.jpg",
    description: "Bororunners hoodie for before and after sessions. Warm, comfortable, and showing your club colours.",
    price: "Contact for pricing",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export default function ShopPage() {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Club Shop"
            subtitle="Represent Bororunners in the official club kit. All merchandise is available through our kit supplier, Sprinters Sportswear."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1}>
              <MerchandiseCard {...item} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 bg-brand-gray-50 rounded-xl p-8 text-center">
            <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">
              How to Order
            </h3>
            <p className="text-brand-gray-600 max-w-2xl mx-auto mb-4">
              All Bororunners merchandise is ordered through our official kit supplier, Sprinters Sportswear.
              Visit their website or speak to a committee member at any session for more details.
            </p>
            <a
              href="https://www.sprinterssportswear.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase px-6 py-3 rounded-md hover:bg-brand-red-dark transition-colors"
            >
              Visit Sprinters Sportswear
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
