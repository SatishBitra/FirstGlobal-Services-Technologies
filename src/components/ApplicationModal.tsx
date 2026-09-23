import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, FileText, Trash2, Send, AlertCircle } from 'lucide-react';
import { ApplicationFormData } from '../types.ts';
import {
  validateApplicationData,
  validateApplicationField,
  ApplicationSchemaType,
} from '../schemas/forms.ts';
import { SubmissionSuccess } from './SubmissionSuccess.tsx';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    areaOfInterest: 'OPERATIONS',
    relevantExperience: '',
    potentialContribution: '',
    resumeFile: null,
  });

  const [touched, setTouched] = useState<Partial<Record<keyof ApplicationFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setErrors({});
      setTouched({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFieldBlur = (field: keyof ApplicationFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateApplicationField(
      field as keyof ApplicationSchemaType,
      formData[field]
    );
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

  const handleFieldChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateApplicationField(
        field as keyof ApplicationSchemaType,
        value
      );
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

  const handleFile = (file: File) => {
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValidExtension = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValidExtension) {
      setErrors((prev) => ({
        ...prev,
        resume: 'Accepted formats are PDF, DOC, and DOCX.',
      }));
      return;
    }

    // 10MB limit
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: 'File size must be within 10MB.',
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resumeFile: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
    }));

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.resume;
      return copy;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, resumeFile: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      linkedIn: true,
      areaOfInterest: true,
      relevantExperience: true,
      potentialContribution: true,
    });

    const validation = validateApplicationData(formData);
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
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedIn: '',
      areaOfInterest: 'OPERATIONS',
      relevantExperience: '',
      potentialContribution: '',
      resumeFile: null,
    });
    setTouched({});
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#10243a]/50 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[640px] bg-white rounded-[20px] shadow-2xl border border-[#e6eaee] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-[#e6eaee] flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#159b8b]" />
              <span className="text-[12px] font-heading font-medium uppercase tracking-wider text-[#5f6b78]">
                RISE® Initiative · Leadership &amp; Strategic Roles
              </span>
            </div>
            <h3
              id="apply-modal-title"
              className="font-heading font-medium text-[24px] sm:text-[26px] text-[#10243a]"
            >
              JOIN OUR TEAM
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="close-apply-modal-btn"
            className="p-2 rounded-full text-[#5f6b78] hover:text-[#10243a] hover:bg-[#f8fafc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1557c0]"
            aria-label="Close Join Our Team Form"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <SubmissionSuccess
              title="Application Received"
              message="Thank you for your interest. Our team will review your submission."
              email="contact@first-global.in"
              resetLabel="Submit Another Profile"
              onReset={handleReset}
              onClose={onClose}
              buttonColorClass="bg-[#10243a] hover:bg-[#1557c0]"
            />
          ) : (
            <form onSubmit={handleSubmit} id="apply-form" className="space-y-4" noValidate>
              <div className="bg-[#f8fafc] border border-[#e6eaee] rounded-[10px] px-4 py-3 text-[13px] text-[#5f6b78] flex items-center justify-between">
                <span>Official Submission Email:</span>
                <span className="font-medium text-[#1557c0]">contact@first-global.in</span>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="apply-name"
                  className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                >
                  Name <span className="text-[#1557c0]">*</span>
                </label>
                <input
                  type="text"
                  id="apply-name"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  onBlur={() => handleFieldBlur('name')}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'apply-name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                  } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all`}
                />
                {errors.name && (
                  <p id="apply-name-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="apply-email"
                    className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                  >
                    Email Address <span className="text-[#1557c0]">*</span>
                  </label>
                  <input
                    type="email"
                    id="apply-email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleFieldBlur('email')}
                    placeholder="name@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'apply-email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[10px] border ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                    } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all`}
                  />
                  {errors.email && (
                    <p id="apply-email-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="apply-phone"
                    className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                  >
                    Contact Number <span className="text-[#1557c0]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="apply-phone"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    onBlur={() => handleFieldBlur('phone')}
                    placeholder="+91 Contact number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'apply-phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-[10px] border ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                    } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all`}
                  />
                  {errors.phone && (
                    <p id="apply-phone-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* LinkedIn / Profile Link */}
              <div>
                <label
                  htmlFor="apply-linkedin"
                  className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                >
                  LinkedIn / Profile Link
                </label>
                <input
                  type="text"
                  id="apply-linkedin"
                  value={formData.linkedIn}
                  onChange={(e) => handleFieldChange('linkedIn', e.target.value)}
                  onBlur={() => handleFieldBlur('linkedIn')}
                  placeholder="https://linkedin.com/in/username or portfolio link"
                  aria-invalid={!!errors.linkedIn}
                  aria-describedby={errors.linkedIn ? 'apply-linkedin-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.linkedIn ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                  } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all`}
                />
                {errors.linkedIn && (
                  <p id="apply-linkedin-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.linkedIn}</span>
                  </p>
                )}
              </div>

              {/* Area of Interest */}
              <div>
                <label
                  htmlFor="apply-area"
                  className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                >
                  Area of Interest <span className="text-[#1557c0]">*</span>
                </label>
                <select
                  id="apply-area"
                  value={formData.areaOfInterest}
                  onChange={(e) => handleFieldChange('areaOfInterest', e.target.value)}
                  onBlur={() => handleFieldBlur('areaOfInterest')}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#e6eaee] bg-white text-[15px] text-[#10243a] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all"
                >
                  <option value="OPERATIONS">OPERATIONS</option>
                  <option value="TECHNOLOGY">TECHNOLOGY</option>
                  <option value="FINANCE">FINANCE</option>
                  <option value="PARTNERSHIPS_AND_ECOSYSTEM">PARTNERSHIPS &amp; ECOSYSTEM</option>
                  <option value="STRATEGIC_LEADERSHIP">STRATEGIC LEADERSHIP (OTHER)</option>
                </select>
              </div>

              {/* Relevant Experience */}
              <div>
                <label
                  htmlFor="apply-experience"
                  className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                >
                  Relevant Experience <span className="text-[#1557c0]">*</span>
                </label>
                <textarea
                  id="apply-experience"
                  rows={3}
                  value={formData.relevantExperience}
                  onChange={(e) => handleFieldChange('relevantExperience', e.target.value)}
                  onBlur={() => handleFieldBlur('relevantExperience')}
                  placeholder="Briefly outline your professional background and relevant domain experience..."
                  aria-invalid={!!errors.relevantExperience}
                  aria-describedby={errors.relevantExperience ? 'apply-experience-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.relevantExperience ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                  } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all resize-none`}
                />
                {errors.relevantExperience && (
                  <p id="apply-experience-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.relevantExperience}</span>
                  </p>
                )}
              </div>

              {/* Potential Contribution */}
              <div>
                <label
                  htmlFor="apply-contribution"
                  className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5"
                >
                  Potential Contribution <span className="text-[#1557c0]">*</span>
                </label>
                <textarea
                  id="apply-contribution"
                  rows={3}
                  value={formData.potentialContribution}
                  onChange={(e) => handleFieldChange('potentialContribution', e.target.value)}
                  onBlur={() => handleFieldBlur('potentialContribution')}
                  placeholder="How can you contribute to building scalable platforms, partnerships, or rural service networks?"
                  aria-invalid={!!errors.potentialContribution}
                  aria-describedby={errors.potentialContribution ? 'apply-contribution-error' : undefined}
                  className={`w-full px-4 py-3 rounded-[10px] border ${
                    errors.potentialContribution ? 'border-red-400 bg-red-50/20' : 'border-[#e6eaee] bg-white'
                  } text-[15px] text-[#10243a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1557c0] transition-all resize-none`}
                />
                {errors.potentialContribution && (
                  <p id="apply-contribution-error" className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.potentialContribution}</span>
                  </p>
                )}
              </div>

              {/* File Upload Mechanism per PRD & User instructions */}
              <div>
                <label className="block text-[14px] font-heading font-medium text-[#10243a] mb-1.5">
                  Upload résumé/profile (PDF, DOC, DOCX)
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  id="resume-file-input"
                />

                {formData.resumeFile ? (
                  <div className="flex items-center justify-between p-3.5 bg-[#f8fafc] border border-[#e6eaee] rounded-[10px]">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-white rounded-lg border border-[#e6eaee] text-[#1557c0]">
                        <FileText size={20} />
                      </div>
                      <div className="truncate">
                        <p className="text-[14px] font-medium text-[#10243a] truncate">
                          {formData.resumeFile.name}
                        </p>
                        <p className="text-[12px] text-[#5f6b78]">
                          {(formData.resumeFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1.5 text-[#5f6b78] hover:text-red-600 hover:bg-white rounded transition-colors"
                      title="Remove file"
                      aria-label="Remove uploaded résumé"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-[12px] p-6 text-center cursor-pointer transition-colors ${
                      dragActive
                        ? 'border-[#1557c0] bg-[#1557c0]/5'
                        : 'border-[#e6eaee] hover:border-[#1557c0]/50 bg-[#f8fafc]/50'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white border border-[#e6eaee] flex items-center justify-center text-[#1557c0]">
                        <Upload size={18} />
                      </div>
                      <div className="text-[14px] text-[#10243a]">
                        <span className="font-heading font-medium text-[#1557c0]">Click to select</span> or drag &amp; drop
                      </div>
                      <div className="text-[12px] text-[#5f6b78]">
                        PDF, DOC, or DOCX (Max 10MB)
                      </div>
                    </div>
                  </div>
                )}
                {errors.resume && (
                  <p className="mt-1 text-[13px] text-red-600 flex items-center gap-1.5">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errors.resume}</span>
                  </p>
                )}
              </div>

              {/* SUBMIT button */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="apply-submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-[#10243a] hover:bg-[#1557c0] disabled:bg-[#10243a]/70 text-white font-heading font-medium text-[16px] py-4 rounded-[12px] transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1557c0] focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
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

