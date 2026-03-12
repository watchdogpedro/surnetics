"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, Phone, Shield, ArrowRight } from "lucide-react";

// Paste your Google Apps Script Web App URL here after setup (see README)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIMcOwZTcYqKh4-qJ7I16DZroJAhcZIO3WezTZUKxvOr2NAd6sawnaEwfsIH0bVFhZ/exec";

const inquiryTypes = [
  "Patent Acquisition / Portfolio Sale",
  "Licensing Inquiry",
  "Development Partnership",
  "Technical Question",
  "General Inquiry",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Google Apps Script requires form-encoded data with no-cors mode
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          inquiryType: form.inquiryType,
          message: form.message,
        }).toString(),
      });
      // no-cors means we can't read the response — optimistically show success
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Start the Conversation
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Whether you are interested in licensing, co-development, or simply
              learning more about the technology, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
                  How We Engage
                </p>
                {[
                  {
                    title: "Patent Acquisition",
                    desc: "Interested in acquiring the full 5-patent portfolio? We welcome direct inquiries from corporate BD and IP teams at life science and diagnostics companies.",
                  },
                  {
                    title: "Licensing Inquiry",
                    desc: "Interested in licensing the technology for your product or platform? We will schedule a technical briefing and discuss terms.",
                  },
                  {
                    title: "Development Partnership",
                    desc: "Looking to co-develop a product using our coating technology? Tell us about your application and we will scope a feasibility study.",
                  },
                  {
                    title: "Technical Questions",
                    desc: "Have questions about compatibility, capabilities, or process? Our technical team will respond directly.",
                  },
                ].map((item) => (
                  <div key={item.title} className="mb-5 pb-5 border-b border-[#E2E8F0] last:border-0 last:pb-0 last:mb-0">
                    <h3 className="text-[#0A1628] font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#8892A4] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Patent Reminder */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Shield size={16} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#0A1628] font-semibold text-xs mb-2">Active Patent Portfolio</p>
                    <p className="text-[#8892A4] text-xs leading-relaxed mb-2">
                      5 Granted US Patents · 3 Applications in Prosecution
                    </p>
                    <p className="text-[#8892A4] text-xs leading-relaxed">
                      Portfolio extends through 2041 · 44 industry citations
                    </p>
                    <Link
                      href="/ip-portfolio/"
                      className="inline-flex items-center gap-1 text-[#0066FF] text-xs font-semibold mt-2 hover:underline"
                    >
                      View full portfolio →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 md:p-10 shadow-sm">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <ArrowRight size={22} className="text-green-600" />
                    </div>
                    <h2 className="text-[#0A1628] font-bold text-xl mb-2">Message Sent</h2>
                    <p className="text-[#8892A4] text-sm">
                      Thank you for reaching out. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] placeholder-[#8892A4] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] placeholder-[#8892A4] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] placeholder-[#8892A4] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (optional)"
                          className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] placeholder-[#8892A4] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Inquiry Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] bg-white focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors"
                      >
                        <option value="" disabled>Select inquiry type</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your application, questions, or interest..."
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-sm text-[#2D3748] placeholder-[#8892A4] focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-xs">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 disabled:opacity-60 transition-colors duration-200"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      {status !== "submitting" && <ArrowRight size={16} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
