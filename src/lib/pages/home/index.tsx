import About from './components/About';
import Features from './components/Features';
import Introduction from './components/Introduction';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
const Home = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
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
