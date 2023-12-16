// remove placeholder values with just posting uuid to grab info when fetching
export interface JobViewProps {
  userId: string;
  jobId: string;
  role: string;
  files: string[];
  poster: string;
  region: string;
  country: string;
  contact: string;
  type: string;
  introduction: string;
  project: string;
  description: string;
  about: string;
  responsibilities: string;
  qualifications: string;
  application: string;
  perks: string;
}
