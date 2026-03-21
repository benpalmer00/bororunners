import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "News, race reports, and stories from Bororunners Running Club. Stay up to date with Teesside's fastest growing running community.",
};

const placeholderPosts = [
  {
    title: "England Athletics Club of the Year 2024",
    slug: "club-of-the-year-2024",
    excerpt:
      "We're thrilled to announce that Bororunners has been named England Athletics Regional Volunteer Awards Community Project of the Year 2024. A huge milestone for our club and community.",
    date: "December 2024",
    image: "/images/photos/celebration-1.jpg",
    imageAlt: "Bororunners celebrating Club of the Year award",
  },
  {
    title: "From 8 to 272: Our Growth Story",
    slug: "growth-story",
    excerpt:
      "In just over two years, Bororunners has grown from 8 founding members to 272 registered runners. Here's how community-first thinking built Teesside's fastest growing running club.",
    date: "October 2024",
    image: "/images/photos/group-2.jpg",
    imageAlt: "Bororunners group photo showing club growth",
  },
  {
    title: "Race Day Roundup: Great North Run",
    slug: "great-north-run-roundup",
    excerpt:
      "What a day at the Great North Run! Over 30 Bororunners members took on the iconic half marathon from Newcastle to South Shields. Every single one cheered home by the rest of the club.",
    date: "September 2024",
    image: "/images/photos/race-day-1.jpg",
    imageAlt: "Bororunners at the Great North Run",
  },
];

export default function BlogPage() {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="News & Blog"
            subtitle="Race reports, club news, and stories from the Bororunners community."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <BlogCard {...post} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-gray-500">
            More posts coming soon. Check back regularly or follow us on social media for the latest updates.
          </p>
        </div>
      </div>
    </section>
  );
}
