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
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
    confirm: z.string().min(2).max(50),
    name: z.string().min(1),
    role: z.string().min(1),
    email: z.string().min(1),
    country: z.string(),
    region: z.string(),
    occupation: z.string().min(1),
    files: z.any(),
  })
  .partial()
  .superRefine(({ password }, checkPassComplexity) => {
    if (!password) {
      checkPassComplexity.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Password is required.', // Or your appropriate error message
      });
      return;
    }
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsLowercase = (ch: string) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch: string) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;

    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }

    let errObj = {
      upperCase: {
        pass: true,
        message: 'Requires at least one upper case letter',
      },
      lowerCase: {
        pass: true,
        message: 'Requires at least one lower case letter',
      },
      specialCh: {
        pass: true,
        message:
          'Requires at least one special character  ~`! @#$%^&*()-_+={}[]|;:"<>,./? ',
      },
      totalNumber: {
        pass: true,
        message: 'Requires at least one number 0-9',
      },
    };

    if (countOfLowerCase < 1) {
      errObj = { ...errObj, lowerCase: { ...errObj.lowerCase, pass: false } };
    }
    if (countOfNumbers < 1) {
      errObj = {
        ...errObj,
        totalNumber: { ...errObj.totalNumber, pass: false },
      };
    }
    if (countOfUpperCase < 1) {
      errObj = { ...errObj, upperCase: { ...errObj.upperCase, pass: false } };
    }
    if (countOfSpecialChar < 1) {
      errObj = { ...errObj, specialCh: { ...errObj.specialCh, pass: false } };
    }
    type ErrorMessages = {
      [key: string]: string;
    };

    const filteredErrors: string = Object.entries(errObj)
      .filter(([, { pass }]) => !pass)
      .map(([, { message }]) => message)
      .join(', '); // Use a delimiter of your choice, like ', ' for example

    if (
      countOfLowerCase < 1 ||
      countOfUpperCase < 1 ||
      countOfSpecialChar < 1 ||
      countOfNumbers < 1
    ) {
      checkPassComplexity.addIssue({
        code: 'custom',
        path: ['password'],
        message:
          'Password needs to meet the following requirements:  ' +
          filteredErrors,
      });
    }
  })
  .refine(
    (values) => {
      return values.password === values.confirm;
    },
    {
      message: 'Passwords must match!',
      path: ['confirm'],
    }
  );

export function Signup() {
  const [avatar, setAvatar] = useState<File>();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState<string>();

  const handleResetDialog = () => {
    setAvatar(undefined);
    setCountry('');
    setRegion('');
    setPreviewAvatar('');
    form.reset(); // Reset the form values
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const uploadedAvatar = selectedFiles[0];
      const url = URL.createObjectURL(uploadedAvatar);

      setAvatar(selectedFiles[0]);
      setPreviewAvatar(url);
    }
  };
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirm: '',
      name: '',
      role: '',
      email: '',
      region: '',
      country: '',
      occupation: '',
      files: undefined,
    },
  });
  const fileRef = form.register('files', { required: true });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.files);
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <Dialog onOpenChange={handleResetDialog}>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp m-1 bg-blue-800 rounded-full px-5">
          Sign up
        </Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="sm:max-w-xl max-h-[500px] grid-cols-1 overflow-y-auto overflow-x-hidden  font-nhgdp text-base">
          <DialogHeader>
            <DialogTitle>Sign up for Direct’r</DialogTitle>
            <br></br>
            <DialogDescription>
              Get ready to embark on your journey in the film industry...{' '}
              <strong className=" text-black">We are excited for you!</strong>
            </DialogDescription>
          </DialogHeader>
          <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Login</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="filmgeek"
                        {...field}
                        className="bg-gray-100"
                      />
                    </FormControl>
                    <FormMessage />
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
                        placeholder="Shhh.. Don’t worry, we won’t tell!"
                        type="password"
                        className="bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Type in Your Password Again"
                        className="bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        className="bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br></br>
              <DialogHeader>
                <DialogTitle className="mt-12">
                  Tell us more about you...
                </DialogTitle>
                <br></br>
                <DialogDescription>
                  This will appear on your profile.
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
              <FormField
                control={form.control}
                name="files"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex pb-2 mt-4 mb-3">
                        <Label
                          htmlFor="fileInput"
                          className="inline-block overflow-hidden cursor-pointer"
                        >
                          <Avatar className="h-16 w-16 hover:opacity-70">
                            <AvatarImage src={previewAvatar} />
                            <AvatarFallback>
                              {' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 9L12 4M12 4L17 9M12 4V16"
                                  stroke="#909090"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </AvatarFallback>
                          </Avatar>
                        </Label>
                        <FormLabel className="text-gray-400 ml-4 mt-6 underline">
                          Upload a Profile Picture
                        </FormLabel>

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
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@PulpFictionGhostWriter"
                        {...field}
                        className="bg-gray-100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occupation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Animator, producer, makeup artist, etc..."
                        {...field}
                        className="bg-gray-100"
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
                      <FormControl className="max-w-[300px] rounded-sm border">
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
                      <FormControl className="w-[200px]  rounded-sm border">
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
              <DialogFooter className="mt-8">
                <Button
                  className="font-normal mx-1 mt-5 bg-blue-800 rounded-full px-5"
                  type="submit"
                >
                  Sign up
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
