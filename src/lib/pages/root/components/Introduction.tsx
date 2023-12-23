import { Signup } from './Signup';
import { Login } from './Login';
const Introduction = () => {
  return (
    <div className="items-center flex flex-col h-[600px] align-middle justify-center my-auto mb-28">
      <p className="uppercase text-xl  md:text-5xl text-left font-nhgdp font-bold w-4/12 pl-12">
        THE PATH TO CREATING YOUR OWN SPOTLIGHT
      </p>
      <p className="uppercase text-l font-semibold w-3/12 text-left mr-32 my-4 pl-12">
        Personalized profiles. Dynamic Job Board. <br></br> global Community.
        simplify the world of filmmaking.{' '}
      </p>
      <div className="flex justify-center md:justify-end space-x-5 mt-6 w-2/5"></div>
    </div>
  );
};

export default Introduction;
