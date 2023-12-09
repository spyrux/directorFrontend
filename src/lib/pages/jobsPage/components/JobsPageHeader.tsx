import { Button } from '@/components/ui/button';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { JobViewProps } from '@/lib/types/JobViewProps';
import placeholder from '../../../../../public/placeholder.png';

function JobsPageHeader(props: JobViewProps) {
  const isVideo = (url: string | undefined) => {
    const videoExtensions = ['mp4', 'webm', 'ogg']; // Add other video extensions if needed

    if (url) {
      const extension = url.split('.').pop()?.toLowerCase();
      return extension ? videoExtensions.includes(extension) : false; // Check if extension is not undefined
    }

    return false;
  };

  return (
    <div className="">
      <div className="w-[300px] h-[80px] flex">
        <div className="w-[200px]  h-[60px]">
          {isVideo(props.files[0]) ? (
            <div className="placeholder-image">
              {/* Render your placeholder image */}
              <img
                src={placeholder} // Replace with your placeholder image URL
                className="rounded-lg overflow-hidden object-scale-down bg-white border w-[100%] h-[60px]"
                alt="Placeholder"
              />
            </div>
          ) : (
            <img
              src={props.files[0]}
              className="rounded-lg overflow-hidden object-cover w-[100%] h-[60px]"
              alt="Job"
            />
          )}
        </div>
        <div className="ml-4 mt-1.5 justify-start text-left">
          <h1 className="font-bold"> {props.role}</h1>
          <h1 className=" text-sm">{props.poster}</h1>
        </div>
      </div>
    </div>
  );
}

export default JobsPageHeader;
