import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

// remove placeholder values with just posting uuid to grab info when fetching
interface ProfileCardProps {
  key: number;
  name: string;
  username: string;
  role: string;
  image: string;
  location: string;
  website: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  about: string;
}

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profile-card ml-3  max-w-xs text-left font-nhgdp">
      <div className="flex">
        <Avatar className="h-14 w-14 my-2">
          <AvatarImage src={props.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-col grid-cols-1 text-left ml-6">
          <h1 className="text-xl">{props.name}</h1>
          <h2 className="text-zinc-400 text-sm">@{props.username}</h2>
          <h1 className="text-sm">{props.role}</h1>
        </div>
      </div>
      <div className=" mt-5 w-9/12">
        <h1 className="font-semibold pb-2"> About</h1>
        <p className="text-sm">{props.about}</p>
      </div>

      <div className="mt-5 w-9/12">
        <h1 className="font-semibold pb-2"> Contact</h1>
        <table className="text-sm">
          <tr>
            <td className="text-zinc-400">Website</td>
            <td className="pl-10">{props.website}</td>
          </tr>
          <tr>
            <td className="text-zinc-400">Instagram</td>
            <td className="pl-10">{props.instagram}</td>
          </tr>
          <tr>
            <td className="text-zinc-400">Twitter</td>
            <td className="pl-10">{props.twitter}</td>
          </tr>
          <tr>
            <td className="text-zinc-400">Linkedin</td>
            <td className="pl-10">{props.linkedin}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ProfileCard;
