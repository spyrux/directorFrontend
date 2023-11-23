import { Carousel } from 'react-responsive-carousel';
import JobCard from '../../jobs/components/JobCard';
import { ReactNode } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
const ProfileJobComponent = () => {
  return (
    <div className="w-[920px]">
      <div className="w-[900px] h-[520px]  overflow-x-scroll">
        <div className="flex space-x-4 my-6 p-4">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileJobComponent;
