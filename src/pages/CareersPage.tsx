import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, Calendar, CheckCircle, X, Send, Award, Users, Shield } from "lucide-react";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "fab-manager",
    title: "Fabrication Manager",
    department: "Production & Shop Floor Operations",
    experience: "8+ Years (Heavy Industrial Fabrication)",
    location: "M.I.D.C, Jejuri, Pune",
    type: "Full-Time (On-Site)",
    description: "We are seeking a seasoned Fabrication Manager to oversee our 15,000 sq ft manufacturing shop floor. You will lead production timelines, coordinate cross-functional teams, and ensure heavy steel assemblies (including sugarcane vessels, silos, and structural girders) are fabricated to exact client specifications and safety codes.",
    responsibilities: [
      "Manage daily shop floor production activities and coordinate a team of 40+ fitters, welders, and technicians.",
      "Ensure compliance with production schedules, safety regulations, and quality standards.",
      "Interpret detailed structural drawings, client specs, and ASME/AWS engineering blueprints.",
      "Optimize workshop resource allocation, material usage, and machinery maintenance schedules."
    ],
    requirements: [
      "Bachelor's Degree or Diploma in Mechanical/Production Engineering.",
      "Proven track record of managing heavy fabrication workshops, structural steel works, or pressure vessels.",
      "Hands-on understanding of welding processes (MIG/TIG/Arc) and standard machine tools.",
      "Strong leadership, communication, and shop floor safety management skills."
    ]
  },
  {
    id: "qc-supervisor",
    title: "Quality Control Supervisor",
    department: "Quality Assurance & Compliance",
    experience: "5+ Years (QA/QC in Heavy Fabrication)",
    location: "M.I.D.C, Jejuri, Pune",
    type: "Full-Time (On-Site)",
    description: "We are looking for an experienced Quality Control Supervisor to spearhead our QA workflow. You will conduct stage-wise inspections of steel assemblies, weld runs, and protective coatings to verify absolute compliance with client specifications and national/international standards.",
    responsibilities: [
      "Conduct stage-wise dimensional inspections and fit-up verifications at various stages of fabrication.",
      "Perform and supervise non-destructive testing (NDT: Dye Penetrant, Visual, and coordinate Ultrasonic/Radiography testing).",
      "Validate incoming raw material certifications (mill test reports) for steel grades.",
      "Enforce standard operating procedures in compliance with ISO 9001:2015, IS 2062, and AWS D1.1 codes."
    ],
    requirements: [
      "Diploma or Degree in Mechanical/Metallurgical Engineering.",
      "Valid ASNT Level II certification in NDT methods (PT, UT, MT preferred).",
      "Detailed knowledge of weld defects, measurement instruments, and surface coat testing.",
      "Strong documentation skills and experience compiling Quality Assurance Plan (QAP) dossiers."
    ]
  }
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverNote: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedJob(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        coverNote: ""
      });
      toast.success("Application Submitted Successfully!", {
        description: "Our hiring team will review your profile and contact you soon."
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
            alt="Careers Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/80 to-secondary" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="divider-gold mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Join Our
              <br />
              <span className="text-primary">Engineering Legacy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At KFab, we believe in honest work, structural reliability, and the pride of hands-on craftsmanship. 
              Join a dedicated team that manufactures the backbone of India's core industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Core Values */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="card-premium p-6 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Precision Pride</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We don't cut corners. We build structures that endure, valuing details in every weld, cut, and coating.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-premium p-6 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Hands-on Culture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Work directly alongside experienced engineers and tradesmen in a collaborative shop floor environment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-premium p-6 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your safety is our top priority. We operate under strict safety guidelines with high-grade protective equipment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Open Opportunities"
            subtitle="Explore career pathways at our Jejuri, Pune facility"
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.1}>
                <div className="card-premium p-6 md:p-8 flex flex-col h-full rounded-[24px] border border-border/50 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                      {job.department}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
                    {job.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {job.location}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {job.description}
                  </p>

                  <div className="border-t border-border/50 pt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="btn-primary w-full text-center py-3 rounded-[12px] font-medium transition-all hover:bg-primary/95"
                    >
                      View Details & Apply
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Job Details & Application */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-background border border-border rounded-[24px] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                    {selectedJob.department}
                  </span>
                  <h2 className="text-3xl font-serif font-bold mt-4 mb-2 text-foreground">
                    Apply for {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {selectedJob.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedJob.location}
                    </span>
                  </div>
                </div>

                {/* Job Info */}
                <div className="space-y-6 mb-8 pb-6 border-b border-border/50">
                  <div>
                    <h4 className="text-md font-serif font-bold text-foreground mb-2">Role Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h4 className="text-md font-serif font-bold text-foreground mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2.5">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-md font-serif font-bold text-foreground mb-3">Required Credentials</h4>
                    <ul className="space-y-2.5">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-4">Application Form</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Relevant Experience (Years) <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g. 9 Years"
                        className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Brief Note / Cover Letter
                    </label>
                    <textarea
                      name="coverNote"
                      rows={3}
                      value={formData.coverNote}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your heavy fabrication experience..."
                      className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 rounded-[12px] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-not-allowed mt-6"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default CareersPage;
