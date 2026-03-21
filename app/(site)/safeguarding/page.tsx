import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Safeguarding & Policies",
  description:
    "Bororunners Running Club safeguarding policy, welfare officers, and membership terms. An England Athletics affiliated club committed to the safety of all members.",
};

export default function SafeguardingPage() {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-narrow mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Safeguarding & Policies"
            subtitle="Bororunners is committed to providing a safe, welcoming, and inclusive environment for all members."
          />
        </AnimatedSection>

        <div className="space-y-10">
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-black mb-4">
                Welfare Officers
              </h2>
              <p className="text-brand-gray-600 mb-4">
                Bororunners has a team of dedicated Welfare Officers who are the first point of contact for
                any safeguarding concerns, wellbeing issues, or complaints. Our welfare team was established
                from day one through England Athletics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Elaine Watson</p>
                  <p className="text-brand-red text-sm">Welfare Officer &amp; DBS Verifier</p>
                </div>
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Daniel Kelly</p>
                  <p className="text-brand-red text-sm">Welfare Officer</p>
                </div>
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Mike McCann</p>
                  <p className="text-brand-red text-sm">Welfare Officer</p>
                </div>
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Karen Lavender</p>
                  <p className="text-brand-red text-sm">Welfare Officer</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-black mb-4">
                Mental Health Champions
              </h2>
              <p className="text-brand-gray-600 mb-4">
                We have volunteer Mental Health Champions who regularly check in with runners. Our WhatsApp
                groups are safe, supportive spaces, and we organise social events outside of sessions for
                those who want to stay involved without running.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Robyn Cairney</p>
                  <p className="text-brand-red text-sm">Mental Health Champion</p>
                </div>
                <div className="bg-brand-gray-50 rounded-lg p-4">
                  <p className="font-bold text-brand-black">Kirsty Beattie</p>
                  <p className="text-brand-red text-sm">Mental Health Champion</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-black mb-4">
                Club Safeguarding Policy
              </h2>
              <p className="text-brand-gray-600 mb-4">
                Bororunners Running Club is committed to safeguarding children, young people, and adults
                at risk. As an England Athletics affiliated club, we adhere to the England Athletics
                safeguarding policies and procedures.
              </p>
              <ul className="space-y-2 text-brand-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All coaches and leaders are DBS checked
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Welfare Officers available at every session
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clear reporting procedures for concerns
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zero tolerance for bullying, harassment, or discrimination
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-brand-black mb-4">
                Membership Terms
              </h2>
              <ul className="space-y-3 text-brand-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                  Members must be <strong>aged 12 or over</strong> to join Bororunners Running Club
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                  Members under 18 must have parental/guardian consent
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                  All members must register through England Athletics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                  Members are expected to adhere to the club&apos;s code of conduct
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                  The club reserves the right to refuse or revoke membership where behaviour is inconsistent with club values
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-brand-gray-50 rounded-xl p-8 text-center">
              <p className="text-brand-gray-600 mb-2">
                <strong>England Athletics Affiliation:</strong> Club No. 7693694
              </p>
              <p className="text-brand-gray-500 text-sm">
                If you have a safeguarding concern, please contact one of our Welfare Officers or
                email{" "}
                <a href="mailto:ben.palmer3@hotmail.com" className="text-brand-red hover:underline">
                  ben.palmer3@hotmail.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
