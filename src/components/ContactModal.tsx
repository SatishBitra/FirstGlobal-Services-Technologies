import React, { useState, useEffect, useRef } from 'react';
import { X, Send, AlertCircle } from 'lucide-react';
import { EnquiryFormData } from '../types.ts';
import { validateEnquiryData, validateEnquiryField, EnquirySchemaType } from '../schemas/forms.ts';
import { SubmissionSuccess } from './SubmissionSuccess.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setErrors({});
      setTouched({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFieldBlur = (field: keyof EnquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateEnquiryField(field as keyof EnquirySchemaType, formData[field]);
    setErrors((prev) => {
      const updated = { ...prev };
      if (errorMsg) {
        updated[field] = errorMsg;
      } else {
        delete updated[field];
      }
      return updated;
    });
  };

  const handleFieldChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // If the field was already touched, validate on the fly
    if (touched[field]) {
      const errorMsg = validateEnquiryField(field as keyof EnquirySchemaType, value);
      setErrors((prev) => {
        const updated = { ...prev };
        if (errorMsg) {
          updated[field] = errorMsg;
        } else {
          delete updated[field];
        }
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      organization: true,
      message: true,
    });

    const validation = validateEnquiryData(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission to designated official email: contact@first-global.in
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: '',
    });
    setTouched({});
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#071B3A]/65 backdrop-blur-sm p-3 sm:p-6 md:p-8 flex min-h-full items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      aria-labelledby="enquiry-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        data-lenis-prevent="true"
        className="relative w-full max-w-[560px] my-auto bg-white rounded-[20px] sm:rounded-[24px] shadow-2xl border border-[#DDE5E1] overflow-hidden max-h-[calc(100dvh-1.5rem)] sm:max-h-[min(88vh,760px)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 sm:pb-5 border-b border-[#DDE5E1] flex items-center justify-between bg-white sticky top-0 z-10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#00A88A]" />
              <span className="text-[12px] font-heading font-medium uppercase tracking-wider text-[#667085]">
                FirstGlobal Services
              </span>
            </div>
            <h3
              id="enquiry-modal-title"
              className="font-heading font-medium text-[22px] sm:text-[26px] text-[#123E9B]"
            >
              ENQUIRY FORM
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="close-enquiry-modal-btn"
            className="p-2 rounded-full text-[#667085] hover:text-[#123E9B] hover:bg-[#FAF9F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1769C2]"
            aria-label="Close Enquiry Form"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body with data-lenis-prevent & touch scroll support */}
        <div
          data-lenis-prevent="true"
          className="px-5 sm:px-8 py-5 sm:py-6 overflow-y-auto overscroll-contain flex-1 touch-pan-y"
        >
          {isSubmitted ? (
            <SubmissionSuccess
              title="Submission Received"
              message="Thank you for your interest. Our team will review your submission."
              email="contact@first-global.in"
              resetLabel="Send Another Enquiry"
              onReset={handleReset}
              onClose={onClose}
              buttonColorClass="btn-gradient-primary"
            />
          ) : (
            <form onSubmit={handleSubmit} id="enquiry-form" className="space-y-4" noValidate>
              <div className="bg-[#FAF9F5] border border-[#DDE5E1] rounded-[10px] px-4 py-3 text-[13px] text-[#667085] flex items-center justify-between">
                <span>Official Submission Email:</span>
                <span className="font-medium text-[#123E9B]">contact@first-global.in</span>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="block text-[14px] font-heading font-medium text-[#12233F] mb-1.5"
                >
                  Name <span className="text-[#123E9B]">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  onBlur={() => handleFieldBlur('name')}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#DDE5E1] bg-white'
                  } text-[15px] text-[#12233F] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:border-transparent transition-all`}
                />
                {errors.name && (
                  <p id="enquiry-name-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & Phone (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="block text-[14px] font-heading font-medium text-[#12233F] mb-1.5"
                  >
                    Email <span className="text-[#123E9B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="enquiry-email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleFieldBlur('email')}
                    placeholder="name@organization.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[10px] border ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DDE5E1] bg-white'
                    } text-[15px] text-[#12233F] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:border-transparent transition-all`}
                  />
                  {errors.email && (
                    <p id="enquiry-email-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-[14px] font-heading font-medium text-[#12233F] mb-1.5"
                  >
                    Phone <span className="text-[#123E9B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    onBlur={() => handleFieldBlur('phone')}
                    placeholder="+91 Phone number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[10px] border ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DDE5E1] bg-white'
                    } text-[15px] text-[#12233F] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:border-transparent transition-all`}
                  />
                  {errors.phone && (
                    <p id="enquiry-phone-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="enquiry-organization"
                  className="block text-[14px] font-heading font-medium text-[#12233F] mb-1.5"
                >
                  Organization <span className="text-[#123E9B]">*</span>
                </label>
                <input
                  type="text"
                  id="enquiry-organization"
                  value={formData.organization}
                  onChange={(e) => handleFieldChange('organization', e.target.value)}
                  onBlur={() => handleFieldBlur('organization')}
                  placeholder="Institution / Enterprise / Startup / Network"
                  aria-invalid={!!errors.organization}
                  aria-describedby={errors.organization ? 'enquiry-organization-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.organization ? 'border-red-400 bg-red-50/20' : 'border-[#DDE5E1] bg-white'
                  } text-[15px] text-[#12233F] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:border-transparent transition-all`}
                />
                {errors.organization && (
                  <p id="enquiry-organization-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.organization}</span>
                  </p>
                )}
              </div>

              {/* Message / Area of Interest */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block text-[14px] font-heading font-medium text-[#12233F] mb-1.5"
                >
                  Message / Area of Interest <span className="text-[#123E9B]">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  onBlur={() => handleFieldBlur('message')}
                  placeholder="Outline your area of interest, capabilities, or potential collaboration approach..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#DDE5E1] bg-white'
                  } text-[15px] text-[#12233F] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:border-transparent transition-all resize-none`}
                />
                {errors.message && (
                  <p id="enquiry-message-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Clearly visible SUBMIT button */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  disabled={isSubmitting}
                  className="btn-gradient-primary w-full disabled:opacity-60 text-white font-heading font-medium text-[15px] sm:text-[16px] py-4 rounded-full flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1769C2] focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

