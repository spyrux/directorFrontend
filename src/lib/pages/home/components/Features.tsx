import { CSSProperties, ReactNode } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftArrow from '/Vector.svg';
import rightArrow from '/Vector2.svg';
const Features = () => {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  };

  return (
    <div
      className=" flex flex-col items-center justify-center h-96"
      id="features"
    >
      <p className=" text-xl text-left self-start  w-4/5 ml-auto mb-10">
        Features
      </p>

      <Carousel
        className="h-96 w-3/5"
        centerMode={true}
        infiniteLoop
        selectedItem={1}
        showThumbs={false}
        dynamicHeight={false}
        width={'600'}
        showIndicators={false}
        showStatus={false}
        centerSlidePercentage={60}
        renderItem={(item: ReactNode, options?: { isSelected: boolean }) => {
          const opacity = options?.isSelected ? 1 : 0.3;

          return (
            <div style={{ opacity }} className="your-slide-class">
              {item}
            </div>
          );
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <img src={leftArrow} className="max-h-6" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15, maxHeight: 1 }}
            >
              <img src={rightArrow} className="max-h-6" />
            </button>
          )
        }
      >
        <div>
          <h3 className=" text-lg">Abundance of opportunity</h3>
          <img
            src="public\opportunity.png"
            style={{ height: '300px', width: 'auto' }}
          ></img>
          <p className="max-w-[400px] mx-auto  text-gray-600">
            Browse for Opportunities That Fit Your Goals and Also Upload Roles
            For Others to Collaborate With You
          </p>
        </div>
        <div>
          <h3 className=" text-lg">Unlimited Exploration</h3>
          <img
            src="public\explore.png"
            style={{ height: '300px', width: 'auto' }}
          ></img>
          <p className="max-w-[300px] mx-auto text-gray-600">
            A Homepage That Allows You to Explore the Presence and Craft of The
            Other Users Work
          </p>
        </div>
        <div>
          <h3 className=" text-lg">Your own film portfolio</h3>
          <img
            src="public\portfolio.png"
            style={{ height: '300px', width: 'auto' }}
          ></img>
          <p className="max-w-[400px] mx-auto  text-gray-600">
            Upload and Curate Your Portfolio for Other Users to See, Allowing
            Others to Understand Who You Are
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Features;
