import { ParallaxBanner } from 'react-scroll-parallax';
import { useRef, useEffect } from 'react';

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
      const target = document.querySelector(".grayscale-fg");
      if (!target) return;

      target.classList.add("transition");
      setTimeout(() => target.classList.remove("grayscale"), 2000);
    }, 500);
  });

  return (
    <ParallaxBanner
      layers={[
        { image: './hero_bg.jpg', speed: -20 },
        {
          speed: 0,
          children: (
            <MainSection />
          ),
        },
        { 
          image: './hero_fg.png', speed: 30,
          className: "grayscale-fg"
        }
      ]}
      className="aspect-[2/1]" style={{ height: '100vh' }}
    />
  )
}