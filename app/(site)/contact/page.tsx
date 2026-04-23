import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bororunners Running Club. Enquiries about joining, events, sponsorship, or anything else. Running club Middlesbrough, Teesside.",
};

const enquiryCards = [
  {
    title: "Joining the Club",
    description: "Interested in running with us? We'd love to hear from you.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    mailto: "mailto:ben.palmer3@hotmail.com?subject=Joining%20Enquiry&body=Hi%20Bororunners%2C%0A%0AI'm%20interested%20in%20joining%20the%20club.%0A%0A",
  },
  {
    title: "Events & Races",
    description: "Questions about upcoming races or club events.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    mailto: "mailto:ben.palmer3@hotmail.com?subject=Events%20Enquiry&body=Hi%20Bororunners%2C%0A%0AI%20have%20a%20question%20about%20an%20event.%0A%0A",
  },
  {
    title: "Sponsorship",
    description: "Interested in sponsoring or partnering with the club.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    mailto: "mailto:ben.palmer3@hotmail.com?subject=Sponsorship%20Enquiry&body=Hi%20Bororunners%2C%0A%0AI'm%20interested%20in%20sponsoring%20or%20partnering%20with%20the%20club.%0A%0A",
  },
  {
    title: "General Enquiry",
    description: "Anything else — we're always happy to chat.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    mailto: "mailto:ben.palmer3@hotmail.com?subject=General%20Enquiry&body=Hi%20Bororunners%2C%0A%0A",
  },
];

export default function ContactPage() {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <h1 className="sr-only">Contact Bororunners Running Club</h1>
          <SectionHeading
            title="Get in Touch"
            subtitle="Tap a card below to send us an email — it'll open your email app with a message ready to go."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {enquiryCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <a
                href={card.mailto}
                className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-black transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">
                  {card.title}
                </h3>
                <p className="text-brand-gray-500 text-sm">{card.description}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-3">Email</h3>
              <a href="mailto:ben.palmer3@hotmail.com" className="text-brand-red hover:underline">
                ben.palmer3@hotmail.com
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-3">Social Media</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/groups/400333825542006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-gray-600 hover:text-brand-red transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook Group
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@bororunners" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-gray-600 hover:text-brand-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    @bororunners
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@bororunners" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-gray-600 hover:text-brand-red transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                    </svg>
                    @bororunners
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-3">Club Info</h3>
              <p className="text-brand-gray-600 text-sm mb-1">England Athletics Club No. 7693694</p>
              <p className="text-brand-gray-600 text-sm">Based in Middlesbrough, Teesside</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
