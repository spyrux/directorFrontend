import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useState } from 'react';

interface ProfilePostCardProps {
  key: number;
  image: string;
}

function ProfilePostCard(props: ProfilePostCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogTrigger />

        <img
          className="rounded-lg overflow-hidden max-h-[200px]"
          key={props.key}
          src={props.image}
          style={{
            display: 'overflow-hidden',
            cursor: 'pointer',
            width: '300px',
            height: 'auto',
          }}
          onClick={openDialog}
        />

        {/* async get post details and media */}

        <DialogContent className=" max-h-[700px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Show profile with icon</DialogTitle>
          </DialogHeader>

          <DialogDescription className="flex items-center justify-center ">
            <div>
              <Carousel
                thumbWidth={100}
                showStatus={false}
                dynamicHeight={true}
                width={400}
              >
                <div>
                  <img
                    className="rounded-lg image-container-image"
                    src="https://picsum.photos/300/200?image=1"
                  />
                  <p></p>
                </div>
                <div>
                  <img
                    className="rounded-lg image-container-image"
                    src="https://picsum.photos/300/300?image=0"
                  />
                  <p></p>
                </div>
              </Carousel>
            </div>
          </DialogDescription>

          <DialogHeader>
            <DialogTitle>Post title</DialogTitle>
            <DialogDescription>Role</DialogDescription>
            <DialogDescription> Post date</DialogDescription>
          </DialogHeader>
          <DialogDescription>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas, felis nec feugiat lacinia, nisl leo luctus erat, vel semper
            nunc tortor eu quam. felis nec feugiat lacinia, nisl leo luctus
            erat, vel semper nunc tortor eu quam. felis nec feugiat lacinia,
            nisl leo luctus erat, vel semper nunc tortor eu quam.
          </DialogDescription>
        </DialogContent>
      </Dialog>
      {/* replace p with clickable link to profile */}
      <div className="">
        <div className="flex justify-between items-baseline">
          <p className=" my-2 align-baseline text-s"> Title</p>
          <p className="my-2 text-gray-400 text-xs align-baseline justify-end underline">
            Edit
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePostCard;
