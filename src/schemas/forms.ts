import { z } from 'zod';

// Phone regex allowing country code (+91, etc.), spaces, dashes, parentheses
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,16}$/;

/**
 * Zod validation schema for Enquiry Form (ContactModal)
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please provide your full name (at least 2 characters).' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Please provide your email address.' })
    .email({ message: 'Please enter a valid email address (e.g. name@organization.com).' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Please provide your contact number.' })
    .refine((val) => phoneRegex.test(val), {
      message: 'Please enter a valid phone number (e.g. +91 98765 43210).',
    }),
  organization: z
    .string()
    .trim()
    .min(2, { message: 'Please provide your organization or institution name.' })
    .max(120, { message: 'Organization name must not exceed 120 characters.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Please outline your area of interest or message (at least 10 characters).' })
    .max(3000, { message: 'Message must not exceed 3,000 characters.' }),
});

export type EnquirySchemaType = z.infer<typeof enquirySchema>;

/**
 * Zod validation schema for Join Our Team Application Form (ApplicationModal)
 */
export const applicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please provide your full name (at least 2 characters).' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Please provide your email address.' })
    .email({ message: 'Please enter a valid email address (e.g. name@example.com).' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Please provide your contact number.' })
    .refine((val) => phoneRegex.test(val), {
      message: 'Please enter a valid contact number (e.g. +91 98765 43210).',
    }),
  linkedIn: z
    .string()
    .trim()
    .max(250, { message: 'Profile link must not exceed 250 characters.' })
    .refine(
      (val) => {
        if (!val || val.length === 0) return true;
        // Check if it's a valid web URL or profile identifier
        try {
          const url = val.startsWith('http://') || val.startsWith('https://') ? val : `https://${val}`;
          new URL(url);
          return true;
        } catch {
          return false;
        }
      },
      { message: 'Please enter a valid URL or profile link (e.g. https://linkedin.com/in/username).' }
    )
    .optional()
    .or(z.literal('')),
  areaOfInterest: z
    .string()
    .trim()
    .min(1, { message: 'Please select your area of interest.' }),
  relevantExperience: z
    .string()
    .trim()
    .min(10, { message: 'Please outline your relevant experience (at least 10 characters).' })
    .max(3000, { message: 'Experience description must not exceed 3,000 characters.' }),
  potentialContribution: z
    .string()
    .trim()
    .min(10, { message: 'Please describe your potential contribution (at least 10 characters).' })
    .max(3000, { message: 'Contribution description must not exceed 3,000 characters.' }),
  resumeFile: z
    .object({
      name: z.string(),
      size: z.number().max(10 * 1024 * 1024, { message: 'File size must be within 10MB.' }),
      type: z.string(),
    })
    .nullable()
    .optional(),
});

export type ApplicationSchemaType = z.infer<typeof applicationSchema>;

/**
 * Helper function to validate enquiry data with Zod
 */
export function validateEnquiryData(data: unknown): {
  success: boolean;
  errors: Record<string, string>;
  data?: EnquirySchemaType;
} {
  const result = enquirySchema.safeParse(data);
  if (result.success) {
    return { success: true, errors: {}, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const path = issue.path[0];
    if (path && typeof path === 'string' && !errors[path]) {
      errors[path] = issue.message;
    }
  }

  return { success: false, errors };
}

/**
 * Helper function to validate single enquiry field
 */
export function validateEnquiryField(field: keyof EnquirySchemaType, value: unknown): string | null {
  const fieldSchema = enquirySchema.shape[field];
  if (!fieldSchema) return null;
  const result = fieldSchema.safeParse(value);
  if (result.success) return null;
  return result.error.issues[0]?.message || 'Invalid value';
}

/**
 * Helper function to validate application data with Zod
 */
export function validateApplicationData(data: unknown): {
  success: boolean;
  errors: Record<string, string>;
  data?: ApplicationSchemaType;
} {
  const result = applicationSchema.safeParse(data);
  if (result.success) {
    return { success: true, errors: {}, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const path = issue.path[0];
    if (path && typeof path === 'string' && !errors[path]) {
      errors[path] = issue.message;
    }
  }

  return { success: false, errors };
}

/**
 * Helper function to validate single application field
 */
export function validateApplicationField(field: keyof ApplicationSchemaType, value: unknown): string | null {
  const fieldSchema = applicationSchema.shape[field];
  if (!fieldSchema) return null;
  const result = fieldSchema.safeParse(value);
  if (result.success) return null;
  return result.error.issues[0]?.message || 'Invalid value';
}
