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
import GoogleLogin from './GoogleLogin';
import { useAuth } from '@/AuthProvider';

import axios from 'axios';

const formSchema = z.object({
  Handle: z.string().min(2).max(50),
  Role: z.string().min(1),
  Country: z.string(),
  Region: z.string(),
  IdToken: z.string(),
});

export function Signup() {
  const authContext = useAuth();

  if (!authContext) {
    // Handle when context is not available
    return <div>Loading...</div>;
  }

  const { user, setUser, removeUser } = authContext;

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const handleResetDialog = () => {
    setCountry('');
    setRegion('');
    form.reset(); // Reset the form values
  };

  const handleCountryChange = (e: string) => {
    const country = e;
    setCountry(country);
    form.setValue('Country', country);
  };
  const handleRegionChange = (e: string) => {
    const region = e;
    setRegion(region);
    form.setValue('Region', region);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Handle: '',

      Role: '',
      IdToken: '',
      Country: '',
      Region: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log();
    values = {
      ...values,
      IdToken: user?.sub || '',
    };

    console.log(JSON.stringify(values, null, 2));
    postUserDataGoogleSignon(JSON.stringify(values, null, 2));
  }

  function postUserDataGoogleSignon(userData: string) {
    axios({
      method: 'post',
      url: 'https://api.direct-r.com/api/identity/register/google',
      data: userData,
    }).then((response: any) => console.log(response));
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
            <DialogTitle className="mb-2">Sign up for Direct’r</DialogTitle>

            <DialogDescription>
              Get ready to embark on your journey in the film industry...{' '}
              <strong className=" text-black">We are excited for you!</strong>
            </DialogDescription>
          </DialogHeader>
          <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <div className="mx-auto">
            <GoogleLogin></GoogleLogin>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle className="my-2">
                  Tell us more about you...
                </DialogTitle>

                <DialogDescription className="">
                  This will appear on your profile.
                </DialogDescription>
              </DialogHeader>
              <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700 my-4" />

              <FormField
                control={form.control}
                name="Handle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="PulpFictionGhostWriter"
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
                name="Role"
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
                  name="Country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm border">
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
                  name="Region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl className="w-[200px]  rounded-sm border">
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
