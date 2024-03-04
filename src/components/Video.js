import { ParallaxBanner } from 'react-scroll-parallax';
import { useEffect, useRef } from 'react';

const VideoLayer = () => (
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="/video.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
);


const VideoForeground = () => {

  const ref = useRef(null);
  const threshold = 0.5;

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const elem = entry.target;
      if (entry.intersectionRatio >= threshold && !elem.classList.contains("transition")) {
        elem.classList.add("transition");
        setTimeout(() => {elem.classList.remove("grayscale"); elem.classList.remove("transition")}, 2000);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold });
    const target = ref.current;
    if (!target) return;

    observer.observe(target);
    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="grayscale absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="container px-5">
        <h1 className="text-white mt-15 lg:mt-0 text-4xl lg:text-6xl drop-shadow-lg">
          ABOUT THE BALL
        </h1>
        <p className="my-10 text-lg leading-8 text-white drop-shadow-lg">
          Join Hughes Hall for a magical night of mystery, reverie, and fun at our 2024 May Ball — Wanderlust. 
          Your ticket entitles you to unlimited food, drink, and entertainment for the whole night, along with the potential to discover secrets and treasures along the way. 
          We look forward to welcoming you on June 15, 2024 — gates open at 7:00pm on Gresham Road.
        </p>
        <a href="/#tickets" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-500 text-white">
          Get Tickets <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}


export default function Video() {
  return (
    <ParallaxBanner
      layers={[
        {
          speed: -20,
          children: (
            <VideoLayer />
          ),
        },
        { 
          image: './graphics/Owl.svg', 
          translateX: [50, -50], 
          speed: 20
        },
        {
          speed: -15,
          children: (
            <VideoForeground />
          ),
        },
      ]}
      className="aspect-[2/1]" style={{ height: '100vh' }}
    />
  )
}