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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

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
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema = z.object({
  name: z.string().min(2).max(50),
  date: z.date(),
  role: z.string(),
  description: z.string(),
  files: z.array(z.string()),
});

export function PostProjectDialog() {
  const [media, setMedia] = useState<File[]>([]);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      date: new Date(),
      role: '',
      description: '',
      files: [],
    },
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      const nameArray = fileArray.map((file) => file.name);
      setMedia([...media, ...fileArray]);
      setPreviewFiles([...previewFiles, ...nameArray]);
    }
  };
  const removeFile = (index: number) => {
    const updatedImages = [...media];
    const updatedPreviews = [...previewFiles];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setMedia(updatedImages);
    setPreviewFiles(updatedPreviews);
  };

  const fileRef = form.register('files', { required: true });
  // 2. Define a submit handler.

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.files = previewFiles;
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp bg-blue-800 rounded-full">
          Create Project
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-[800px] grid-cols-1 overflow-auto overflow-x-hidden font-nhgdp text-base">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project name*</FormLabel>
                    <FormControl>
                      <Input
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
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date*</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal bg-gray-100',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role*</FormLabel>
                    <FormControl>
                      <Input
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
                    <div className="flex  flex-col mt-8 flex-wrap">
                      {previewFiles.map((preview, index) => (
                        <div className="flex m-2 relative" key={index}>
                          <p className="text-sm mr-1 w-full">{preview}</p>

                          <Button
                            className=" mt-0.5 max-w-[0.25px] max-h-[0.25px] px-2 mx-0.5 rounded-sm  text-xs  text-gray-600 border border-gray-400 bg-transparent hover:bg-gray-200"
                            onClick={() => removeFile(index)}
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
