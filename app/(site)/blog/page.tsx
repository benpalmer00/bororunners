import type { Metadata } from "next";
import { Suspense } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import RunningNewsFeed from "@/components/blog/RunningNewsFeed";
import { formatPostDate, getRecentMonthGroups } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "News, race reports, and stories from Bororunners Running Club. Stay up to date with Teesside's fastest growing running community.",
};

export default function BlogPage() {
  const { recent, earlier } = getRecentMonthGroups(2);

  return (
    <>
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="News & Blog"
              subtitle="Weekly reviews, race reports, and stories from the Bororunners community."
            />
          </AnimatedSection>

          {recent.map((group, groupIndex) => (
            <div key={group.id} className={groupIndex > 0 ? "mt-16" : ""}>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-black mb-8">
                {group.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.posts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <BlogCard
                      title={post.title}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      date={formatPostDate(post.publishedAt)}
                      image={post.image}
                      imageAlt={post.imageAlt}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}

          {earlier.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-black mb-8">
                Earlier
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {earlier.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <BlogCard
                      title={post.title}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      date={formatPostDate(post.publishedAt)}
                      image={post.image}
                      imageAlt={post.imageAlt}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Suspense
        fallback={
          <div className="section-padding bg-brand-gray-50 text-center">
            <p className="text-brand-gray-400">Loading running news...</p>
          </div>
        }
      >
        <RunningNewsFeed />
      </Suspense>
    </>
  );
}
