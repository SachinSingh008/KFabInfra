import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo.config";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  X,
  Send,
  Award,
  Users,
  Shield,
  Trash2,
  Plus,
  Lock,
} from "lucide-react";
import { toast } from "sonner";
import { getJobs, addJob, deleteJob, submitJobApplication, Job } from "@/lib/db";
import { sendEmailNotification } from "@/lib/email";

const CareersPage = () => {
  const [jobsList, setJobsList] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Admin Panel states
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [isAddingJob, setIsAddingJob] = useState(false);

  // Fetch jobs from Firebase Firestore
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await getJobs();
        setJobsList(data);
      } catch (error) {
        console.error("Failed to load jobs:", error);
        toast.error("Failed to load live jobs. Displaying fallbacks.");
      } finally {
        setIsLoadingJobs(false);
      }
    };
    loadJobs();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !selectedJob
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save application to Firebase Firestore
      await submitJobApplication({
        jobId: selectedJob.id || "seeding-job",
        jobTitle: selectedJob.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        coverNote: formData.coverNote,
      });

      // 2. Trigger email notification
      await sendEmailNotification({
        subject: `👷 New Job Application — ${selectedJob.title}`,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        message: formData.coverNote || "No cover note provided.",
        service: `Job Application: ${selectedJob.title}`,
        type: "career",
      });

      setSelectedJob(null);
      setFormData({ name: "", email: "", phone: "", experience: "", coverNote: "" });
      toast.success("Application Submitted Successfully!", {
        description: "Our hiring team will review your profile and contact you soon.",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    const newJob = {
      title: target.title.value,
      department: target.department.value,
      experience: target.experience.value,
      type: target.type.value,
      location: target.location.value,
      description: target.description.value,
      responsibilities: target.responsibilities.value
        .split("\n")
        .filter((l: string) => l.trim() !== ""),
      requirements: target.requirements.value
        .split("\n")
        .filter((l: string) => l.trim() !== ""),
    };

    setIsAddingJob(true);
    try {
      const newId = await addJob(newJob);
      setJobsList((prev) => [...prev, { ...newJob, id: newId }]);
      toast.success("Job Opening created successfully.");
      setShowAddJobModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create job.");
    } finally {
      setIsAddingJob(false);
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm("Are you sure you want to delete this job opening?")) return;
    try {
      await deleteJob(jobId);
      setJobsList((prev) => prev.filter((j) => j.id !== jobId));
      toast.success("Job Opening deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete job.");
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO {...PAGE_SEO.careers} breadcrumbs={[{ name: "Home", url: "https://kfabinfraproject.site" }, { name: "Careers", url: "https://kfabinfraproject.site/careers" }]} />
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
              At KFab, we believe in honest work, structural reliability, and the
              pride of hands-on craftsmanship. Join a dedicated team that
              manufactures the backbone of India's core industrial sectors.
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
                  We don't cut corners. We build structures that endure, valuing details
                  in every weld, cut, and coating.
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
                  Work directly alongside experienced engineers and tradesmen in a
                  collaborative shop floor environment.
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
                  Your safety is our top priority. We operate under strict safety
                  guidelines with high-grade protective equipment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="flex-1">
              <div className="divider-gold mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Open Opportunities
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Explore career pathways at our Jejuri, Pune facility
              </p>
            </div>

            {/* Admin Controls Toggle */}
            <div className="flex items-center gap-4">
              {isAdmin ? (
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                    Admin Mode
                  </span>
                  <button
                    onClick={() => setIsAdmin(false)}
                    className="text-xs text-muted-foreground hover:text-foreground font-medium underline"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowPasscodeModal(true)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium border border-border/80 px-3 py-1.5 rounded-full hover:bg-secondary"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Admin Panel
                </button>
              )}
            </div>
          </div>

          {isAdmin && (
            <div className="flex justify-end mb-8 max-w-5xl mx-auto">
              <button
                onClick={() => setShowAddJobModal(true)}
                className="flex items-center gap-2 btn-gold py-2.5 px-5 rounded-[12px] font-semibold text-sm shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add New Job Opening
              </button>
            </div>
          )}

          {isLoadingJobs ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
              <p className="text-muted-foreground text-sm">Loading active job list...</p>
            </div>
          ) : jobsList.length === 0 ? (
            <div className="text-center py-16 max-w-xl mx-auto border border-dashed border-border rounded-[24px]">
              <Briefcase className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-serif font-bold text-foreground">No Current Openings</h3>
              <p className="text-muted-foreground text-sm mt-1">
                There are no open roles at this time. Check back later or write to us directly.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {jobsList.map((job, index) => (
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

                    <div className="border-t border-border/50 pt-6 flex gap-3 items-center justify-between">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="btn-primary flex-1 text-center py-3 rounded-[12px] font-medium transition-all hover:bg-primary/95"
                      >
                        View Details & Apply
                      </button>
                      {isAdmin && (
                        <button
                          onClick={() => job.id && handleDeleteJob(job.id)}
                          className="p-3 bg-destructive/10 text-destructive rounded-[12px] hover:bg-destructive/25 transition-colors"
                          title="Delete Job"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
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

      {/* Passcode Verification Modal */}
      {showPasscodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowPasscodeModal(false)} />
          <div className="relative bg-background border border-border rounded-[20px] p-6 max-w-sm w-full shadow-2xl z-10">
            <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2 text-foreground">
              <Lock className="w-5 h-5 text-primary" /> Admin Verification
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const passcode = (e.target as any).passcode.value;
              if (passcode === "Champion008") {
                setIsAdmin(true);
                setShowPasscodeModal(false);
                toast.success("Admin access granted.");
              } else {
                toast.error("Incorrect passcode.");
              }
            }}>
              <input 
                name="passcode"
                type="password"
                required
                placeholder="Enter Admin Passcode"
                className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 text-foreground mb-4"
              />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowPasscodeModal(false)} className="text-sm font-medium text-muted-foreground px-4 py-2 hover:text-foreground">Cancel</button>
                <button type="submit" className="btn-primary text-sm font-semibold py-2 px-5 rounded-[10px]">Verify</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Job Opening Modal */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddJobModal(false)} />
          <div className="relative bg-background border border-border rounded-[24px] p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 scrollbar-thin">
            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Create New Job Opening</h3>
            <form onSubmit={handleAddJobSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Job Title *</label>
                <input name="title" required placeholder="e.g. Fabrication Engineer" className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Department *</label>
                <input name="department" required placeholder="e.g. Operations" className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">Experience Required *</label>
                  <input name="experience" required placeholder="e.g. 5+ Years" className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">Job Type *</label>
                  <input name="type" required defaultValue="Full-Time (On-Site)" className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Location *</label>
                <input name="location" required defaultValue="M.I.D.C, Jejuri, Pune" className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Role Description *</label>
                <textarea name="description" rows={3} required placeholder="Describe the role overview..." className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Key Responsibilities (one per line) *</label>
                <textarea name="responsibilities" rows={3} required placeholder="Responsible for..." className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Required Credentials (one per line) *</label>
                <textarea name="requirements" rows={3} required placeholder="Must have..." className="w-full bg-secondary border border-border/80 rounded-[10px] px-4 py-2 text-sm focus:outline-none text-foreground resize-none" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowAddJobModal(false)} className="text-sm font-medium text-muted-foreground px-4 py-2 hover:text-foreground">Cancel</button>
                <button type="submit" disabled={isAddingJob} className="btn-primary text-sm font-semibold py-2 px-5 rounded-[10px]">{isAddingJob ? "Creating..." : "Create Job"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default CareersPage;
