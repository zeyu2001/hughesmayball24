import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
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
        <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-lg">
          ABOUT THE BALL
        </h1>
        <p className="my-6 text-lg leading-8 text-white drop-shadow-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!
        </p>
        <a href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-500 text-white">
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
          speed: -15,
          children: (
            <VideoForeground />
          ),
        }
      ]}
      className="aspect-[2/1]" style={{ height: '100vh' }}
    />
  )
}