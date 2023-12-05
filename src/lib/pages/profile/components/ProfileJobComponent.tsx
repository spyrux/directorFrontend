import { Carousel } from 'react-responsive-carousel';
import ProfileJobCard from './ProfileJobCard';
import { ReactNode } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
const ProfileJobComponent = () => {
  return (
    <div className="w-[920px]">
      <div className="w-[900px] h-[520px]  overflow-x-scroll">
        <div className="flex space-x-4 my-6 p-4">
          <div>
            <ProfileJobCard
              key={1}
              role="Co-Producer"
              image="https://picsum.photos/300/300?image=0"
              poster="Kelly Ling"
              contact="example@gmail.com"
              location="Seoul, Korea"
              description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
            ></ProfileJobCard>
          </div>
          <div>
            <ProfileJobCard
              key={1}
              role="Co-Producer"
              image="https://picsum.photos/300/300?image=0"
              poster="Kelly Ling"
              contact="example@gmail.com"
              location="Seoul, Korea"
              description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
            ></ProfileJobCard>
          </div>
          <div>
            <ProfileJobCard
              key={1}
              role="Co-Producer"
              image="https://picsum.photos/300/300?image=0"
              poster="Kelly Ling"
              contact="example@gmail.com"
              location="Seoul, Korea"
              description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
            ></ProfileJobCard>
          </div>
          <div>
            <ProfileJobCard
              key={1}
              role="Co-Producer"
              image="https://picsum.photos/300/300?image=0"
              poster="Kelly Ling"
              contact="example@gmail.com"
              location="Seoul, Korea"
              description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
            ></ProfileJobCard>
          </div>
          <div>
            <ProfileJobCard
              key={1}
              role="Co-Producer"
              image="https://picsum.photos/300/300?image=0"
              poster="Kelly Ling"
              contact="example@gmail.com"
              location="Seoul, Korea"
              description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
            ></ProfileJobCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileJobComponent;
