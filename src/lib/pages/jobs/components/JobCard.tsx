import { Button } from '@/components/ui/button';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

// replace placeholder values with posting uuid to grab info when fetching
interface JobCardProps {
  key: number;
  role: string;
  image: string;
  poster: string;
  location: string;
  contact: string;
  description: string;
}

function JobCard(props: JobCardProps) {
  return <div className=""></div>;
}

export default JobCard;
