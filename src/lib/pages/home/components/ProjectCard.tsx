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
import { ProjectCardProps } from './ProjectCardProps';

function ProjectCard(props: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-0 pt-0">
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogTrigger />

        <img
          className="rounded-lg "
          key={props.key}
          src={props.image}
          style={{
            display: 'block',
            overflow: 'hidden',
            cursor: 'pointer',
            objectFit: 'contain', // Maintain original aspect ratio

            width: '100%', // Ensure original aspect ratio
            height: 'auto', // Ensure original aspect ratio
          }}
          onClick={openDialog}
        />

        {/* async get post details and media */}

        <DialogContent className=" max-h-[700px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>
              <div className="flex">
                <Avatar className="h-12 w-12 my-1">
                  <AvatarImage src={props.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="my-auto flex items-baseline">
                  {' '}
                  <p className=" font-semibold  ml-2 mr-1 align-baseline text-base ">
                    {' '}
                    Jeff Bezos
                  </p>
                  <p className="  text-zinc-400 text-sm align-baseline font-normal">
                    @user
                  </p>
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="flex items-center justify-center ">
            <div>
              <Carousel
                thumbWidth={100}
                showStatus={false}
                dynamicHeight={true}
                width={450}
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
      <div className="flex pt-2.5">
        <Avatar className="h-10 w-10">
          <AvatarImage src={props.image}></AvatarImage>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex items-baseline">
          <p className=" font-semibold mt-2.5 ml-2 mr-1 align-baseline text-sm ">
            {' '}
            Jeff Bezos
          </p>
          <p className="mt-2.5 ml-2 text-zinc-400 text-xs align-baseline">
            @user
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
