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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import GoogleLogin from './GoogleLogin';

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export function Login() {
  const [dialogState, setDialogState] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleOpenDialog = () => {
    form.reset();
    // Reset the form values
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={handleOpenDialog}
          className="font-normal font-nhgdp m-1 bg-white border-blue-800 border text-blue-800 rounded-full px-5 hover:text-white"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-nhgdp text-base">
        <DialogHeader>
          <DialogTitle>Log In to Direct'r</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700" />
        <GoogleLogin />
      </DialogContent>
    </Dialog>
  );
}
