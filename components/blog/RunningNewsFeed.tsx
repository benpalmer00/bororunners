import AnimatedSection from "../ui/AnimatedSection";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

function parseRSSItems(xml: string, source: string, limit: number = 5): NewsItem[] {
  const items: NewsItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null && items.length < limit) {
    const itemXml = match[1];
    const title = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]>|<title>(.*?)<\/title>/)?.[1] ?? itemXml.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
    const pubDate = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

    if (title && link) {
      items.push({ title: title.trim(), link: link.trim(), pubDate, source });
    }
  }

  return items;
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const FEEDS = [
  { url: "https://feeds.bbci.co.uk/sport/athletics/rss.xml", name: "BBC Sport" },
  { url: "https://www.runnersworld.com/uk/rss/all.xml/", name: "Runner's World" },
  { url: "https://www.englandathletics.org/feed/", name: "England Athletics" },
];

async function fetchNews(): Promise<NewsItem[]> {
  const allItems: NewsItem[] = [];

  for (const feed of FEEDS) {
    try {
      const res = await fetch(feed.url, { next: { revalidate: 3600 } });
      if (!res.ok) continue;
      const xml = await res.text();
      const items = parseRSSItems(xml, feed.name, 4);
      allItems.push(...items);
    } catch {
      // Silently skip failed feeds
    }
  }

  // Sort by date, newest first
  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return allItems.slice(0, 12);
}

const sourceColors: Record<string, string> = {
  "BBC Sport": "bg-blue-100 text-blue-800",
  "Runner's World": "bg-orange-100 text-orange-800",
  "England Athletics": "bg-red-100 text-red-800",
};

export default async function RunningNewsFeed() {
  const news = await fetchNews();

  if (news.length === 0) return null;

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-black">
              Running News
            </h2>
            <p className="text-brand-gray-500 mt-2">
              The latest from the world of running — powered by live RSS feeds.
            </p>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <AnimatedSection key={`${item.source}-${i}`} delay={i * 0.03}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow h-full border border-brand-gray-100 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${sourceColors[item.source] ?? "bg-gray-100 text-gray-700"}`}>
                    {item.source}
                  </span>
                  <span className="text-xs text-brand-gray-400">{formatDate(item.pubDate)}</span>
                </div>
                <h3 className="font-display text-base font-bold uppercase text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center text-xs text-brand-red font-medium">
                  Read more
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
