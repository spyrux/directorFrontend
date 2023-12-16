import logo from '/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return (
    <footer className="wrapper">
      <hr className="w-full max-w-screen-xl my-4 md:my-8 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className="w-full max-w-screen-xl mx-auto font-nhgdp">
        <div className="sm:flex  sm:justify-between py-4 md:p-0">
          <span className="text-l font-semibold whitespace-nowrap dark:text-white">
            <div className="flex items-center">
              <img
                src={logo}
                className="w-6 h-6 mr-1 ml-1 mb-1"
                alt="Vite logo"
              />
              <p>DIRECT&apos;R</p>
            </div>
            <p className="text-sm font-normal flex ml-1.5">All about film.</p>
            <div className="md:pt-24 text-sm font-normal flex ml-1 ">
              © 2023&nbsp;Direct&apos;r. All Rights Reserved.
            </div>
          </span>
          <ul className="hidden md:flex items-start text-sm font-semibold text-black mb-10 dark:text-gray-400">
            <ul className="ml-auto md:ml-0 md:pr-16">
              <p className=" md:mr-6 ">❋ Socials</p>

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
              <div className="hidden md:block">
                <h1 className="flex">❋ Newsletter</h1>
                <p className="pl-2 font-normal">
                  {' '}
                  Stay up to date on our latest news and updates.
                </p>
                <span className="mt-12 flex">
                  <Input
                    className=" border-none rounded-none font-light focus-visible:ring-0 w-4/6 bg-inherit"
                    placeholder="Enter your email"
                  />
                  <Button className="font-normal w-2/6" variant={'ghost'}>
                    {' '}
                    SUBSCRIBE{' '}
                  </Button>
                </span>
                <hr className=" border-gray-200  sm:mx-auto dark:border-gray-700 " />
                <p className="text-right mt-6 font-normal text-xs">
                  {' '}
                  Have Feedback?
                  <a className="ml-1 underline text-gray-400">Contact Us</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
