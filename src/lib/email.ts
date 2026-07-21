import emailjs from "@emailjs/browser";

interface EmailPayload {
  subject: string;
  from_name: string;
  from_email: string;
  phone: string;
  company?: string;
  service?: string;
  experience?: string;
  message?: string;
  type: "quote" | "career";
}

export const sendEmailNotification = async (payload: EmailPayload): Promise<void> => {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = payload.type === "quote"
    ? import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID
    : import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID;

  if (!serviceId || !publicKey || !templateId) {
    console.warn(
      "EmailJS: One or more env variables are missing in .env " +
      "(VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_PUBLIC_KEY / template IDs). " +
      "Email notification skipped."
    );
    console.log("Email payload (simulated):", payload);
    return;
  }

  const templateParams = {
    subject:     payload.subject,
    from_name:   payload.from_name,
    from_email:  payload.from_email,
    phone:       payload.phone,
    company:     payload.company    || "N/A",
    service:     payload.service    || "N/A",
    experience:  payload.experience || "N/A",
    message:     payload.message    || "N/A",
    reply_to:    payload.from_email,
  };

  const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
  console.log("Email sent via EmailJS:", response.text);
};
