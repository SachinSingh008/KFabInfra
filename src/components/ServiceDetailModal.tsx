import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, ArrowRight, CheckCircle2, Images, Layers, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceItem {
  slug?: string;
  title: string;
  description: string;
  image?: string;
  images: string[]; // List of multiple images for the SAME structure
  tag?: string;
  tags?: string[]; // Array of category and specification tags
  features?: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  selectedIndex: number; // Selected Service Index
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  services,
  selectedIndex: initialServiceIndex,
}) => {
  const [serviceIndex, setServiceIndex] = useState(initialServiceIndex);
  const [imageIndex, setImageIndex] = useState(0);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Sync initial service index when modal opens
  useEffect(() => {
    setServiceIndex(initialServiceIndex);
    setImageIndex(0);
  }, [initialServiceIndex, isOpen]);

  // Auto-scroll active thumbnail into center view
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    const activeThumb = thumbnailRefs.current[imageIndex];
    if (container && activeThumb) {
      const containerWidth = container.offsetWidth;
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const targetScrollLeft = thumbLeft - containerWidth / 2 + thumbWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
  }, [imageIndex, serviceIndex, isOpen]);

  // Reset inner image index whenever active service changes
  const changeService = (newServiceIndex: number) => {
    setServiceIndex(newServiceIndex);
    setImageIndex(0);
  };

  const handlePrevService = () => {
    changeService(serviceIndex === 0 ? services.length - 1 : serviceIndex - 1);
  };

  const handleNextService = () => {
    changeService(serviceIndex === services.length - 1 ? 0 : serviceIndex + 1);
  };

  const currentService = services[serviceIndex] || services[0];
  const currentImages = currentService.images && currentService.images.length > 0 
    ? currentService.images 
    : [currentService.image || ""];

  const activeImage = currentImages[imageIndex] || currentImages[0];

  // Inner navigation for photos of the SAME structure
  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, serviceIndex, imageIndex, services.length]);

  if (!isOpen || services.length === 0) return null;

  const prevServiceObj = services[(serviceIndex - 1 + services.length) % services.length];
  const nextServiceObj = services[(serviceIndex + 1) % services.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Soft Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-md"
        />

        {/* Floating Side Button: PREVIOUS SERVICE (Left Desktop Arrow) */}
        <button
          onClick={handlePrevService}
          className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/95 text-slate-800 border border-slate-200 shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 max-w-[140px] group"
          title={`Switch to Previous Service: ${prevServiceObj.title}`}
        >
          <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white">
            <ChevronLeft className="w-4 h-4" />
            <span>Prev Service</span>
          </div>
          <span className="text-xs font-bold line-clamp-1 text-center group-hover:text-white">
            {prevServiceObj.title}
          </span>
        </button>

        {/* Floating Side Button: NEXT SERVICE (Right Desktop Arrow) */}
        <button
          onClick={handleNextService}
          className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/95 text-slate-800 border border-slate-200 shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 max-w-[140px] group"
          title={`Switch to Next Service: ${nextServiceObj.title}`}
        >
          <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white">
            <span>Next Service</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold line-clamp-1 text-center group-hover:text-white">
            {nextServiceObj.title}
          </span>
        </button>

        {/* Light Modal Window Container */}
        <motion.div
          key={serviceIndex}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar Header with Service Switcher Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 bg-slate-50/90 gap-2">
            
            {/* Service Title & Category Tag */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Service {serviceIndex + 1} of {services.length}
              </span>
            </div>

            {/* Mobile/Tablet Service Switcher Bar */}
            <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-2xl border border-slate-300/80">
              <button
                onClick={handlePrevService}
                className="p-1.5 rounded-xl bg-white hover:bg-primary hover:text-white text-slate-800 transition-all shadow-sm flex items-center gap-1 text-xs font-bold"
                title={`Previous Service: ${prevServiceObj.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <span className="text-xs font-extrabold text-slate-800 px-2 line-clamp-1 max-w-[130px] sm:max-w-[200px]">
                {currentService.title}
              </span>

              <button
                onClick={handleNextService}
                className="p-1.5 rounded-xl bg-white hover:bg-primary hover:text-white text-slate-800 transition-all shadow-sm flex items-center gap-1 text-xs font-bold"
                title={`Next Service: ${nextServiceObj.title}`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-300/80 transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="overflow-y-auto flex-1 flex flex-col divide-y divide-slate-200">
            
            {/* SECTION 1: TOP GALLERY FOR CURRENT STRUCTURE */}
            <div className="p-4 sm:p-6 bg-slate-100/70 flex flex-col gap-4">
              
              {/* Main Image Viewport */}
              <div className="relative h-64 sm:h-80 md:h-[360px] w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm flex items-center justify-center group">
                <img
                  src={activeImage}
                  alt={`${currentService.title} - Photo ${imageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-300"
                />

                {/* INNER ARROWS: Switches photos of the SAME structure */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-slate-800 border border-slate-200 hover:bg-primary hover:text-white transition-all shadow-md hover:scale-105"
                      aria-label="Previous structure photo"
                      title="Previous photo of this structure"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-slate-800 border border-slate-200 hover:bg-primary hover:text-white transition-all shadow-md hover:scale-105"
                      aria-label="Next structure photo"
                      title="Next photo of this structure"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Photo Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-xs font-semibold text-white border border-slate-700 shadow-md flex items-center gap-1.5">
                  <Images className="w-3.5 h-3.5 text-sky-400" />
                  <span>
                    Photo {imageIndex + 1} of {currentImages.length}
                  </span>
                </div>

                {/* Service Name Badge */}
                <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-xs font-bold text-white border border-slate-700 shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>{currentService.title}</span>
                </div>
              </div>

              {/* Horizontal Scroll Strip for Photos of SAME Structure */}
              {currentImages.length > 1 && (
                <div
                  ref={thumbnailContainerRef}
                  className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent scroll-smooth"
                >
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex-shrink-0 flex items-center gap-1 mr-1">
                    <Layers className="w-3.5 h-3.5" />
                    Structure Photos:
                  </span>
                  {currentImages.map((imgUrl, idx) => {
                    const isSelected = idx === imageIndex;
                    return (
                      <button
                        key={idx}
                        ref={(el) => {
                          thumbnailRefs.current[idx] = el;
                        }}
                        onClick={() => setImageIndex(idx)}
                        className={`relative flex-shrink-0 w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          isSelected
                            ? "border-primary ring-4 ring-primary/20 scale-105 opacity-100 shadow-md"
                            : "border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-400"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${currentService.title} photo ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* SECTION 2: BOTTOM DESCRIPTION & SPECIFICATIONS */}
            <div className="p-5 sm:p-7 bg-white flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 mr-2">
                    {currentService.title}
                  </h2>
                  {currentService.tags && currentService.tags.length > 0 ? (
                    currentService.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold shadow-xs hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Sparkles className="w-3 h-3 text-primary" />
                        {t}
                      </span>
                    ))
                  ) : currentService.tag ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {currentService.tag}
                    </span>
                  ) : null}
                </div>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line space-y-3">
                  {currentService.description}
                </div>

                {/* Key Features / Specs */}
                {currentService.features && currentService.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Key Engineering Specifications
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {currentService.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions & Service Jump Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Bottom Service Switcher Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={handlePrevService}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{prevServiceObj.title}</span>
                  </button>

                  <button
                    onClick={handleNextService}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200"
                  >
                    <span>{nextServiceObj.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <span>Request Fabrication Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
