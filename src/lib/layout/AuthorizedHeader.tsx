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
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md font-nhgdp mb-6">
      <section className="wrapper mx-auto flex items-center justify-between w-8/12">
        <Link className="flex" to={'/home'}>
          <img
            src={logo}
            className="logo h-12 py-1 md:h-12 my-4"
            alt="Director Logo"
          />
        </Link>
        {/* replace a with react router */}
        <div className="ml-auto  ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/home" className="">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal  ">Home</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/jobBoard">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal">Jobs</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/profile">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal">Profile</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal">Sign Out</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </header>
  );
};

export default Header;
