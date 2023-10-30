import { Button } from '@/components/ui/button';
import { Signup } from './Signup';

const Introduction = () => {
  return (
    <div className="items-center flex flex-col">
      <p className="uppercase text-3xl text-left w-3/5 ">
        Introducing <strong>Direct'r</strong>, a path to creating your own
        spotlight in the film industry. A platform driven by storytelling,
        filmmakers, and professionals in the film industry, we provide a place
        for you to grow. This platform is a place for anyone who finds
        themselves belonging to any role in the film industry. As a platform
        that facilitates seamless networking, collaboration opportunities, and a
        place to express who you are, Direct’r is the ultimate place to equip
        you with the tools to grow in this space.
      </p>
      <div className="flex justify-end space-x-5 mt-6 w-3/5">
        <Signup />
        <Button className="font-normal m-1 bg-white rounded-full px-6 border text-black border-black">
          {' '}
          Login{' '}
        </Button>
      </div>
    </div>
  );
};

export default Introduction;