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

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between">
        <a href="https://vitejs.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
        <div className="ml-auto">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
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
