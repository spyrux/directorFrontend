import { Button } from '@/components/ui/button';
import {
  Dialog,
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

export function Signup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal m-1 bg-blue-800 rounded-full px-5">
          Sign up
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-96 grid-cols-1 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <DialogHeader>
            <DialogTitle>Sign up for Direct’r</DialogTitle>
            <br></br>
            <DialogDescription>
              Get ready to embark on your journey in the film industry...{' '}
              <br></br>
              <strong>We are excited for you!</strong>
            </DialogDescription>
          </DialogHeader>
          <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="profilephoto" className="text-right">
                Upload a profile photo
              </Label>
              <Input
                id="profilephoto"
                value="@peduarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" value="@peduarte" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Display Name
              </Label>
              <Input id="email" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="occupation" className="text-right">
                Occupation
              </Label>
              <Input id="occupation" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input id="location" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button className="font-normal m-1 bg-blue-800 rounded-full px-5">
              Sign up
            </Button>
          </DialogFooter>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
