import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';

const Title = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            Map
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

const Marker = ({ text }) => <div>
  <div className="bg-gray-900 text-white text-center rounded-lg w-20 p-2">
    {text}
  </div>
  <img src="./map-pin.svg" alt="marker" className="w-10 h-10" />
</div>;

const Map = () => {

  const defaultProps = {
    center: { lat: 52.20088, lng: 0.1291724 },
    zoom: 16
  };

  return (
    <ParallaxProvider>
      <Heading />
      <div className="items-center shadow bg-gray-800 border-gray-700 p-10">
        <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md my-10">Sitemap</h1>
        <div className="my-10">
          <img src="./graphics/map.png" alt="sitemap" className="w-full mx-auto" />
        </div>

        <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">Getting Here</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="mt-6 text-lg leading-8 text-white drop-shadow-md">
            <p className="mt-4">
              Hughes Hall is located in the heart of Cambridge, just a short walk from the city centre.
              You can find us at:
            </p>
            <p className="mt-4">
              Hughes Hall <br />
              Wollaston Road <br />
              Cambridge <br />
              CB1 2EW
            </p>
          </div>
          <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAf_tUWZaPTcvsW7QuY0B1sVQWKjNK3tDo" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Marker
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text="We're here!"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Map;