import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import SEO from "@/components/SEO";
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, Factory, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "KFab Infra Project PVT LTD",
      "url": "https://kfabinfraproject.site"
    },
    "areaServed": {
      "@type": "State",
      "name": "Maharashtra"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO 
        title={service.seoTitle} 
        description={service.metaDescription} 
        keywords={service.targetKeywords}
        canonical={`https://kfabinfraproject.site/services/${service.slug}`}
        breadcrumbs={breadcrumbs}
        extraSchema={[serviceSchema, faqSchema]}
      />
      
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            <span>Industrial Engineering & Fabrication</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 leading-tight">
            {service.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {service.introduction}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-medium shadow-lg shadow-primary/25">
                <Phone className="mr-2 h-5 w-5" /> Request Technical Quote
              </Button>
            </Link>
            <a href="tel:+919922427381">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium border-slate-700 hover:bg-slate-800 text-white">
                Call +91 99224 27381
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair flex items-center gap-3">
                <Factory className="w-7 h-7 text-primary" />
                Why Choose KFab Infra for {service.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.whyChooseUs}</p>
            </section>

            {/* Applications & Advantages Grid */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/40 p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Core Applications
                </h3>
                <ul className="space-y-3">
                  {service.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/40 p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Engineering Advantages
                </h3>
                <ul className="space-y-3">
                  {service.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Execution Process */}
            <section className="bg-slate-900 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold font-playfair mb-6">Our Manufacturing & Execution Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Keywords Badges */}
            {service.targetKeywords && (
              <div>
                <h3 className="text-xl font-bold mb-3">Service Capabilities & Intent Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {service.targetKeywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-semibold rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faq.map((f, i) => (
                  <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{f.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
          
          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Get Turnkey Quote</span>
                <h3 className="text-2xl font-bold font-playfair mt-1 text-foreground">Need {service.title}?</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  Talk with our senior fabrication engineers for material selection, BOM estimation, and drawing review.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <Link to="/contact" className="w-full block">
                  <Button className="w-full h-12 text-base font-semibold shadow-md">
                    Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="mailto:kfab.infraproject@gmail.com" className="w-full block">
                  <Button variant="outline" className="w-full h-12 text-base font-semibold">
                    Submit RFQ / Drawings
                  </Button>
                </a>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h4 className="font-bold mb-3 text-sm">Materials & Grades</h4>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map(m => (
                    <span key={m} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-foreground">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold mb-3 text-sm">Key Regional Contracting Hubs</h4>
                <div className="space-y-2 text-sm">
                  <Link to="/location/steel-fabrication-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Steel Fabrication Pune
                  </Link>
                  <Link to="/location/fabrication-chakan" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Industrial Fabrication Chakan
                  </Link>
                  <Link to="/location/fabrication-bhosari" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Heavy Fabrication Bhosari
                  </Link>
                  <Link to="/location/peb-contractor-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • PEB Contractor Pune
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
