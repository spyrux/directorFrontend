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

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between">
        <a className="flex" href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="Director Logo" />
          <h1 className=" font-bold text-5xl my-6">DIRECT’R</h1>
        </a>
        {/* replace a with react router */}
        <div className="ml-auto  ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" font-normal ">About</p>
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
