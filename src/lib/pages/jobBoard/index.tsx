import { PostJobDialog } from './components/PostJobDialog';
import FeaturedJobsCard from './components/FeaturedJobsCard';
import JobsCarousel from './components/JobsCarousel';

function Jobs() {
  return (
    <div className="font-nhgdp">
      <div className="flex ml-[17.5%] flex-col text-left">
        <h1 className=" text-lg ">Job Board</h1>
        <div className="flex">
          <p className=" text-sm mt-2">
            <strong> Don't be afraid to reach out!</strong> This page is meant
            for you to find open opportunities, allowing you to network and
            build your career.
          </p>

          <div className="ml-[28%]">
            <PostJobDialog />
          </div>
        </div>
        <br></br>
        <div className="mb-6">
          <h1 className=" text-md mb-4">Featured Role</h1>
          {/* fetch featured job and load info */}
          <FeaturedJobsCard
            key={1}
            role="Co-Producer"
            image="public\JobBoardTest.png"
            poster="Kelly Ling"
            contact="example@gmail.com"
            location="Seoul, Korea"
            description="Looking for an easy going and fun partner to co-produce an upcoming project. If you're curious to learn more, please don't hesitate to reach out!"
          ></FeaturedJobsCard>
        </div>

        <div className="flex items-baseline w-[78%]">
          <h1 className=" text-md my-4 align-baseline">Open Roles</h1>
          <a className=" text-md my-4 ml-auto text-gray-400 hover:underline hover:cursor-pointer text-sm align-baseline">
            View All
          </a>
        </div>
      </div>
      <br></br>
      <div className="flex justify-center mb-12">
        <div className="w-[65%]">
          {/* fetch top x jobs to infinite scroll */}
          <JobsCarousel />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
