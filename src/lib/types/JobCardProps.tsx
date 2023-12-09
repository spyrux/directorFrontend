// remove placeholder values with just posting uuid to grab info when fetching
export interface JobCardProps {
  userId: string;
  role: string;
  images: string[];
  poster: string;
  city: string;
  country: string;
  contact: string;
  introduction: string;
}
