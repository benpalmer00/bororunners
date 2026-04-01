import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Club: [
    { href: "/about", label: "About Us" },
    { href: "/sessions", label: "Sessions" },
    { href: "/events", label: "Events & Races" },
    { href: "/team", label: "Meet the Team" },
  ],
  Community: [
    { href: "/blog", label: "News & Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/runner-of-the-month", label: "Runner of the Month" },
    { href: "/sponsors", label: "Sponsors" },
  ],
  Info: [
    { href: "/join", label: "How to Join" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
    { href: "/safeguarding", label: "Safeguarding" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/club-logo.jpeg"
                alt="Bororunners Running Club"
                width={48}
                height={48}
                className="rounded-full invert"
              />
              <span className="font-display text-2xl font-bold uppercase">Bororunners</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Teesside&apos;s award-winning running club. 272 members, four weekly sessions, all abilities welcome.
              England Athletics Club Committee of the Year 2024.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/groups/400333825542006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@bororunners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bororunners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-red mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bororunners Running Club. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a
              href="https://seahorseltd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>Built by the best.</span>
              <span className="font-body font-bold uppercase tracking-widest text-white">Seahorse</span>
            </a>
            <a
              href="https://www.linkedin.com/company/seahorseltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Seahorse Integrations LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
