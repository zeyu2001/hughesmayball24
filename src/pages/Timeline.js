import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const events = [
  {
    time: '8pm',
    title: 'Event 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed semper luctus.'
  },
  {
    'time': '9pm',
    'title': 'Event 2',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed semper luctus.'
  },
  {
    'time': '10pm',
    'title': 'Event 3',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed semper luctus.'
  },
  {
    'time': '11pm',
    'title': 'Event 4',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed semper luctus.'
  },
  {
    'time': '12am',
    'title': 'Event 5',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed semper luctus.'
  }
]

const Title = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            Timeline
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

const TimelineElement = ({ time, title, description }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#36454F', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #36454F' }}
      date={time}
      iconStyle={{ background: '#36454F', color: '#fff' }}
    >
      <h3 className="text-2xl vertical-timeline-element-title">{title}</h3>
      <p>
        {description}
      </p>
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  return (
    <ParallaxProvider>
      <Heading />
      <div className="items-center shadow bg-gray-800 border-gray-700 p-10">
        {/* <VerticalTimeline>
          {
            events.map(e => (
              <TimelineElement {...e} />
            ))
          }
        </VerticalTimeline> */}
        <div style={{ height: "1000px" }} className="flex justify-center items-center p-10">
          <p className="text-white text-4xl">Coming soon...</p>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Timeline;