import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { formatPostDate, getBlogPost, getBlogSlugs } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt || post.body[0],
    openGraph: post.image ? { images: [post.image] } : undefined,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <section className="section-padding pt-24 md:pt-32 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-brand-black mb-4">Post Not Found</h1>
        <Button href="/blog">Back to Blog</Button>
      </section>
    );
  }

  const date = formatPostDate(post.publishedAt, true);

  return (
    <article className="section-padding pt-24 md:pt-32">
      <div className="container-narrow mx-auto">
        <AnimatedSection>
          <Link href="/blog" className="text-brand-red font-medium text-sm hover:underline mb-6 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase text-brand-black mt-4 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-brand-gray-500 mb-8">
            <span>{date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          {post.image && (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}

          <div className="prose max-w-none">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-brand-gray-600 leading-relaxed mb-4 text-lg whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            author: { "@type": "Organization", name: "Bororunners Running Club" },
            image: post.image.startsWith("/") ? `https://bororunners.co.uk${post.image}` : post.image || undefined,
          }),
        }}
      />
    </article>
  );
}
