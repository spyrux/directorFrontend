import { JobViewProps } from '@/lib/types/JobViewProps';
import { Carousel } from 'react-responsive-carousel';
import leftArrow from '/Vector.svg';
import rightArrow from '/Vector2.svg';
import { CSSProperties } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function JobsPageView(props: JobViewProps) {
  const isVideo = (url: string | undefined) => {
    const videoExtensions = ['mp4', 'webm', 'ogg']; // Add other video extensions if needed

    if (url) {
      const extension = url.split('.').pop()?.toLowerCase();
      return extension ? videoExtensions.includes(extension) : false; // Check if extension is not undefined
    }

    return false;
  };

  return (
    <div className="job-card  w-8/12 text-left  max-h-[820px] overflow-y-scroll justify-center  mt-4 pr-6">
      <div className="w-auto h-auto overflow-hidden flex justify-center items-center ">
        <Carousel
          thumbWidth={100}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
          className="mb-8"
        >
          {props.files.map((file, index) => (
            <div key={index} className=" ">
              {isVideo(file) ? (
                <div className="placeholder-image">
                  {/* Render your placeholder image */}
                  <iframe
                    className="w-full h-full"
                    src={file}
                    title="Embedded File"
                    style={{ aspectRatio: '16 / 9' }}
                  />
                </div>
              ) : (
                <div className="placeholder-image">
                  <img
                    src={file}
                    className=" overflow-hidden object-contain "
                    alt="Job"
                  />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h2 className=" text-lg font-bold">{props.role}</h2>
        <div className="text-sm">
          <div className=" grid-cols-1">
            <div className="flex">
              <p className=" text-gray-400"> By: &nbsp;</p>{' '}
              <p>{props.poster}</p>
            </div>
            <br></br>
            <div className="flex">
              <p className=" text-gray-400">Location: &nbsp; </p>{' '}
              <p>
                {props.region}, {props.country}{' '}
              </p>
            </div>
            <div className="flex">
              <p className=" text-gray-400">Contact: &nbsp; </p>{' '}
              <p>{props.contact} </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <p>
            <div>
              <h2>
                <strong>About:</strong>
              </h2>
              <p>{props.about}</p>

              <h2>
                <strong>Job Description:</strong>
              </h2>
              <p>{props.description}</p>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              {props.responsibilities}

              <p>
                <strong>Qualifications:</strong>
              </p>
              {props.qualifications}

              <p>
                <strong>What We Offer:</strong>
              </p>
              {props.perks}

              <p></p>

              <h2>
                <strong>How to Apply:</strong>
              </h2>
              <p>{props.application}</p>
            </div>
          </p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default JobsPageView;
