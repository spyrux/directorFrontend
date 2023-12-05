import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JobCard from './JobCard';
import React from 'react';
import leftArrow from '/Vector.svg';
import rightArrow from '/Vector2.svg';

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
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
      <div>
        <JobCard
          key={1}
          role="Co-Producer"
          image="https://picsum.photos/300/300?image=0"
          poster="Kelly Ling"
          contact="example@gmail.com"
          location="Seoul, Korea"
          description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
        ></JobCard>
      </div>
    </Carousel>
  );
}

export default JobsCarousel;
