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

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export function LoginFuture() {
  const [dialogState, setDialogState] = useState(false);
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
        <DialogDescription> </DialogDescription>

        <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="filmgeek"
                      {...field}
                      className="bg-gray-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="*******"
                      {...field}
                      className="bg-gray-100"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <a href="/resetpassword" className=" text-xs text-blue-800">
              Forgot your password?
            </a>

            <DialogFooter>
              <Button
                type="submit"
                className="font-normal m-1 bg-blue-800 rounded-full px-5"
              >
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
