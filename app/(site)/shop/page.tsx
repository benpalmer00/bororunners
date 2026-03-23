import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MerchandiseCard from "@/components/shop/MerchandiseCard";
import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { merchandiseQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Bororunners Running Club merchandise and kit. Running vests, t-shirts, hoodies and more. Order through Sprinters Sportswear.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityMerchandise = any;

type MerchandiseItem = {
  name: string;
  photo: string;
  price: string;
  sizes?: string[];
  url?: string;
};

const fallbackMerchandise: MerchandiseItem[] = [
  {
    name: "Boro Runners Boro Drinkers T-Shirt (Unisex)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2025/05/20250524_143443-300x300.jpg",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-boro-drinkers-t-shirt-unisex/",
  },
  {
    name: "Boro Runners Boro Drinkers T-Shirt (Female Fit)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2025/05/20250524_143443-300x300.jpg",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-boro-drinkers-t-shirt-female-fit/",
  },
  {
    name: "Boro Runners Snow Star Beanie",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2024/12/BRBEANIE-300x300.png",
    price: "£7.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-snow-star-beanie/",
  },
  {
    name: "Boro Runners Thinsulate Bobble Hat",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2026/02/boro-runners-thinsulate-hat-300x300.png",
    price: "£8.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-thinsulate-bobble-hat/",
  },
  {
    name: "Boro Runners Tracksuit Hoodless Top",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2025/11/BR-TRACK-TOP-FNT-300x300.png",
    price: "£23.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-tracksuit-hoodless-top/",
  },
  {
    name: "Boro Runners Tracksuit Pants",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2025/11/BR-TRACK-PANTS-FNT2-300x300.png",
    price: "£23.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-tracksuit-pants/",
  },
  {
    name: "Boro Runners Zipped Hoodie",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2025/06/zipped-hoodie-300x300.png",
    price: "£25.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-zipped-hoodie/",
  },
  {
    name: "Boro Runners Unisex Vest",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/brlv-fnt-300x300.png",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-vest/",
  },
  {
    name: "Boro Runners Backpack",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/brbackpack-300x300.png",
    price: "£17.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-backpack/",
  },
  {
    name: "Boro Runners Core DWL Jacket",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/10/brj-300x300.png",
    price: "£30.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-core-dwl-dri-warm-lite-jacket/",
  },
  {
    name: "Boro Runners Ladies Fit T-Shirt",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/brf-300x300.png",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-ladies-fit-t-shirt/",
  },
  {
    name: "Boro Runners Ladies Fit Vest",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/brlv-fnt-300x300.png",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-ladies-fit-vest/",
  },
  {
    name: "Boro Runners Long Sleeve Reflective (Ladies Fit)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/10/brf-300x300.png",
    price: "£16.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeve-top-reflective-ladies-fit/",
  },
  {
    name: "Boro Runners Long Sleeve Reflective (Unisex)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/10/brf-300x300.png",
    price: "£16.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeved-top-reflective-unisex/",
  },
  {
    name: "Boro Runners Long Sleeve Top (Unisex)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/BR-LSTU-300x300.png",
    price: "£15.50",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeved-top-unisex/",
  },
  {
    name: "Boro Runners Reflective T-Shirt (Ladies Fit)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/10/brlrt-300x300.png",
    price: "£14.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-reflective-t-shirt-ladies-fit/",
  },
  {
    name: "Boro Runners Reflective T-Shirt (Unisex)",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/10/brrt-300x300.png",
    price: "£14.00",
    url: "https://www.sprinterssportswear.co.uk/product/bororunners-reflective-t-shirt-unisex/",
  },
  {
    name: "Boro Runners Unisex Hoodie",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/br-front-300x300.png",
    price: "£23.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-hoodie/",
  },
  {
    name: "Boro Runners Unisex T-Shirt",
    photo: "https://www.sprinterssportswear.co.uk/wp-content/uploads/2022/09/brf-300x300.png",
    price: "£13.00",
    url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-t-shirt/",
  },
];

export default async function ShopPage() {
  const sanityItems = await sanityFetch<SanityMerchandise[]>(merchandiseQuery);

  const merchandise: MerchandiseItem[] = sanityItems && sanityItems.length > 0
    ? sanityItems.map((item: SanityMerchandise) => ({
        name: item.name,
        photo: item.photo ? urlFor(item.photo).width(600).height(600).url() : "",
        price: `£${typeof item.price === "number" ? item.price.toFixed(2) : item.price}`,
        sizes: item.sizes,
        url: item.url,
      }))
    : fallbackMerchandise;

  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Club Shop"
            subtitle="Represent Bororunners in the official club kit. All merchandise is available through our kit supplier, Sprinters Sportswear."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {merchandise.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.05}>
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
              Click any product above to go directly to it, or browse the full range below.
            </p>
            <a
              href="https://www.sprinterssportswear.co.uk/product-category/clubs/boro_runners/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase px-6 py-3 rounded-md hover:bg-brand-red-dark transition-colors"
            >
              Browse Full Range on Sprinters
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
