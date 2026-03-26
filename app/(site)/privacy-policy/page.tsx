import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Bororunners Running Club privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-narrow mx-auto">
        <AnimatedSection>
          <SectionHeading title="Privacy Policy" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose max-w-none text-brand-gray-600 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Who We Are</h2>
                <p>
                  Bororunners Running Club is a community running club based in Middlesbrough, Teesside.
                  We are affiliated with England Athletics (Club No. 7693694). This privacy policy
                  explains how we collect, use, and protect your personal data when you use our website
                  (bororunners.co.uk).
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">What Data We Collect</h2>
                <p className="mb-2">Through our website, we may collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name and email address (when you submit the contact form)</li>
                  <li>Your message content (contact form submissions)</li>
                  <li>Name, email, and emergency contact details (when you sign up for club events)</li>
                  <li>Basic analytics data (if Google Analytics is enabled post-launch)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To respond to your enquiries via the contact form</li>
                  <li>To improve our website and services</li>
                  <li>To manage event sign-ups and attendance</li>
                  <li>To communicate club information if you join as a member</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Data Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal data to third parties.
                  Contact form submissions are sent via Resend (our email service provider) to the
                  club chairman. Event sign-up data is stored securely in Google Sheets, accessible only
                  to club committee members. Member data is managed through England Athletics&apos; membership system.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Cookies</h2>
                <p className="mb-2">
                  Cookies are small text files stored on your device when you visit a website. Our site uses:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li><strong>Strictly necessary cookies</strong> — required for the website to function (e.g. session management). These do not require your consent.</li>
                  <li><strong>Analytics cookies</strong> — if Google Analytics is enabled, these help us understand how visitors use the site. These cookies are anonymous and do not identify you personally.</li>
                </ul>
                <p>
                  We do not use advertising cookies or any third-party tracking cookies. If analytics cookies
                  are introduced, we will update this policy and provide a cookie consent banner so you can
                  choose whether to accept them.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Your Rights</h2>
                <p className="mb-2">Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold uppercase text-brand-black mb-3">Contact</h2>
                <p>
                  For any privacy-related queries, please contact us at{" "}
                  <a href="mailto:ben.palmer3@hotmail.com" className="text-brand-red hover:underline">
                    ben.palmer3@hotmail.com
                  </a>
                </p>
              </div>

              <p className="text-brand-gray-400 text-sm">Last updated: March 2026</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
