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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostCardProps {
  key: number;
  image: string;
}

function PostCard(props: PostCardProps) {
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

        <img
          className="rounded-lg "
          key={props.key}
          src={props.image}
          style={{
            display: 'block',
            cursor: 'pointer',
            width: '100%',
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
      <div className="flex py-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={props.image}></AvatarImage>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex items-baseline">
          <p className=" font-semibold my-2 ml-2 mr-1 align-baseline text-sm ">
            {' '}
            Jeff Bezos
          </p>
          <p className="my-2 text-zinc-400 text-xs align-baseline">@user</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
