import Gallery from './components/Gallery';
import { PostProjectDialog } from './components/PostProjectDialog';

function Posts() {
  return (
    <div className="font-nhgdp">
      <div className="flex ml-[17.5%] flex-col text-left">
        <h1 className=" text-lg ">Showcase</h1>
        <div className="flex">
          <p className=" text-sm mt-2">
            <strong>Show us who you are.</strong> This is Direct’r home page
            where you can showcase your work and express who you are while being
            able to explore the creativity and work of others.
          </p>

          <div className="ml-[150px]">
            <PostProjectDialog />
          </div>
        </div>
      </div>

      <hr className="w-full max-w-screen-xl my-4 md:my-8 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className="">
        <Gallery />
      </div>
    </div>
  );
}

export default Posts;
