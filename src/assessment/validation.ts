import { COMPANY_SIZES, INDUSTRIES, type CompanyDetails } from "./data";

export type DetailsErrors = Partial<Record<keyof CompanyDetails, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateDetails(d: CompanyDetails): DetailsErrors {
  const errors: DetailsErrors = {};
  if (!d.companyName.trim()) errors.companyName = "Please enter your company name.";
  if (!(COMPANY_SIZES as readonly string[]).includes(d.companySize)) errors.companySize = "Please choose a company size.";
  if (!(INDUSTRIES as readonly string[]).includes(d.industry)) errors.industry = "Please choose an industry.";
  if (!d.name.trim()) errors.name = "Please enter your name.";
  if (!d.role.trim()) errors.role = "Please enter your role.";
  if (!d.email.trim()) errors.email = "Please enter your work email.";
  else if (!EMAIL_PATTERN.test(d.email.trim())) errors.email = "Please enter a valid email, like you@company.com.";
  if (!d.storageConsent) errors.storageConsent = "We need your consent to store your responses to continue.";
  return errors;
}
