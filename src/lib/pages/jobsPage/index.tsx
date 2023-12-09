import { JobCardProps } from '@/lib/types/JobCardProps';
import JobsPageHeader from './components/JobsPageHeader';
import { Link } from 'react-router-dom';
import { useEffect, useState, MouseEventHandler } from 'react';
import JobsPageView from './components/JobsPageView';
import { JobViewProps } from '@/lib/types/JobViewProps';
import { Button } from '@/components/ui/button';
import jobCardPropsArray from './test/TestJobData';
import ReactPaginate from 'react-paginate';

// need to load amount of pages

function JobsPage() {
  const [selectedJobKey, setSelectedJobKey] = useState(0);
  const [jobsArray, setJobsArray] = useState<JobViewProps[]>(jobCardPropsArray);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const handleJobHeaderClick = (index: number) => {
    setSelectedJobKey(index);
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const fetchItemsForPage = async (pageNumber: number) => {
    try {
      const response = await fetch(`/items?page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setJobsArray(data.items);
      setPageCount(data.pageCount);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchItemsForPage(currentPage);
  }, [currentPage]);
  //calculate which items to display

  return (
    <div className="font-nhgdp  ">
      <div className="flex">
        <div className=" ml-[17%] text-left">
          <Link to="/jobBoard" className=" text-xs hover:underline">
            {' '}
            🡨 &nbsp; BACK TO JOBS
          </Link>

          <div className="flex flex-col items-center">
            <br></br>
            {jobsArray.map((jobProps, index) => (
              <Button
                onClick={() => handleJobHeaderClick(index)}
                variant="ghost"
                className="w-[300px] my-4 mr-24"
              >
                <JobsPageHeader {...jobProps} />
              </Button>
            ))}
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={3}
              breakLabel="..."
              marginPagesDisplayed={1}
              nextLabel=">>"
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
              previousLabel="<<"
              className="flex gap-4 mr-24 justify-center"
            />
          </div>
        </div>
        <div className="ml-[6%]">
          <JobsPageView {...jobsArray[selectedJobKey]} />
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
