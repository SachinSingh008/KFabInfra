import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { locationsData } from "@/data/locationsData";
import SEO from "@/components/SEO";
import { MapPin, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: location.title, url: `/location/${location.slug}` }
  ];

  return (
    <>
      <SEO 
        title={location.seoTitle} 
        description={location.metaDescription} 
        breadcrumbs={breadcrumbs}
      />
      
      <div className="pt-24 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">{location.h1}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">{location.content}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-playfair">Serving Local Industries</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Strategically located in Pune, we serve a wide range of industrial belts across Maharashtra and India.
            </p>
            <ul className="space-y-4">
              {location.nearbyIndustries.map((industry, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                  <span className="font-medium">{industry}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg">
                  <Phone className="mr-2" /> Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {location.faq.map((f, i) => (
                <div key={i}>
                  <h4 className="text-xl font-bold mb-2">{f.question}</h4>
                  <p className="text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
