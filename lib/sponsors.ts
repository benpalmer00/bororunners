export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  darkBg?: boolean;
};

export const fallbackSponsors: Sponsor[] = [
  { name: "Sprinters Sportswear", logo: "/images/sponsors/sprinters-sportswear.png", url: "https://www.sprinterssportswear.co.uk", darkBg: false },
  { name: "Let's Run", logo: "/images/sponsors/lets-run.jpeg", url: "#", darkBg: false },
  { name: "HIGH5 Sports Nutrition", logo: "/images/sponsors/high5.webp", url: "https://highfive.co.uk", darkBg: false },
  { name: "Bimble & Bolt", logo: "/images/sponsors/bimble-and-bolt.avif", url: "#", darkBg: false },
  { name: "SportsShoes.com", logo: "/images/sponsors/sportsshoes.webp", url: "https://www.sportsshoes.com", darkBg: true },
];
