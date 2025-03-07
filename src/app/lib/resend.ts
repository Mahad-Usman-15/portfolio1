"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_kEY)

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {
  try {
    const data = await resend.emails.send({
      to: "mahadusman2008@gmail.com", // Your email address
      from: "onboarding@resend.dev", // Use a verified email address
      subject: subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};