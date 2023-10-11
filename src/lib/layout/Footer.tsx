import logo from '/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return (
    <footer className="wrapper">
      {/* <div className="flex">
        <p className="text-xs">
          © {new Date().getFullYear()} Direct&apos;r. All rights reserved.
        </p>
      </div> */}
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4 ">
        <div className="sm:flex  sm:justify-between">
          <span className="text-l font-semibold whitespace-nowrap dark:text-white">
            <div className="flex items-center">
              <img src={logo} className="w-6 h-6 mr-1" alt="Vite logo" />
              <p>DIRECT&apos;R</p>
            </div>
            <p className="text-sm font-normal flex ml-0.5">All about film.</p>
            <div className="pt-24 text-sm font-normal flex ">
              © 2023&nbsp;Direct&apos;r. All Rights Reserved.
            </div>
          </span>
          <ul className="flex items-start mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
            <ul className="pr-16">
              <p className="mr-4  md:mr-6 ">❋ Socials</p>

              <li className="li-footer">
                <a
                  href="https://flowbite.com/"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Instagram
                </a>
              </li>
              <li className="li-footer">
                <a
                  href="https://flowbite.com/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Linkedin
                </a>
              </li>
              <br></br>
              <li className="li-footer">
                <a
                  href="https://flowbite.com/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  About
                </a>
              </li>
              <li className="li-footer">
                <a
                  href="https://flowbite.com/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Business
                </a>
              </li>
              <li className="li-footer">
                <a
                  href="https://flowbite.com/"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Blog
                </a>
              </li>
            </ul>
            <li>
              <div>
                <h1 className="flex">❋ Newsletter</h1>
                <p className="pl-4 font-normal">
                  {' '}
                  Stay up to date on our latest news and updates.
                </p>
                <span className="mt-16 flex">
                  <Input
                    className=" border-none rounded-none font-light focus-visible:ring-0 w-4/6"
                    placeholder="Enter your email"
                  />
                  <Button className="font-normal w-2/6" variant={'ghost'}>
                    {' '}
                    SUBSCRIBE{' '}
                  </Button>
                </span>
                <hr className=" border-gray-200  sm:mx-auto dark:border-gray-700 " />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
