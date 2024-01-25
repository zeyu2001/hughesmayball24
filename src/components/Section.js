import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Section = ({ name, backgroundImage }) => (
  <ParallaxBanner style={{
    maxHeight: '50vh'
  }}
    layers={[
      { image: backgroundImage, speed: -20 },
      {
        speed: -15,
        children: (
          <div className="absolute inset-0 flex items-center justify-center text-center backdrop-blur-sm">
            <h2 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">{name}</h2>
          </div>
        ),
      }
    ]}
    className="aspect-[2/1]"
  />
);

export default Section;