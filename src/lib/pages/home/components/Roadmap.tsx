import roadmap from '../../../../../public/roadmap.png';

const Roadmap = () => {
  return (
    <div className="items flex flex-col">
      <p className=" text-xl text-left w-4/5 ml-auto my-4">Roadmap</p>
      <img src={roadmap} className=" w-[60%] mx-auto "></img>
    </div>
  );
};

export default Roadmap;
