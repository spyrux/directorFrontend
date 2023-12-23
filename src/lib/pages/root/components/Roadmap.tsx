import roadmap from '../../../../../public/roadmap.png';

const Roadmap = () => {
  return (
    <div className="items flex flex-col mb-24">
      <div className="  text-left w-4/5 ml-auto  ">
        <h1 className="text-xl font-semibold capitalize my-12 ">Timeline</h1>
      </div>
      <img src={roadmap} className=" w-[60%] mx-auto "></img>
    </div>
  );
};

export default Roadmap;
