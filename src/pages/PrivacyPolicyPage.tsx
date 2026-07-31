import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────
   Shared sub-components
────────────────────────────────────────── */
const PolicySection = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <div className="flex items-baseline gap-3 mb-4">
      <span className="text-primary font-mono text-sm font-bold">{number}.</span>
      <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
      {children}
    </div>
    <div className="mt-8 h-px bg-border/50" />
  </div>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>
);

/* ──────────────────────────────────────────
   Page
────────────────────────────────────────── */
const PrivacyPolicyPage = () => (
  <main className="min-h-screen bg-background pt-20">
    <Helmet>
      <title>Privacy Policy | KFab Infra Project PVT LTD</title>
      <meta name="description" content="Privacy Policy of KFab Infra Project PVT LTD — how we collect, use, and protect your personal data." />
      <link rel="canonical" href="https://kfabinfraproject.site/privacy" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-secondary text-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=1200&q=60" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/80 to-secondary" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <div className="divider-gold mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base">Last updated: July 2025 &nbsp;·&nbsp; Applies to all visitors of kfabinfraproject.site</p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>

            {/* Preamble */}
            <div className="mb-10 p-6 rounded-xl border border-border bg-secondary/40">
              <p className="text-muted-foreground leading-relaxed text-sm">
                At KFab Infra Project PVT LTD, trust is not a word we use lightly. It is the foundation of every contract we sign and every structure we build. That same principle applies to how we treat the information you share with us when you visit this website or contact us for a project inquiry. This Privacy Policy is written to be read — not merely published. If anything here is unclear, please email us at{" "}
                <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a>{" "}
                and a real person will explain it to you.
              </p>
            </div>

            <PolicySection number="1" title="Who We Are">
              <p>
                KFab Infra Project PVT LTD ("KFab", "we", "us") is a registered private limited company engaged in heavy steel fabrication and industrial manufacturing, headquartered at C-46, M.I.D.C., Jejuri, Pune, Maharashtra — 412303, India. We have operated in this space since 1998. This website exists to present our services, allow potential clients to learn about our capabilities, and to receive business inquiries. We do not run an e-commerce platform and we do not process payments through this website.
              </p>
              <p>For any data-related queries: <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a></p>
            </PolicySection>

            <PolicySection number="2" title="What Information We Collect">
              <Sub>2.1 Information You Provide Directly</Sub>
              <p>
                When you use the contact form or "Request a Quote" form, we ask for your name, email address, phone number, company name (optional), the service you are interested in, and a message describing your requirements. We collect exactly what is needed to respond to you — nothing more. We do not ask for your date of birth, financial details, government ID numbers, or any other data that is irrelevant to a business inquiry.
              </p>
              <Sub>2.2 Information Collected Automatically</Sub>
              <p>
                Our website automatically records certain technical data when you visit — your IP address, browser type, operating system, pages visited, session duration, and referral source. This is collected in aggregate form and is used to understand how our website is being used and to fix any technical issues. It does not identify you personally unless you have also submitted a contact form.
              </p>
              <Sub>2.3 Cookies</Sub>
              <p>
                We use a small number of cookies — primarily for website functionality (remembering UI states) and anonymised usage analytics. We do not use cookies for advertising or profiling. You may configure your browser to block cookies, though some parts of the site may not work as intended.
              </p>
            </PolicySection>

            <PolicySection number="3" title="How We Use Your Information">
              <p>Every piece of data we hold has a clear, specific reason for being held:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Responding to your inquiry:</strong> We use the information from submitted forms to contact you, discuss your project, and provide a quote.</li>
                <li><strong className="text-foreground">Storing inquiry records:</strong> Submissions are stored in a secured database (Google Firebase) so that our team has a reliable record of project discussions for follow-up and account management.</li>
                <li><strong className="text-foreground">Internal notifications:</strong> An automated email alert (via EmailJS) is sent to our team when a form is submitted, ensuring the right person follows up promptly.</li>
                <li><strong className="text-foreground">Website improvement:</strong> Anonymised analytics data helps us understand which content is useful and where the experience can be improved.</li>
              </ul>
              <p>We do not use your data for automated decision-making, profiling, or any purpose that could be described as surveillance. We are a fabrication company, not a data company.</p>
            </PolicySection>

            <PolicySection number="4" title="Who We Share Your Information With">
              <p>We do not sell, rent, or trade your personal information. Period.</p>
              <p>To operate our website and respond to inquiries, we work with a small set of trusted service providers who only access data necessary for their specific function:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Google Firebase (Firestore):</strong> Stores contact form submissions securely under Google's infrastructure and security standards.</li>
                <li><strong className="text-foreground">EmailJS:</strong> Sends email notifications to our internal team when you submit a form. Does not use your data for any other purpose.</li>
                <li><strong className="text-foreground">Vercel:</strong> Our website hosting provider. May log technical server-side data such as IP addresses as part of standard hosting operations.</li>
                <li><strong className="text-foreground">Google Analytics (if active):</strong> Used for anonymised traffic analysis only. Does not receive your name, email, or phone number from us.</li>
              </ul>
              <p>Beyond the above, we would only share your information if: (a) you have explicitly requested it, (b) we are legally compelled to do so under applicable Indian law, or (c) it is necessary to prevent fraud or protect safety.</p>
            </PolicySection>

            <PolicySection number="5" title="Data Retention">
              <p>
                We retain contact and inquiry data for up to three years from the date of submission. Heavy fabrication projects often involve long sales cycles, repeat orders, and multi-year relationships — this retention window reflects that operational reality. Anonymised analytics data may be kept indefinitely as it does not constitute personal data.
              </p>
              <p>To request early deletion of your data, email <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a>. We will process your request within a reasonable timeframe.</p>
            </PolicySection>

            <PolicySection number="6" title="How We Protect Your Data">
              <p>
                Contact form data is encrypted in transit via HTTPS (SSL/TLS). Stored data in Firebase is protected by access control rules — only authorised team members can access it. We do not store payment information, passwords, or sensitive financial records through this website.
              </p>
              <p>
                No system connected to the internet is entirely immune to security incidents. We acknowledge that openly because we believe honesty matters more than false reassurance. What we can say is that we have taken appropriate and proportionate measures to minimise risk, and we will notify affected individuals promptly if a breach involving their data ever occurs.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the information we hold about you.</li>
                <li><strong className="text-foreground">Correction:</strong> Ask us to correct inaccurate or outdated information.</li>
                <li><strong className="text-foreground">Deletion:</strong> Request that we delete your personal data, subject to any legal retention obligations.</li>
                <li><strong className="text-foreground">Withdrawal of Consent:</strong> If you no longer wish to receive communications from us, simply tell us and we will stop.</li>
                <li><strong className="text-foreground">Object to Processing:</strong> If you believe we are using your data in an unjustified way, you can raise that concern with us directly.</li>
              </ul>
              <p>Email us at <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a>. We aim to respond within 10 working days.</p>
            </PolicySection>

            <PolicySection number="8" title="Third-Party Links">
              <p>Our website may include links to external sites — for example, Google Maps for directions to our facility. Once you leave kfabinfraproject.site, this Privacy Policy no longer applies. We encourage you to read the privacy practices of any third-party website you visit. We have no control over external sites and accept no responsibility for them.</p>
            </PolicySection>

            <PolicySection number="9" title="Children's Privacy">
              <p>This website is intended for professional and commercial use — specifically for procurement managers, project engineers, and business decision-makers within India's industrial sector. We do not knowingly collect personal data from anyone under the age of 18. If you believe a minor has submitted data through our website, contact us immediately and we will delete it without delay.</p>
            </PolicySection>

            <PolicySection number="10" title="Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect when meaningful changes were made. Continued use of our website after changes are posted constitutes your acceptance of the revised policy.</p>
            </PolicySection>

            <PolicySection number="11" title="Governing Law">
              <p>This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and its associated rules and amendments. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.</p>
            </PolicySection>

            <PolicySection number="12" title="Contact Us">
              <p>If you have questions about this Privacy Policy or want to speak to someone directly:</p>
              <div className="mt-4 p-5 rounded-xl border border-border bg-secondary/40 space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Company:</strong> KFab Infra Project PVT LTD</p>
                <p><strong className="text-foreground">Address:</strong> C-46, M.I.D.C., Jejuri, Pune, Maharashtra — 412303, India</p>
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a></p>
                <p><strong className="text-foreground">Phone:</strong> <a href="tel:+919922427381" className="text-primary underline">+91 99224 27381</a></p>
                <p><strong className="text-foreground">Working hours:</strong> Monday to Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </PolicySection>

          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default PrivacyPolicyPage;
