import { ParallaxBanner } from 'react-scroll-parallax';
import { useRef, useEffect, useState } from 'react';
import { Hearts } from 'react-loader-spinner';

const MainSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    target.classList.add("transition");
    setTimeout(() => target.classList.remove("grayscale-no-blur"), 2000);
  });

  return (
    <section>
      <div ref={ref} className="grayscale-no-blur absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            Hughes Hall May Ball
          </h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow-md">
            June 15th, 2024
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {

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

  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 4) {
      setLoading(false);
    }
  }

  for (let image of ["./hero_bg.jpg", "./graphics/cherryblossom1.svg", "./graphics/ship.svg", "./graphics/lady_cropped.svg"]) {
    const img = new Image();
    img.src = image;
    img.onload = imageLoaded;
  }

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50 w-full h-full">
          <Hearts
            height="80"
            width="80"
            color="red"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <p className="text-white text-2xl">Loading...</p>
        </div>
      ) : (
        <ParallaxBanner
          layers={[
            { image: './hero_bg.jpg', speed: -20 },
            {
              image: './graphics/cherryblossom1.svg', speed: -20,
              translateX: [-10, -10],
              className: "grayscale-fg",
            },
            {
              image: './graphics/ship.svg', speed: 0,
              translateX: [40, -20],
              className: "grayscale-fg"
            },
            {
              speed: 0,
              children: (
                <MainSection />
              ),
            },
            {
              image: './graphics/lady_cropped.svg', speed: 20,
              className: "grayscale-fg"
            }
          ]}
          className="aspect-[2/1]" style={{ height: '100vh' }}
        />)}
    </>
  )
}