import { ParallaxBanner } from 'react-scroll-parallax';
import Nav from './Nav';

const MainSection = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            The World's Fair at Hughes Hall
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
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
      </header>
      <ParallaxBanner
        layers={[
          { image: './hero_bg.jpg', speed: -20 },
          {
            speed: 0,
            children: (
              <MainSection />
            ),
          },
          { image: './hero_fg.png', speed: 30 },
        ]}
        className="aspect-[2/1]" style={{ height: '100vh' }}
      />
    </>
  )
}