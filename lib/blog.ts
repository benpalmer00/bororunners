import data from "@/data/blog.json";

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  author: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export type BlogMonthGroup = {
  id: string;
  label: string;
  posts: BlogPost[];
};

function byNewest(a: BlogPost, b: BlogPost): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

function monthId(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function monthLabel(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export function getBlogPosts(): BlogPost[] {
  return [...data.posts].sort(byNewest);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return data.posts.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return data.posts.map((post) => post.slug);
}

export function formatPostDate(dateStr: string, withDay = false): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: withDay ? "numeric" : undefined,
    month: "long",
    year: "numeric",
  });
}

export function getMonthGroups(): BlogMonthGroup[] {
  const groups = new Map<string, BlogMonthGroup>();

  for (const post of getBlogPosts()) {
    const id = monthId(post.publishedAt);
    const existing = groups.get(id);
    if (existing) {
      existing.posts.push(post);
    } else {
      groups.set(id, { id, label: monthLabel(post.publishedAt), posts: [post] });
    }
  }

  return Array.from(groups.values()).sort((a, b) => b.id.localeCompare(a.id));
}

export function getRecentMonthGroups(count = 2): {
  recent: BlogMonthGroup[];
  earlier: BlogPost[];
} {
  const groups = getMonthGroups();
  return {
    recent: groups.slice(0, count),
    earlier: groups.slice(count).flatMap((group) => group.posts),
  };
}
