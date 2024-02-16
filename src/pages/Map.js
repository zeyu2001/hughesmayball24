import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import GoogleMapReact from 'google-map-react';

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
  return (
    <ParallaxBanner
      layers={[
        { image: './hero_bg.jpg', speed: -20 },
        {
          speed: 0,
          children: (
            <Title />
          ),
        },
        { image: './timeline_fg.png', speed: 20 },
      ]}
      className="aspect-[2/1]" style={{ height: '100vh' }}
    />
  )
}

const Marker = ({ text }) => <div>{text}</div>;

const Map = () => {

  const defaultProps = {
    center: { lat: 52.20088, lng: 0.1291724 },
    zoom: 15
  };

  return (
    <ParallaxProvider>
      <Heading />
      <div className="items-center shadow bg-gray-800 border-gray-700 p-10">
        <div style={{ height: '100vh', width: '100%' }}>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAf_tUWZaPTcvsW7QuY0B1sVQWKjNK3tDo" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
               <Marker
                  lat={defaultProps.center.lat}
                  lng={defaultProps.center.lng}
                  text="My Marker"
                />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Map;