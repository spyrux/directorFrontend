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
import edit from '../../../../../public/icons8-edit-48.png';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema = z.object({
  title: z.string().min(2).max(50),
  contact: z.string(),
  description: z.string(),
  project: z.string(),
  type: z.string(),
  country: z.string(),
  region: z.string(),
  perks: z.string(),
  qualifications: z.string(),
  application: z.string(),
  responsibilities: z.string(),
  about: z.string(),
  files: z.array(z.string()),
});

export function EditJobDialog() {
  const [media, setMedia] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      contact: '',
      description: '',
      project: '',
      region: '',
      country: '',
      about: '',
      responsibilities: '',
      qualifications: '',
      perks: '',
      application: '',
      project: '',
      type: '',
      files: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
  }
  const handleCountryChange = (e: string) => {
    const country = e;
    setCountry(country);
    form.setValue('country', country);
  };
  const handleRegionChange = (e: string) => {
    const region = e;
    setRegion(region);
    form.setValue('region', region);
  };
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
  //   fetch individual post info then edit and update

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full mt-3 ml-1 mb-0.5 px-5  h-10 outline-black outline outline-1">
          Edit <img className="h-4 ml-2" src={edit}></img>
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-[700px] grid-cols-1 overflow-y-auto overflow-x-hidden  font-nhgdp text-base">
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
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
              />{' '}
              <FormField
                control={form.control}
                name="project"
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
                name="type"
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
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm  text-sm border">
                        <CountryDropdown
                          value={country}
                          onChange={(e) => handleCountryChange(e)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl className="w-[200px]  rounded-sm border text-sm">
                        <RegionDropdown
                          value={region}
                          country={country}
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
                name="about"
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
                name="description"
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
                name="responsibilities"
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
                name="qualifications"
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
                name="perks"
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
                name="application"
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
                Done
              </Button>
            </form>
          </Form>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
