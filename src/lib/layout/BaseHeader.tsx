import logo from '/baseheader.svg';
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
      <section className="wrapper mx-auto flex items-center justify-between">
        <Link className="flex" to={'/'}>
          <img src={logo} className="logo h-20 md:h-24" alt="Director Logo" />
          <h1 className=" hidden md:block font-bold text-2xl md:text-5xl my-10 md:my-7">
            DIRECT’R
          </h1>
        </Link>
        {/* replace a with react router */}
        <div className="ml-auto  ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal  ">About</p>
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/features">
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
