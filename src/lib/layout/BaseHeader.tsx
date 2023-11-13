import logo from '/logo.svg';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md font-nhgdp">
      <section className="wrapper mx-auto flex items-center justify-between w-8/12">
        <Link className="flex" to={'/'}>
          <img
            src={logo}
            className="logo h-12 py-1 md:h-12 my-4"
            alt="Director Logo"
          />
          <h1 className=" hidden md:block text-xl md:text-3xl my-10 md:my-7">
            DIRECT
          </h1>
          <div className=" w-[2px] h-[2px] bg-red-600 md: my-[35px] ml-[1px]"></div>
          <h1 className=" hidden md:block text-xl md:text-3xl my-10 md:my-7">
            R
          </h1>
        </Link>
        {/* replace a with react router */}
        <div className="ml-auto  ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/about" className="">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal  ">About</p>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/#features">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal">Features</p>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/roadmap">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal">Roadmap</p>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/team">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    <p className=" font-normal">Team</p>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </header>
  );
};

export default Header;
