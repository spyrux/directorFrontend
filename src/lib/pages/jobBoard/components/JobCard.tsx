import { Button } from '@/components/ui/button';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import placeholder from '../../../../../public/placeholder.png';
import { JobViewProps } from '@/lib/types/JobViewProps';

function JobCard(props: JobViewProps) {
  const isVideo = (url: string | undefined) => {
    const videoExtensions = ['mp4', 'webm', 'ogg']; // Add other video extensions if needed

    if (url) {
      const extension = url.split('.').pop()?.toLowerCase();
      return extension ? videoExtensions.includes(extension) : false; // Check if extension is not undefined
    }

    return false;
  };
  return (
    <div className="job-card w-[260px] text-left">
      <h2 className=" text-lg font-bold">{props.role}</h2>
      <div className="text-sm">
        <p> {props.poster}</p>
        <br></br>
        <div className="flex">
          <p className=" text-gray-400 ">Location: &nbsp; </p>{' '}
          <p>
            {props.region}, {props.country}{' '}
          </p>
        </div>
        <div className="flex">
          <p className=" text-gray-400 ">Contact: &nbsp; </p>{' '}
          <p>{props.contact} </p>
        </div>
        <br></br>
        <br></br>
        <p>{props.introduction}</p>
      </div>
      <br></br>
      <div className="w-full h-28 overflow-hidden rounded-lg">
        {isVideo(props.files[0]) ? (
          <div className="placeholder-image">
            {/* Render your placeholder image */}
            <img
              src={placeholder} // Replace with your placeholder image URL
              className="overflow-hidden object-scale-down bg-white border "
              alt="Placeholder"
            />
          </div>
        ) : (
          <img src={props.files[0]} className="overflow-hidden" alt="Job" />
        )}
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
