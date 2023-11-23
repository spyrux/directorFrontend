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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileJobDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp bg-blue-800 rounded-full">
          Post Job
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-[500px] grid-cols-1 overflow-auto  font-nhgdp text-base">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
          </DialogHeader>
          <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <div className="grid gap-4 py-2">
            <div className=" grid-cols-4 items-center gap-4">
              <Label
                htmlFor="username"
                className="text-right font-nhgdp font-medium text-base"
              >
                Username
              </Label>
              <Input
                id="username"
                placeholder="Pedro Duarte"
                className="col-span-3 bg-gray-100 text-gray-400"
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="password"
                className="text-right font-medium  text-base"
              >
                Password
              </Label>
              <Input
                id="password"
                className="col-span-3 bg-gray-100 placeholder-gray-400"
                placeholder="Shhh.. Don’t worry, we won’t tell!"
                type="password"
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="confirmpassword"
                className="text-right font-medium  text-base"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmpassword"
                className="col-span-3 bg-gray-100  placeholder-black placeholder-opacity-60"
                placeholder="Type in your password again"
                type="password"
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="email"
                className="text-right font-medium  text-base"
              >
                Email
              </Label>
              <Input
                id="email"
                placeholder="Your email"
                className="col-span-3 bg-gray-100 text-gray-400"
              />
            </div>
            <br></br>
            <DialogHeader>
              <DialogTitle>Tell us more about you...</DialogTitle>

              <DialogDescription>
                This will appear on your profile.
              </DialogDescription>
            </DialogHeader>
            <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="profilephoto"
                className="text-right font-medium  text-base"
              >
                Upload a profile photo
              </Label>
              <Input id="profilephoto" type="file" className="w-3/6" />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="displayname"
                className="text-right font-medium  text-base"
              >
                Display Name
              </Label>
              <Input
                id="displayname"
                placeholder="@PulpFictionGhostWriter"
                className="col-span-3 bg-gray-100 text-gray-400"
              />
            </div>

            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="occupation"
                className="text-right font-medium  text-base"
              >
                Occupation
              </Label>
              <Input
                id="occupation"
                placeholder="Animator, producer, makeup artist, etc..."
                className="col-span-3 bg-gray-100 text-gray-400"
              />
            </div>
            <div className="grid-cols-4 items-center gap-4">
              <Label
                htmlFor="location"
                className="text-right font-medium  text-base"
              >
                Location
              </Label>
              <Input
                id="location"
                placeholder="Where are you based?"
                className="col-span-3 bg-gray-100 text-gray-400"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose>
              <Button className="font-normal m-1 border border-blue-800 bg-white text-blue-800 rounded-full px-5 hover:text-white">
                Back
              </Button>
            </DialogClose>
            <Button className="font-normal m-1 bg-blue-800 rounded-full px-5">
              Sign up
            </Button>
          </DialogFooter>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
