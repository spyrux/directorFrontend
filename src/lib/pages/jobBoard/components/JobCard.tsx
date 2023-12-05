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

function JobCard(props: JobCardProps) {
  return (
    <div className="job-card w-[250px] text-left">
      <h2 className=" text-lg font-bold">{props.role}</h2>
      <div className="text-sm">
        <p> {props.poster}</p>
        <br></br>
        <div className="flex">
          <p className=" text-gray-400">Location: &nbsp; </p>{' '}
          <p>{props.location} </p>
        </div>
        <div className="flex">
          <p className=" text-gray-400">Contact: &nbsp; </p>{' '}
          <p>{props.contact} </p>
        </div>
        <br></br>
        <br></br>
        <p>{props.description}</p>
      </div>
      <br></br>
      <div className="w-full h-28 overflow-hidden rounded-lg">
        <img src={props.image} className="overflow-hidden" alt="Job" />
      </div>
      <div className="flex justify-end">
        <Button className="rounded-full bg-inherit outline-black outline outline-1 mt-3 mb-0.5 mx-1 text-black hover:bg-gray-300">
          Learn More
        </Button>{' '}
        <Button className="rounded-full mt-3 ml-1 mb-0.5">Apply Now 🡭</Button>
      </div>
    </div>
  );
}

export default JobCard;
