import Gallery from './components/Gallery';

function Posts() {
  return (
    <div className="font-nhgdp">
      <hr className="w-full max-w-screen-xl my-4 md:my-8 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className=" overflow-y-scroll">
        <Gallery />
      </div>
    </div>
  );
}

export default Posts;
