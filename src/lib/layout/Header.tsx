import logo from '/logo.svg';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <a href="https://vitejs.dev" target="_blank">
        <img src={logo} className="logo" alt="Vite logo" />
      </a>
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="ml-auto"></div>
      </section>
    </header>
  );
};

export default Header;
