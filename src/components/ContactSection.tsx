import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { TextReveal, ScrollReveal } from './ScrollReveal.tsx';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number.';
    if (!formData.organization.trim()) errs.organization = 'Please provide your organization or village.';
    if (!formData.message.trim()) errs.message = 'Please provide details of your area of interest.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F5] border-t border-[#DDE5E1] relative overflow-hidden" aria-label="Contact FirstGlobal">
      {/* Background Indian geometric dot texture */}
      <div className="absolute inset-0 bg-indian-texture opacity-30 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#DDE5E1] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: #071B3A Dark Panel with Dual Radial Glows (Blue + Teal) */}
          <div
            style={{
              background:
                'radial-gradient(circle at 10% 20%, rgba(23,105,194,0.30), transparent 40%), radial-gradient(circle at 90% 80%, rgba(0,168,138,0.22), transparent 40%), #071B3A',
            }}
            className="lg:col-span-5 relative text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden"
          >
            {/* Background photography */}
            <div className="absolute inset-0 -z-10">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80';
                }}
                alt="Indian heritage architecture and rural ecosystem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[0.35] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/85 to-transparent" />
            </div>

            <div>
              <ScrollReveal direction="up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-heading font-medium tracking-wide mb-6 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#39C85A]" />
                  <span>Get in Touch</span>
                </div>
              </ScrollReveal>

              <TextReveal
                as="h2"
                text="Connect with FirstGlobal"
                className="text-[32px] sm:text-[40px] font-heading font-normal tracking-tight text-white leading-[1.15] mb-4"
              />

              <ScrollReveal direction="up" delay={0.15}>
                <p className="text-[15px] text-white/85 leading-relaxed font-sans mb-8">
                  Whether you are exploring partnership opportunities, bringing services to your district, or joining our mission, we welcome your conversation.
                </p>

                <div className="space-y-4 text-[14px] text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#00AFC7]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60">Email Inquiries</p>
                      <p className="font-medium">contact@firstglobal.services</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#1769C2]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60">Phone Support</p>
                      <p className="font-medium">+91 1800 200 4880</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#39C85A]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60">Headquarters</p>
                      <p className="font-medium">Hyderabad &amp; Rural District Hubs, India</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8">
              <p className="text-[12.5px] font-heading text-white/70">
                FirstGlobal Services &amp; Technologies · Sovereign Rural Ecosystem
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-center">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#39C85A] flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-[24px] font-heading font-semibold text-[#123E9B] mb-2">
                  Thank You for Reaching Out
                </h3>
                <p className="text-[15px] text-[#667085] max-w-md mx-auto mb-6">
                  Your inquiry has been received. Our team will review your area of interest and connect with you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-gradient-primary px-6 py-2.5 rounded-full text-white text-[14px] font-heading font-medium"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="mb-4">
                    <h3 className="text-[22px] sm:text-[24px] font-heading font-semibold text-[#123E9B] mb-1">
                      Send an Inquiry
                    </h3>
                    <p className="text-[13.5px] text-[#667085]">
                      Fill out the fields below and our partner engagement desk will respond within 24 hours.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[13px] font-heading font-medium text-[#12233F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1769C2] ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#DDE5E1] bg-[#FAF9F5]/60 text-[#12233F]'
                      }`}
                    />
                    {errors.name && <p className="text-[11.5px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[13px] font-heading font-medium text-[#12233F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1769C2] ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#DDE5E1] bg-[#FAF9F5]/60 text-[#12233F]'
                      }`}
                    />
                    {errors.email && <p className="text-[11.5px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] font-heading font-medium text-[#12233F] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1769C2] ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#DDE5E1] bg-[#FAF9F5]/60 text-[#12233F]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11.5px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-[13px] font-heading font-medium text-[#12233F] mb-1">
                      Organization / Village *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Gram Panchayat / Enterprise"
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1769C2] ${
                        errors.organization ? 'border-red-400 bg-red-50/30' : 'border-[#DDE5E1] bg-[#FAF9F5]/60 text-[#12233F]'
                      }`}
                    />
                    {errors.organization && <p className="text-[11.5px] text-red-600 mt-1">{errors.organization}</p>}
                  </div>
                </div>

                {/* Message / Area of Interest */}
                <div>
                  <label className="block text-[13px] font-heading font-medium text-[#12233F] mb-1">
                    Message / Area of Interest *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how you would like to partner with FirstGlobal or services you are looking to deploy..."
                    className={`w-full px-4 py-3 rounded-xl border text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1769C2] ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#DDE5E1] bg-[#FAF9F5]/60 text-[#12233F]'
                    }`}
                  />
                  {errors.message && <p className="text-[11.5px] text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Primary Button: Green + Blue gradient with animated hover */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gradient-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-heading font-medium text-[15px] px-9 py-3.5 rounded-full shadow-md hover:shadow-lg disabled:opacity-60"
                  >
                    <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
