import About from './components/About';
import Features from './components/Features';
import Introduction from './components/Introduction';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

const Home = () => {
  return (
    <div className="flex min-h-[60vh]  flex-col  justify-center gap-8 text-center  font-nhgdp ">
      <Introduction />
      <About />
      <Features />
      <Roadmap />
      <Team />
    </div>
  );
};

export default Home;
