import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import SEO from "@/components/SEO";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <>
      <SEO 
        title={service.seoTitle} 
        description={service.metaDescription} 
        breadcrumbs={breadcrumbs}
        extraSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
          "provider": {
            "@type": "Organization",
            "name": "KFab Infra Project"
          }
        }}
      />
      
      <div className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">{service.h1}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">{service.introduction}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Why Choose Us for {service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.whyChooseUs}</p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                <ul className="space-y-3">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Advantages</h3>
                <ul className="space-y-3">
                  {service.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faq.map((f, i) => (
                  <div key={i} className="bg-card p-6 rounded-lg border">
                    <h4 className="text-xl font-bold mb-2">{f.question}</h4>
                    <p className="text-muted-foreground">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Need a Quote?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our engineering team to discuss your {service.title.toLowerCase()} requirements.
              </p>
              <Link to="/contact">
                <Button className="w-full h-12 text-lg">
                  Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold mb-4">Materials Used</h4>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map(m => (
                    <span key={m} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
