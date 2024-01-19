import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const CountrySection = ({ name, backgroundImage }) => (
  <ParallaxBanner
    layers={[
      { image: backgroundImage, speed: -20 },
      {
        speed: -15,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl lg:text-8xl bg-gray-800 text-white font-thin">{name}</h2>
          </div>
        ),
      }
    ]}
    className="aspect-[2/1]"
  />
);

export default CountrySection;