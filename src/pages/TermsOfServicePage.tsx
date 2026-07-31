import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────
   Shared sub-components
────────────────────────────────────────── */
const Section = ({
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

/* ──────────────────────────────────────────
   Page
────────────────────────────────────────── */
const TermsOfServicePage = () => (
  <main className="min-h-screen bg-background pt-20">
    <Helmet>
      <title>Terms of Service | KFab Infra Project PVT LTD</title>
      <meta name="description" content="Terms of Service for KFab Infra Project PVT LTD — the rules that govern your use of our website and any engagement with our business." />
      <link rel="canonical" href="https://kfabinfraproject.site/terms" />
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
            <FileText className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-base">Last updated: July 2025 &nbsp;·&nbsp; Applies to all users of kfabinfraproject.site</p>
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
                These Terms of Service govern your use of the website at <a href="https://kfabinfraproject.site" className="text-primary underline">kfabinfraproject.site</a> and any interaction you have with KFab Infra Project PVT LTD through it. We have kept these terms as straightforward as possible. If you engage with this website — browsing it, submitting an inquiry, or downloading any documents from it — you are agreeing to what is written below. If you have questions about any part of this, please reach out to us at <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a> before proceeding.
              </p>
            </div>

            <Section number="1" title="About These Terms">
              <p>
                KFab Infra Project PVT LTD ("KFab", "we", "us", "our") is a private limited company registered under the Companies Act of India. We fabricate and supply heavy steel structures, pressure vessels, industrial equipment, and allied products from our facility at C-46, M.I.D.C., Jejuri, Pune, Maharashtra — 412303, India.
              </p>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("you", "the user", "the visitor") and KFab Infra Project PVT LTD. They apply to your use of this website and any information or services accessed through it. These Terms do not govern the supply of goods or services under a formal contract — those are covered under separate purchase orders, supply agreements, or written contracts executed between our company and the client.
              </p>
              <p>
                By accessing and using this website, you confirm that you are at least 18 years of age and that you have the legal capacity to agree to these Terms on behalf of yourself or, if applicable, the organisation you represent.
              </p>
            </Section>

            <Section number="2" title="Purpose and Nature of This Website">
              <p>
                This website is a business information platform. Its purpose is to present the services and capabilities of KFab Infra Project PVT LTD to potential clients, partners, vendors, and interested professionals. It is not a marketplace. It is not an e-commerce platform. You cannot purchase products or services directly through this website.
              </p>
              <p>
                Content on this website — including service descriptions, project photographs, capability summaries, team bios, and client information — is intended to give visitors a reasonable and accurate representation of who we are and what we do. While we take care to keep this information current and accurate, the website is not a contractual offer. No information published here constitutes a firm quotation, a binding commitment, or a guarantee of availability, pricing, or delivery.
              </p>
              <p>
                If you require a formal proposal for a project, you must contact us directly through the inquiry form or by phone. A binding offer will only exist when it is confirmed in writing by an authorised representative of KFab Infra Project PVT LTD.
              </p>
            </Section>

            <Section number="3" title="Use of the Website — What Is Permitted">
              <p>You are welcome to use this website to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browse information about our services, industries, and company</li>
                <li>Submit an inquiry or request a project quote through our contact forms</li>
                <li>Download any documents or resources we have explicitly made available for public access</li>
                <li>Share links to pages on this website with others for legitimate business purposes</li>
              </ul>
              <p>
                We ask that you use the website as it is intended — as a professional tool for exploring a business relationship with a heavy fabrication company. We treat every inquiry we receive seriously, and we ask the same in return.
              </p>
            </Section>

            <Section number="4" title="Use of the Website — What Is Not Permitted">
              <p>The following activities are expressly prohibited and may constitute a violation of applicable Indian law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submitting false, misleading, or fraudulent information through any form on this website</li>
                <li>Attempting to gain unauthorised access to any part of our website, server infrastructure, or database</li>
                <li>Using any automated scraper, bot, or crawling tool to extract data from this website without our prior written consent</li>
                <li>Reproducing, republishing, or commercially exploiting any content from this website without our explicit written permission</li>
                <li>Engaging in any activity that interferes with, disrupts, or places an unreasonable load on our website infrastructure</li>
                <li>Uploading or transmitting any malicious code, virus, or harmful software through the website</li>
                <li>Using this website for any purpose that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable under Indian law</li>
              </ul>
              <p>
                We reserve the right to block access to this website — temporarily or permanently — for any user or IP address that we reasonably believe is engaging in any of the above activities, without notice and without liability.
              </p>
            </Section>

            <Section number="5" title="Inquiry Submissions and Pre-Contractual Communications">
              <p>
                When you submit a contact form or project inquiry through this website, you are initiating a pre-contractual communication with KFab Infra Project PVT LTD. This communication does not, by itself, create any legal obligation on either party. It simply opens a conversation.
              </p>
              <p>
                We will make a genuine effort to respond to every inquiry within 24 to 48 working hours. However, we cannot guarantee response times under all circumstances — particularly during periods of high operational demand, public holidays, or extraordinary events outside our control. A lack of response within a given timeframe does not constitute acceptance, rejection, or any other legal act on our part.
              </p>
              <p>
                Any information you share in an inquiry form — such as your project specifications, budget range, or technical requirements — will be treated with discretion and used solely for the purpose of responding to your inquiry. We do not share pre-contractual details with our competitors or any third party not directly involved in processing your request.
              </p>
              <p>
                We reserve the right to decline any inquiry without explanation. We operate in specialised domains of heavy industrial fabrication, and not every inquiry will fall within our technical or capacity parameters.
              </p>
            </Section>

            <Section number="6" title="Intellectual Property">
              <p>
                All content on this website — including but not limited to text, photographs, engineering diagrams, logos, service descriptions, team photographs, graphical elements, and page layouts — is the intellectual property of KFab Infra Project PVT LTD or is used with the permission of the respective rights-holder.
              </p>
              <p>
                You may not copy, reproduce, distribute, publicly display, modify, or create derivative works from any content on this website without our prior written consent. Sharing a link to a page on this website is fine. Republishing our service descriptions, photographs, or case studies — whether on another website, in a presentation, or in promotional material — is not permitted without explicit written authorisation from us.
              </p>
              <p>
                If you would like to reference or cite content from this website for legitimate journalistic, academic, or research purposes, please contact us. We are generally open to such requests when made transparently.
              </p>
            </Section>

            <Section number="7" title="Third-Party Links and External Resources">
              <p>
                Our website may contain hyperlinks to external websites — for example, links to Google Maps for our facility location, references to industry associations, or links to third-party platforms. These links are provided for your convenience and informational purposes only. KFab Infra Project PVT LTD does not endorse, control, or take responsibility for the content, accuracy, or privacy practices of any external website.
              </p>
              <p>
                When you navigate to an external site from ours, you are leaving kfabinfraproject.site and the terms of that third-party website apply. We encourage you to review the terms and privacy policies of any external site you visit.
              </p>
            </Section>

            <Section number="8" title="Disclaimer of Warranties">
              <p>
                This website is provided on an "as is" and "as available" basis. While we make every reasonable effort to ensure that the information on this website is accurate, complete, and up-to-date, we make no warranties — express or implied — regarding the accuracy, reliability, or fitness for any particular purpose of the content published here.
              </p>
              <p>
                We do not warrant that the website will be available at all times, free from errors, or free from technical interruptions. Hosting infrastructure, internet connectivity, and software systems can occasionally fail — a reality that applies to any website. We will make reasonable efforts to maintain availability but we cannot guarantee it.
              </p>
              <p>
                Any reliance you place on the information published on this website is at your own discretion. For all decisions involving significant commercial commitments, please obtain formal written confirmation from our team rather than relying solely on what is published on this website.
              </p>
            </Section>

            <Section number="9" title="Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, KFab Infra Project PVT LTD, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential loss or damage arising out of your use of — or inability to use — this website or any content on it.
              </p>
              <p>
                This includes, but is not limited to: loss of business, loss of contracts, loss of data, loss of profits, or any other commercial or economic loss, whether arising in contract, tort, or otherwise — even if we have been advised of the possibility of such losses.
              </p>
              <p>
                Nothing in these Terms limits liability for death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded under applicable Indian law.
              </p>
            </Section>

            <Section number="10" title="Privacy">
              <p>
                Your use of this website is also governed by our <a href="/privacy" className="text-primary underline">Privacy Policy</a>, which is incorporated by reference into these Terms. The Privacy Policy explains in detail how we collect, use, store, and protect the personal information you share with us. Please read it — it is written plainly and won't take long.
              </p>
            </Section>

            <Section number="11" title="Modifications to This Website and These Terms">
              <p>
                We reserve the right to update, modify, or discontinue any part of this website at any time without notice. This includes adding or removing pages, services, content, or features. We also reserve the right to revise these Terms of Service at any time. The updated version will be posted on this page with a revised "Last updated" date.
              </p>
              <p>
                Your continued use of the website after any changes to these Terms constitutes your acceptance of the updated Terms. If you disagree with any material revision, the appropriate course of action is to stop using the website and reach out to us with your concerns.
              </p>
            </Section>

            <Section number="12" title="Governing Law and Jurisdiction">
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any dispute, controversy, or claim arising out of or relating to these Terms or your use of this website — whether in contract, tort, or otherwise — shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
              </p>
              <p>
                Before initiating any formal legal proceedings, we encourage you to contact us directly to attempt resolution through good-faith discussion. Most issues can be resolved this way without involving courts or formal processes, and we are committed to that approach.
              </p>
            </Section>

            <Section number="13" title="Severability">
              <p>
                If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision will be deemed severable from the remaining Terms. The remaining Terms will continue in full force and effect. The invalidity of one clause does not affect the validity of the rest.
              </p>
            </Section>

            <Section number="14" title="Entire Agreement">
              <p>
                These Terms of Service, read together with our Privacy Policy, constitute the entire agreement between you and KFab Infra Project PVT LTD in relation to your use of this website. They supersede all prior representations, communications, or agreements — whether oral or written — relating to the same subject matter.
              </p>
              <p>
                For commercial engagements involving the supply of goods or services, the applicable contractual terms will be those set out in the relevant purchase order, supply agreement, or written contract between the parties — not these Terms of Service.
              </p>
            </Section>

            <Section number="15" title="Contact Us">
              <p>If you have any questions, concerns, or feedback about these Terms, we would genuinely like to hear from you:</p>
              <div className="mt-4 p-5 rounded-xl border border-border bg-secondary/40 space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Company:</strong> KFab Infra Project PVT LTD</p>
                <p><strong className="text-foreground">Address:</strong> C-46, M.I.D.C., Jejuri, Pune, Maharashtra — 412303, India</p>
                <p><strong className="text-foreground">Email:</strong> <a href="mailto:kfab.infraproject@gmail.com" className="text-primary underline">kfab.infraproject@gmail.com</a></p>
                <p><strong className="text-foreground">Phone:</strong> <a href="tel:+919922427381" className="text-primary underline">+91 99224 27381</a></p>
                <p><strong className="text-foreground">Working hours:</strong> Monday to Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </Section>

          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default TermsOfServicePage;
