import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JobCard from './JobCard';
import React from 'react';
import leftArrow from '/Vector.svg';
import rightArrow from '/Vector2.svg';

const user = {
  userId: '1',
  role: 'SWE',
  jobId: '1',
  type: 'part-time',
  about: 'asdasdsa',
  project: 'asddasdsa',
  files: [
    'https://picsum.photos/500/300?image=1',
    'https://picsum.photos/500/300?image=3',
  ],
  poster: 'Kelly Ling',
  contact: 'example@gmail.com',
  region: 'Seoul',
  country: 'Korea',
  introduction:
    "Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!",
  description: 'asdasdasd',
  responsibilities:
    "Collaborate closely with the Director and Production Team to bring the project's vision to life. Oversee all aspects of film production, from pre-production planning to post-production editing. Manage the film's budget, ensuring efficient resource allocation. Coordinate casting, location scouting, and crew selection. Nurture relationships with local talent, agencies, and partners. Handle logistics, permits, and legal requirements for a seamless production process. Collaborate with international distributors and investors to secure funding and distribution opportunities. Maintain clear communication channels with all stakeholders.",
  qualifications:
    'Proven experience as a Co-Producer or similar role in the film industry. In-depth knowledge of South Korean film production processes and industry dynamics. Strong network and relationships within the South Korean film community. Excellent project management skills and a keen eye for detail. Proficiency in budgeting and financial management for film projects. Exceptional interpersonal and communication skills. A passion for storytelling and a dedication to cinematic excellence.',
  perks:
    'The opportunity to work on a culturally rich and artistically stimulating project. A collaborative and creative work environment. Competitive compensation and benefits. The chance to make a significant impact on the South Korean film industry.',
  application:
    'Interested candidates should submit their resume, a cover letter detailing their relevant experience and passion for filmmaking, and any relevant portfolio materials to kelly[at]ling.com.',
};

function JobsCarousel(this: any) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <Carousel
      centerMode
      responsive={responsive}
      infinite
      className="mx-auto"
      customLeftArrow={
        <button className="absolute top-1/2 left-6 max-w-4 cursor-pointer text-primary-400">
          <img src={leftArrow} className="h-10"></img>
        </button>
      }
      customRightArrow={
        <button className="absolute top-1/2  right-6 max-w-4 cursor-pointer text-primary-400">
          <img src={rightArrow} className="h-10"></img>
        </button>
      }
    >
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
      <div>
        <JobCard {...user}></JobCard>
      </div>
    </Carousel>
  );
}

export default JobsCarousel;
