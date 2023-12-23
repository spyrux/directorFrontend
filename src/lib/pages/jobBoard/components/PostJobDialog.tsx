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
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

// {
//   "title": "my title",
//   "details": {
//     "about": "my about section"
// about, responsibilities,
//   }
// }

const formSchema = z.object({
  Title: z.string().min(2).max(50),

  Summary: z.string(),
  Contact: z.string(),
  Project: z.string(),
  CountryCode: z.string(),
  CountryRegion: z.string(),

  JobDetails: z.object({
    Description: z.string(),
    Perks: z.string(),
    Type: z.string(),
    Qualifications: z.string(),
    Application: z.string(),
    Responsibilities: z.string(),
  }),

  files: z.any(),
});

export function PostJobDialog() {
  const [media, setMedia] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: '',

      Summary: '',
      Contact: '',
      Project: '',
      CountryCode: '',
      CountryRegion: '',

      JobDetails: {
        Description: '',
        Perks: '',
        Type: '',
        Qualifications: '',
        Application: '',
        Responsibilities: '',
      },
      files: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
  }

  const handleCountryChange = (e: string) => {
    const country = e;
    setCountry(country);
    form.setValue('CountryCode', country);
  };
  const handleRegionChange = (e: string) => {
    const region = e;
    setRegion(region);
    form.setValue('CountryRegion', region);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      const nameArray = fileArray.map((file) => file.name);
      setMedia([...media, ...fileArray]);
      setPreviewImages([...previewImages, ...nameArray]);
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
                name="Title"
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
              />{' '}
              <FormField
                control={form.control}
                name="Project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        required={true}
                        className="bg-gray-100"
                        placeholder="Project Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Contact"
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
                name="JobDetails.Type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Work</FormLabel>
                    <FormControl>
                      <Input
                        required={true}
                        className="bg-gray-100"
                        placeholder="Full-time, part-time, contract, etc..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex min-w-full">
                <FormField
                  control={form.control}
                  name="CountryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm  text-sm border">
                        <CountryDropdown
                          value={country}
                          valueType="short"
                          onChange={(e) => handleCountryChange(e)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="CountryRegion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl className="w-[200px]  rounded-sm border text-sm">
                        <RegionDropdown
                          value={region}
                          country={country}
                          countryValueType="short"
                          onChange={(val) => handleRegionChange(val)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="Summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide a short introduction..."
                        {...field}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{' '}
              <FormField
                control={form.control}
                name="JobDetails.Description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide some details about the job/company..."
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
                name="JobDetails.Responsibilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Responsibilities</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide some details about the job..."
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
                name="JobDetails.Qualifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualifications</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What are you looking for in a candidate?"
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
                name="JobDetails.Perks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Perks and Benefits</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What do you offer to the candidate?"
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
                name="JobDetails.Application"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Application</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How do you want the candidate to apply?"
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
                        <FormLabel>Attach Relevant Images </FormLabel>
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
                          accept="image/*"
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
                      {previewImages.map((preview, index) => (
                        <div className="flex m-2 relative" key={index}>
                          <p className="text-sm mr-1 w-full">{preview}</p>

                          <Button
                            className=" mt-0.5 max-w-[0.25px] max-h-[0.25px] px-2 mx-0.5 rounded-sm  text-xs  text-gray-600 border border-gray-400 bg-transparent hover:bg-gray-200"
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
