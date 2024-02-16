import React from 'react';
import { useRef, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Title = ({ name }) => {

  const ref = useRef(null);
  const threshold = 0.25;

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
    <div ref={ref} className="grayscale absolute inset-0 flex items-center justify-center text-center backdrop-blur-sm">
      <h2 className="text-white mt-20 lg:mt-0 tex text-4xl lg:text-6xl drop-shadow-md">{name}</h2>
    </div>
  )
}

const Section = ({ name, backgroundImage }) => {
  return (
    <ParallaxBanner style={{
      maxHeight: '50vh'
    }}
      layers={[
        { image: backgroundImage, speed: -20 },
        {
          speed: -15,
          scale: [1, 1.5],
          children: (
            <Title name={name} />
          ),
        }
      ]}
      className="aspect-[2/1]"
    />
  )
};

export default Section;