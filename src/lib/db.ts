import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";

export interface Job {
  id?: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  createdAt?: any;
}

const DEFAULT_JOBS: Job[] = [
  {
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

// Fetch all jobs, auto-populating if none exist
export const getJobs = async (): Promise<Job[]> => {
  try {
    const jobsCol = collection(db, "jobs");
    const q = query(jobsCol);
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log("No jobs found in database, seeding default jobs...");
      const seededJobs: Job[] = [];
      for (const defaultJob of DEFAULT_JOBS) {
        const docRef = await addDoc(jobsCol, {
          ...defaultJob,
          createdAt: new Date(),
        });
        seededJobs.push({ ...defaultJob, id: docRef.id });
      }
      return seededJobs;
    }

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || "",
        department: data.department || "",
        experience: data.experience || "",
        location: data.location || "",
        type: data.type || "",
        description: data.description || "",
        responsibilities: data.responsibilities || [],
        requirements: data.requirements || [],
        createdAt: data.createdAt,
      };
    });
  } catch (error) {
    console.error("Error fetching jobs from Firestore:", error);
    // Return defaults as fallback if database has rules issues or offline
    return DEFAULT_JOBS.map((job, idx) => ({ ...job, id: `fallback-${idx}` }));
  }
};

// Add a job opportunity
export const addJob = async (job: Omit<Job, "id">): Promise<string> => {
  try {
    const jobsCol = collection(db, "jobs");
    const docRef = await addDoc(jobsCol, {
      ...job,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding job to Firestore:", error);
    throw error;
  }
};

// Delete a job opportunity
export const deleteJob = async (jobId: string): Promise<void> => {
  try {
    const docRef = doc(db, "jobs", jobId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting job from Firestore:", error);
    throw error;
  }
};

// Submit a quote request (Contact page)
export const submitQuoteRequest = async (quoteData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}): Promise<string> => {
  try {
    const quotesCol = collection(db, "quotes");
    const docRef = await addDoc(quotesCol, {
      ...quoteData,
      submittedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error submitting quote request:", error);
    throw error;
  }
};

// Submit a job application (Careers page)
export const submitJobApplication = async (applicationData: {
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  coverNote?: string;
  resumeUrl?: string;
}): Promise<string> => {
  try {
    const applicationsCol = collection(db, "applications");
    const docRef = await addDoc(applicationsCol, {
      ...applicationData,
      submittedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error submitting job application:", error);
    throw error;
  }
};
