import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

type Props = {
  params: { slug: string };
};

const posts: Record<string, { title: string; date: string; author: string; image: string; content: string[] }> = {
  "club-of-the-year-2024": {
    title: "England Athletics Club Committee of the Year 2024",
    date: "December 2024",
    author: "Bororunners",
    image: "/images/photos/celebration-1.jpg",
    content: [
      "We are incredibly proud to announce that Bororunners has been named the England Athletics Club Committee of the Year 2024.",
      "This award recognises the incredible work of our entire community — from our founder and head coach Ben Palmer, to every single run leader, committee member, and the 272 members who make this club what it is.",
      "When we started with just 8 runners in Stewart's Park, we never imagined we'd be standing here receiving a national award. But we always knew we were building something special — a club where every runner, at every level, is genuinely welcomed and celebrated.",
      "Our founder Ben Palmer also received the individual Regional Volunteer Award, a well-deserved recognition of the countless hours he has put into coaching, organising, and inspiring our community.",
      "This award belongs to every Bororunner. Thank you for making this club what it is. Here's to the next chapter.",
    ],
  },
  "growth-story": {
    title: "From 8 to 272: Our Growth Story",
    date: "October 2024",
    author: "Bororunners",
    image: "/images/photos/group-2.jpg",
    content: [
      "In March 2022, Ben Palmer gathered 8 runners who shared a vision: a running club that put community before competition.",
      "Two and a half years later, Bororunners has grown to 272 registered members — making us one of the fastest growing running clubs in the North East.",
      "So how did we get here? The answer is simple: we built a club where people actually want to be. A club where new runners are welcomed by name in a circle before every session. Where run leaders guide every pace group. Where everyone stays at every race to cheer the last runner home.",
      "Our growth has been entirely organic — word of mouth, social media, and most importantly, the friendships our members have built. When people feel genuinely welcome, they bring their friends. And their friends bring theirs.",
      "We're not slowing down. Four weekly sessions, regular social events, and a community that keeps growing. If you haven't tried running with us yet, there's never been a better time.",
    ],
  },
  "great-north-run-roundup": {
    title: "Race Day Roundup: Great North Run",
    date: "September 2024",
    author: "Bororunners",
    image: "/images/photos/race-day-1.jpg",
    content: [
      "What. A. Day. Over 30 Bororunners members took on the iconic Great North Run — the world's biggest half marathon, from Newcastle to South Shields.",
      "From first-timers to seasoned half-marathon runners, every single Bororunner gave it their all. And true to form, the rest of the club was there to cheer every single one of them home.",
      "That's what makes race day with Boro special. We don't just enter races — we experience them together. Before, during, and especially at the finish line.",
      "Congratulations to every Bororunner who ran, cheered, supported, and celebrated. You are what makes this club incredible.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content[0],
    openGraph: { images: [post.image] },
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <section className="section-padding pt-24 md:pt-32 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-brand-black mb-4">Post Not Found</h1>
        <Button href="/blog">Back to Blog</Button>
      </section>
    );
  }

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
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
          </div>

          <div className="prose max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="text-brand-gray-600 leading-relaxed mb-4 text-lg">{para}</p>
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
            datePublished: post.date,
            author: { "@type": "Organization", name: "Bororunners Running Club" },
            image: `https://bororunners.co.uk${post.image}`,
          }),
        }}
      />
    </article>
  );
}
