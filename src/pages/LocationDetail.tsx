import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { locationsData } from "@/data/locationsData";
import SEO from "@/components/SEO";
import { MapPin, Building2, Phone, CheckCircle, ArrowRight, ShieldCheck, Factory, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: location.title, url: `/location/${location.slug}` }
  ];

  // FAQ Schema for Location
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO 
        title={location.seoTitle} 
        description={location.metaDescription} 
        keywords={location.keywords}
        canonical={`https://kfabinfraproject.site/location/${location.slug}`}
        breadcrumbs={breadcrumbs}
        extraSchema={faqSchema}
      />
      
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Industrial Hub & Regional Contracting</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 leading-tight">
            {location.h1}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {location.content}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-medium shadow-lg shadow-primary/25">
                <Phone className="mr-2 h-5 w-5" /> Request Instant Quote
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

      {/* Main Content Area */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Extended Content */}
            {location.extendedContent && (
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4 flex items-center gap-3">
                  <Factory className="w-7 h-7 text-primary" />
                  Engineering Capability & Project Scope
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {location.extendedContent}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">IS 2062 & ASME Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">100% NDT & Radiography Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">15,000 Sq Ft Jejuri Workshop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">Turnkey Erection & Site Teams</span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Services Offered */}
            {location.keyServices && location.keyServices.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-6">
                  Contracting & Fabrication Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.keyServices.map((service, i) => (
                    <div key={i} className="p-5 rounded-xl bg-muted/50 border border-border flex items-start gap-4 hover:border-primary/50 transition-colors">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-foreground text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Industrial Zones Served */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Industrial Belts & Clusters Served
              </h2>
              <p className="text-slate-300 mb-6">
                Our logistics network and mobile site erection crews regularly support industrial units in:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.nearbyIndustries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-200 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Keywords Badges */}
            {location.keywords && (
              <div>
                <h3 className="text-xl font-bold mb-4">Target Engineering Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {location.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-semibold rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {location.faq.map((f, i) => (
                  <div key={i} className="bg-card p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{f.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Vendor Solutions</span>
                <h3 className="text-2xl font-bold font-playfair mt-1 text-foreground">Require a Contractor?</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  Submit your structural drawings, RFQ, or BOQ to get a detailed commercial estimate within 24 hours.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <Link to="/contact" className="w-full block">
                  <Button className="w-full h-12 text-base font-semibold shadow-md">
                    Get Free Project Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="mailto:kfab.infraproject@gmail.com" className="w-full block">
                  <Button variant="outline" className="w-full h-12 text-base font-semibold">
                    Email Drawings / RFQ
                  </Button>
                </a>
              </div>

              <div className="p-4 bg-muted rounded-xl space-y-3">
                <div className="text-xs font-bold text-foreground uppercase tracking-wide">Direct Helpline</div>
                <div className="font-bold text-lg text-primary">+91 99224 27381</div>
                <div className="text-xs text-muted-foreground">KFab Infra Project PVT LTD — Jejuri MIDC, Pune</div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-bold mb-3">Explore Key Locations</h4>
                <div className="space-y-2 text-sm">
                  <Link to="/location/fabrication-chakan" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Fabrication Contractor Chakan
                  </Link>
                  <Link to="/location/fabrication-bhosari" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Fabrication Contractor Bhosari
                  </Link>
                  <Link to="/location/peb-contractor-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • PEB Contractor Pune
                  </Link>
                  <Link to="/location/industrial-shed-contractor-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Industrial Shed Contractor Pune
                  </Link>
                  <Link to="/location/fabrication-job-work-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Fabrication Job Work Pune
                  </Link>
                  <Link to="/location/turnkey-industrial-contractor-pune" className="block text-muted-foreground hover:text-primary transition-colors">
                    • Turnkey Industrial Contractor Pune
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

export default LocationDetail;
