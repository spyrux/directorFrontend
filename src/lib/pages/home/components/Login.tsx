import { useRef, useState, useEffect } from 'react';
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

export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp m-1 bg-white border-blue-800 border text-blue-800 rounded-full px-5 hover:text-white">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-nhgdp text-base">
        <DialogHeader>
          <DialogTitle>Log In to Direct'r</DialogTitle>
        </DialogHeader>
        <DialogDescription> </DialogDescription>

        <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className=" grid-cols-4 items-center gap-4">
          <Label
            htmlFor="username"
            className="text-right font-nhgdp font-medium text-base"
          >
            Username
          </Label>
          <Input
            id="username"
            value="Pedro Duarte"
            className="col-span-3 bg-gray-100 text-gray-400"
          />
        </div>
        <div className="grid-cols-4 items-center gap-4">
          <Label
            htmlFor="password"
            className="text-right font-nhgdp font-medium  text-base"
          >
            Password
          </Label>
          <Input
            id="password"
            className="col-span-3 bg-gray-100 text-gray-400"
            placeholder="Shhh.. Don’t worry, we won’t tell!"
            type="password"
          />
          <a href="/resetpassword" className=" text-xs text-blue-800">
            Forgot your password?
          </a>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button className="font-normal m-1 border border-blue-800 bg-white text-blue-800 rounded-full px-5 hover:text-white">
              Back
            </Button>
          </DialogClose>
          <Button className="font-normal m-1 bg-blue-800 rounded-full px-5">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
