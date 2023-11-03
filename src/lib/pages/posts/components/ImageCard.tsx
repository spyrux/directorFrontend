import { Button } from '@/components/ui/button';
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
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface ImageCardProps {
  key: number;
  image: string;
}

function ImageCard(props: ImageCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogTrigger />
        <div className=" flex">
          <img
            className="rounded-lg"
            key={props.key}
            src={props.image}
            style={{
              display: 'block',
              cursor: 'pointer',
              width: '50%',
            }}
            onClick={openDialog}
          />
        </div>
        {/* async get post details and media */}

        <DialogContent className=" max-h-[900px]">
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
      <p className="">{props.image}</p>
    </div>
  );
}

export default ImageCard;
