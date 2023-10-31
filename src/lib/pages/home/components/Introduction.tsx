import { Signup } from './Signup';
import { Login } from './Login';
const Introduction = () => {
  return (
    <div className="items-center flex flex-col">
      <p className="uppercase text-xl  md:text-3xl text-left w-3/5 font-nhgdp">
        Introducing <strong>Direct'r</strong>, a path to creating your own
        spotlight in the film industry. A platform driven by storytelling,
        filmmakers, and professionals in the film industry, we provide a place
        for you to grow. This platform is a place for anyone who finds
        themselves belonging to any role in the film industry. As a platform
        that facilitates seamless networking, collaboration opportunities, and a
        place to express who you are, Direct’r is the ultimate place to equip
        you with the tools to grow in this space.
      </p>
      <div className="flex justify-center md:justify-end space-x-5 mt-6 w-3/5">
        <Login />
        <Signup />
      </div>
    </div>
  );
};

export default Introduction;
