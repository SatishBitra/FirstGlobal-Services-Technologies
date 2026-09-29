import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

interface SubmissionSuccessProps {
  title: string;
  message?: string;
  email?: string;
  onReset: () => void;
  resetLabel: string;
  onClose: () => void;
  buttonColorClass?: string;
}

export const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({
  title,
  message = 'Thank you for your interest. Our team will review your submission.',
  email = 'contact@first-global.in',
  onReset,
  resetLabel,
  onClose,
  buttonColorClass = 'btn-gradient-primary',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 sm:py-10 text-center flex flex-col items-center justify-center"
    >
      {/* Animated Check Badge with ripple */}
      <div className="relative mb-5 flex items-center justify-center">
        {/* Soft expanding halo ring */}
        <motion.span
          className="absolute w-20 h-20 rounded-full bg-[#39C85A]/20"
          initial={{ scale: 0.6, opacity: 0.9 }}
          animate={{ scale: 1.45, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        />

        {/* Icon circle */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            delay: 0.1,
          }}
          className="relative w-16 h-16 rounded-full bg-[#39C85A]/15 text-[#39C85A] flex items-center justify-center shadow-sm"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.25 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
        className="font-heading font-medium text-[22px] sm:text-[24px] text-[#123E9B] mb-2.5"
      >
        {title}
      </motion.h4>

      {/* Confirmation Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.32 }}
        className="text-[15px] sm:text-[16px] text-[#12233F] max-w-[430px] mb-6 leading-relaxed"
      >
        {message}
      </motion.p>

      {/* Routing details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.38 }}
        className="bg-[#FAF9F5] border border-[#DDE5E1] rounded-[12px] p-4 text-[13px] text-[#667085] mb-8 w-full max-w-[420px] text-left flex items-start gap-3 shadow-xs"
      >
        <Mail size={18} className="text-[#123E9B] shrink-0 mt-0.5" />
        <div>
          <span className="font-medium text-[#12233F] block">
            Designated Official Email Routing:
          </span>
          <span className="font-mono text-[12px] text-[#123E9B]">{email}</span>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-[360px]"
      >
        <button
          type="button"
          onClick={onReset}
          className="flex-1 py-3 px-5 border border-[#DDE5E1] text-[#12233F] text-[14px] font-heading font-medium rounded-full hover:bg-neutral-50 transition-all cursor-pointer shadow-xs"
        >
          {resetLabel}
        </button>
        <button
          type="button"
          onClick={onClose}
          className={`flex-1 py-3 px-5 ${buttonColorClass} text-white text-[14px] font-heading font-medium rounded-full transition-all shadow-sm cursor-pointer`}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};
