import { Button } from '@/components/ui/button';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

// remove placeholder values with just posting uuid to grab info when fetching
interface JobCardProps {
  key: number;
  role: string;
  image: string;
  poster: string;
  location: string;
  contact: string;
  description: string;
}

function FeaturedJobsCard(props: JobCardProps) {
  return (
    <div className="job-card w-full">
      <h2 className=" text-lg font-bold">{props.role}</h2>
      <div className="text-sm mb-4">
        <p>{props.description}</p>
      </div>

      <div className="w-[78%] h-72 overflow-hidden  relative">
        <img
          src={props.image}
          className="overflow-hidden z-0 w-full object-fill"
          alt="Job"
        />
        <div className="absolute bottom-4 left-4 z-10 ">
          <Button className="rounded-full bg-inherit outline-black outline outline-1 mt-3 ml-1 bg-white text-sm text-black hover:bg-gray-300 ">
            Learn More
          </Button>
          <Button className="rounded-full mt-3 mx-1 text-sm">
            Apply Now 🡭
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobsCard;
