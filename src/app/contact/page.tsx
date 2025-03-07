"use client";


import { sendEmail } from "../lib/resend"

import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      await sendEmail(name, email, subject, message);
      setIsSubmitted(true); // Show success message
      setIsError(false); // Reset error state
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true); // Show error message
    }
  };

  return (
  <div id="section4">
     <div className="min-h-screen flex justify-center items-center  py-12">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md border border-gray-100">
        <h1 className="text-2xl sm:text-3xl p-2 md:text-4xl font-extrabold text-blue-400 mb-8 text-center">
          Get in Touch
        </h1>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-4">
              Your message has been sent successfully!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Message"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all"
              >
                Submit
              </button>
            </div>
            {isError && (
              <p className="text-red-600 text-sm text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  </div>
   
  );
}