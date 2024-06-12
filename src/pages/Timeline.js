import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Title = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            Timeline
          </h1>
        </div>
      </div>
    </section>
  );
}

const Heading = () => {

  useEffect(() => {
    setTimeout(() => {
      const targets = document.querySelectorAll(".grayscale-fg");
      if (!targets) return;

      for (let target of targets) {
        target.classList.add("transition");
        setTimeout(() => target.classList.remove("grayscale-fg"), 2000);
      }
    }, 500);
  });

  return (
    <ParallaxBanner
      layers={[
        { image: './hero_bg.jpg', speed: -20 },
        {
          image: './graphics/cherryblossom1.svg', speed: -20,
          translateX: [-10, -10],
          className: "grayscale-fg"
        },
        {
          image: './graphics/ship.svg', speed: 0,
          translateX: [40, -20],
          className: "grayscale-fg"
        },
        {
          speed: 0,
          children: (
            <Title />
          ),
        },
        {
          image: './graphics/lady_cropped.svg', speed: 20,
          className: "grayscale-fg"
        }
      ]}
      className="aspect-[2/1]" style={{ height: '100vh' }}
    />
  )
}

const TimelineCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} showThumbs={true} emulateTouch={true} className="w-full">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} />
        </div>
      ))}
    </Carousel>
  );
}

const Timeline = () => {
  return (
    <ParallaxProvider>
      <Heading />
      <div className="shadow bg-gray-800 border-gray-700 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center items-center p-2">
            <TimelineCarousel images={[
              "./programme/mcr1.png",
              "./programme/mcr2.png",
              "./programme/mcr3.png",
            ]} />
          </div>
          <div className="col-span-1 flex justify-center items-center p-2">
            <TimelineCarousel images={[
              "./programme/ull1.png",
              "./programme/ull2.png",
              "./programme/ull3.png",
            ]} />
          </div>
          <div className="flex justify-center items-center p-2">
            <TimelineCarousel images={[
              "./programme/dh1.png",
              "./programme/dh2.png",
            ]} />
          </div>
          <div className="flex justify-center items-center p-2">
            <TimelineCarousel images={[
              "./programme/ms1.png",
              "./programme/ms2.png",
              "./programme/ms3.png",
            ]} />
          </div>
          <div className="flex justify-center items-center p-2 md:col-span-2">
            <TimelineCarousel images={[
              "./programme/p1.png",
              "./programme/p2.png",
            ]} />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Timeline;