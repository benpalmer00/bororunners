"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Button from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sessions", label: "Sessions" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/optimise", label: "Optimise", accent: true },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
  { href: "/shop", label: "Shop" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logos/club-logo.jpeg"
                alt="Bororunners Running Club"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
              <span className="font-display text-xl font-bold uppercase tracking-tight text-brand-black hidden sm:block">
                Bororunners
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    link.accent
                      ? "text-brand-pink hover:text-brand-pink-dark"
                      : "text-brand-gray-700 hover:text-brand-red"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button href="/join" size="sm" className="hidden md:inline-flex">
                Join the Club
              </Button>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 bg-brand-black text-white rounded-md"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
