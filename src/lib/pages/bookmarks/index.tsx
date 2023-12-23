import JobCard from '../jobBoard/components/JobCard';
import { useState } from 'react';
import jobCardPropsArray from '../jobsPage/test/TestJobData';
import { JobViewProps } from '@/lib/types/JobViewProps';
import { ProjectCardProps } from '@/lib/types/ProjectCardProps';
import projectCardPropsArray from '../jobsPage/test/TestProjectData';
import BookmarksProjectCard from './components/BookmarksProjectCard';

function Bookmarks() {
  const [jobsArray, setJobsArray] = useState<JobViewProps[]>();
  const [projectsArray, setProjectsArray] = useState<ProjectCardProps[]>();

  return (
    <div className="font-nhgdp">
      <div className="flex ml-[17.5%] flex-col text-left">
        <h1 className=" text-lg ">Bookmarks</h1>
        <div className="flex">
          <p className=" text-sm mt-2">Here you can view your saved items.</p>

          <div className="ml-[150px]"></div>
        </div>

        <hr className="w-[80%]  my-4 md:my-8 border-gray-200   dark:border-gray-700 " />
        <div className="flex-col">
          <h1>Showcase</h1>
          <div className="w-[80%] h-[360px] overflow-hidden px-2 ">
            <div className="flex gap-6 items-start max-w-max overflow-x-auto pb-4 pt-6">
              {projectsArray ? (
                projectsArray.map((projectProps, index) => (
                  <div key={index} className="flex-none">
                    <BookmarksProjectCard {...projectProps} />
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex">
                  <div className="py-4">No jobs available</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <h1>Jobs</h1>
          <div className="w-[80%] h-[520px]  overflow-x-scroll">
            <div className="flex space-x-4 my-6 p-4">
              {jobsArray ? (
                jobsArray.map((jobProps, index) => (
                  <div>
                    <JobCard {...jobProps} />
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex">
                  <div className="justify-center align-middle">
                    No jobs available
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
