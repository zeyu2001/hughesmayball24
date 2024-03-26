import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';

const Title = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            Sponsorship
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

const Sponsorship = () => {
  return (
    <ParallaxProvider>
      <Heading />
      <div className="items-center shadow bg-gray-800 border-gray-700 p-10">
        <div className="mt-6 text-lg leading-8 text-white drop-shadow-md">
          <img src="/sponsorship.png" alt="sponsorship" className="w-1/2 mx-auto" />
          <hr className="my-12" />
          <h1 className="text-4xl text-center mt-6">
            Sponsorship Enquiry Form
          </h1>
          <p className="mt-6 text-center">
            We are looking for sponsors to help us make this event a success. If you are interested in sponsoring us, please contact us below.
          </p>
          <form className="mt-6 w-full" target="_blank" action="https://formsubmit.co/hw651@cam.ac.uk" method="POST">
            <input type="hidden" name="_subject" value="Sponsorship Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Thank you for your enquiry. We will get back to you shortly." />

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name" >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 md:w-1/2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email" >
                  Email 
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="md:w-1/2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" name="email" placeholder="Email Address"/>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <textarea className="md:w-1/2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="message" placeholder="Message" rows="5"></textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Sponsorship;