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
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  title: z.string().min(2).max(50),
  contact: z.string(),
  description: z.string(),
  files: z.array(z.string()),
});

export function PostJobDialog() {
  const [media, setMedia] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      contact: '',
      description: '',
      files: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      const urlArray = fileArray.map((file) => URL.createObjectURL(file));
      setMedia([...media, ...fileArray]);
      setPreviewImages([...previewImages, ...urlArray]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...media];
    const updatedPreviews = [...previewImages];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setMedia(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  const fileRef = form.register('files', { required: true });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp bg-blue-800 rounded-full px-5">
          Post Job
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-[700px] grid-cols-1 overflow-y-auto overflow-x-hidden  font-nhgdp text-base">
          <DialogHeader>
            <DialogTitle>Post job</DialogTitle>
          </DialogHeader>
          <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <div className="grid gap-4 mt-1">
            <div className=" grid-cols-1 items-center gap-4">
              <div className="flex mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://picsum.photos/300/300?image=0" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=" ml-4">
                  <h1 className=" font-semibold">
                    {/* replace with profile details */}
                    Kelly Ling
                  </h1>
                  <h1 className=" text-sm text-gray-400">
                    {/* replace with profile details */}
                    Organization - Your Profile
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input
                        required={true}
                        className="bg-gray-100"
                        placeholder="Pulp fiction"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Information</FormLabel>
                    <FormControl>
                      <Input
                        required={true}
                        className="bg-gray-100"
                        placeholder="Animator, producer, makeup artist, etc..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide some details..."
                        {...field}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="files"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex pb-2">
                        <FormLabel>Attach images and videos</FormLabel>
                        <Label
                          htmlFor="fileInput"
                          className="inline-block overflow-hidden cursor-pointer ml-52"
                        >
                          <div>
                            <p className=" underline text-gray-400">
                              Upload Attachment
                            </p>
                          </div>
                        </Label>
                        <Input
                          accept="image/*, video/*"
                          type="file"
                          {...fileRef}
                          onChange={handleImageChange}
                          className=" sr-only"
                          id="fileInput"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                    <div className="flex mt-8 flex-wrap">
                      {previewImages.map((preview, index) => (
                        <div className="flex m-2 relative" key={index}>
                          <img
                            src={preview}
                            alt={`Preview ${index}`}
                            style={{ width: '150px', height: 'auto' }}
                          />
                          <Button
                            className=" absolute top-1 right-1 max-w-[0.25px] max-h-[0.25px] px-3 mx-0.5 rounded-full"
                            onClick={() => removeImage(index)}
                          >
                            X
                          </Button>
                        </div>
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              <Button
                className="font-normal flex bg-blue-800 rounded-full px-5  ml-auto"
                type="submit"
              >
                Post
              </Button>
            </form>
          </Form>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
