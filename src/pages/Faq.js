import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

const faqs = [
  {
    category: "Accessibility",
    question: 'Can you smoke or vape at the May Ball?	',
    answer: 'Yes, you can smoke and vape in the smoking area shown on the map in your program. Smoking will not be permitted in any other area of the ball.	',
  },
  {
    category: "Food & Drink",
    question: 'Will there be vegetarian or vegan options?	',
    answer: `Yes! As a committee we are prioritising every guest's experience and a central part of that is ensuring there are food options available for everyone. If you have more specific dietary requirments please contact Abbie at food@hughesmayball.co.uk and we will do our best to make sure your needs are met.	`,
  },
  {
    category: "Accessibility",
    question: "Will there be a place I can pray?",
    answer: "Yes! Guests will have limited access to a prayer and mindfulness room throughout the event - simply ask a Porter and they will direct you."
  },
  {
    category: "General",
    question: "What do I wear? Is it a costume party?",
    answer: "This ball is not a costume party but all guests are welcome to take inspiration from the theme! The dress code is black tie; in keeping with Hughes values, all guests are encouraged to wear their version of black tie. Take this ball as an opportunity to wear your most exciting ensembles and feel your most confident as you celebrate your achievements over the academic year! We will be providing you with inspiration as we get closer to the ball! Keep your eyes on our Instagram page (@hughesmayball) to get some ideas!"
  },
  {
    category: "Accessibility",
    question: "I have accessibility concerns, who can I speak to?",
    answer: "Please contact Asmita at accessibility@hughesmayball.co.uk. She will be more than happy to make sure that the ball is open and accessible to all attendees."
  },
  {
    category: "General",
    question: "What is included with my ticket?",
    answer: "Your ticket includes all food and drink on the night, as well as a wide variety of entertainment and live music. You do not need to pay for anything once you are in the ball!"
  },
  {
    category: "General",
    question: "I want to get involved with the May Ball, can I still help?",
    answer: "Please contact Jennifer at president@hughesmayball.co.uk."
  },
  {
    category: "Food & Drink",
    question: "Will there be drinks available for people who don't drink alcohol?",
    answer: "There will be plenty of non-alcoholic drinks available. It is important to us that this event is enjoyable for everyone so we are making sure to have exciting non-alcoholic drinks available!"
  },
  {
    category: "Food & Drink",
    question: "How many drinks can I have? What about food?",
    answer: "Food and drinks are unlimited - however, we advise you to pace yourself if you want to make it to the survivors' photo!"
  },
  {
    category: "General",
    question: "Can I bring a purse?",
    answer: "Yes! Do be aware that all bags will be searched on entering the ball, and it will be a long night, so bring something convenient! If you have any concerns about the bag search, please contact Max at security@hughesmayball.co.uk."
  },
  {
    category: "Food & Drink",
    question: "Can I bring my own alcohol?",
    answer: "No. Alcohol and other beverage options will be provided on the night, so there is no need to bring your own - any personal alcohol will be confiscated by the Porters on entering the ball. If you have concerns about the drinks, please contact Lauren at drinks@hughesmayball.co.uk"
  },
  {
    category: "Food & Drink",
    question: "Is there a sit down dinner?",
    answer: "No. We will have a wide variety of food options throughout the evening, as well as seating, but there is no formal dinner."
  },
  {
    category: "Accessibility",
    question: "What if I don't feel well on the night, is someone there to help?",
    answer: "Yes! We will have trained healthcare staff from St John's Ambulance present on the night, as well as the Porters and Security, who are all trained in first aid. If you have further concerns, please contact Asmita at accessibility@hughesmayball.co.uk."
  },
  {
    category: "General",
    question: "What is a May Ball?",
    answer: "A May Ball is a Cambridge tradition - an all-night party with unlimited food, drink, and entertainment, all included in the price of a ticket!"
  },
  {
    category: "Ticketing",
    question: "Can I come for free if I live on site?",
    answer: "Unfortunately not. We hope that you all purchase tickets and join us, but if not, you will not be allowed access to the ball. An email with more information will be circulated to you at a later date. If you have any questions, please contact Max at security@hughesmayball.co.uk"
  },
  {
    category: "General",
    question: "Can I leave and come back?",
    answer: "Re-entry to the ball is at the porter's discretion - if you have any questions, please contact Max at security@hughesmayball.co.uk"
  },
  {
    category: "General",
    question: "What is the survivors photo?",
    answer: "The survivors' photo is taken at the end of the May Ball on the morning of the 16th June! It includes all guests who 'survived' the entire May Ball. We're hoping to see many many guests in this year's photo!"
  },
  {
    category: "Ticketing",
    question: "How do I get a ticket?",
    answer: "To get a ticket please go to our website: hughesmayball.co.uk. Ticket purchasing is integrated into the website so it is a very easy and straightforward process!"
  },
  {
    category: "General",
    question: "What is there to do at the May Ball?",
    answer: "There will be plenty to do at the May Ball! As well as live music and DJ sets throughout the night, guests are also invited to enjoy surprise non-musical entertainment options. Our theme invites guests to explore the ball and take part in solving a mystery. There will also be plenty of photo opportunities, various locations for dancing, and places to sit down, chat, and eat!"
  },
  {
    category: "General",
    question: "When does the May Ball start? When does it finish?",
    answer: "Gates will open to the May Ball at 19:00 on Saturday the 15th June. The ball will end at 5:00 on Sunday, the 16th of June."
  },
  {
    category: "Food & Drink",
    question: "I have a severe allergy, who do I talk to?",
    answer: "Please contact Asmita at accessibility@hughesmayball.co.uk for any concerns about allergies or accessibility."
  },
  {
    category: "Ticketing",
    question: "Can I bring someone from another college?",
    answer: "You are more than welcome to bring someone from another college as your guest. Non-Hughes members will also be able to purchase tickets from the 1st April 2024! So spread the word, and invite all of your Cambridge friends!!"
  },
  {
    category: "General",
    question: "Will there be a photographer there?",
    answer: "Yes! If you have any concerns, please contact Asmita at accessibility@hughesmayball.co.uk."
  },
  {
    category: "Ticketing",
    question: "Can I change the names on my tickets?",
    answer: "Yes - please contact Oneir at ticketing@hughesmayball.co.uk for assistance."
  },
  {
    category: "Ticketing",
    question: "I bought a ticket but now I can't come, can I get a refund?",
    answer: "Tickets are non-refundable, however ticket holders will be able to transfer their tickets to waitlisted guests until 17:00 on Wednesday 12th June, 2024."
  },
  {
    category: "General",
    question: "I want to perform at the May Ball! Who do I talk to?",
    answer: "Please contact David at music@hughesmayball.co.uk to enquire about performing!"
  },
  {
    category: "General",
    question: "Do I need to bring ID?",
    answer: "Yes - in order to prove your identity, it will be much easier if guests bring a valid form of photographic identification. If you have any questions, please contact Max at security@hughesmayball.co.uk."
  },
  {
    category: "Ticketing",
    question: "How many guests can I bring?",
    answer: "Hughes students, staff, fellows, and alumni are able to purchase guest tickets at the same price as their own ticket. We have decided on this guest policy to ensure as many Hughes students can attend the ball as possible, in the spirit of making this a May Ball for Hughes by Hughes."
  },
  {
    category: "General",
    question: "Where is the May Ball?",
    answer: "The May Ball will be held at Hughes Hall. We're looking forward to welcoming you to our college transformed! Please note that the entrance will be at the Gresham building."
  },
  {
    category: "General",
    question: "What does the theme mean?",
    answer: "Wanderlust is defined as a 'strong, innate desire to rove or travel about.' This year's May Ball will provide guests with the opportunity to quench this desire for exploration, taking you through intricately designed worlds whilst engaging with our mystery!"
  },
  {
    category: "General",
    question: "Where is the entrance to the May Ball?",
    answer: "This year the entrance to the May Ball will be at the college entrance on Gresham Road. Guests will queue along the southeast side of Gresham before entering through the gates."
  },
  {
    category: "Ticketing",
    question: "How do I get into the ball? Wristbands?",
    answer: "Guests will enter the ball from the Gresham Road entrance to Hughes Hall. To speed up the queuing system, Hughes ticket holders will be invited to collect wristbands in the week before the ball. Upon arrival on the night of the ball, security will see your wristband and you will be allowed to enter the ball. For guests who are unable to collect wristbands in advance, you will be able to get your wristband on the night of the ball. However, we encourage as many guests as possible to collect their wristbands in advance to lessen waiting time!"
  },
  {
    category: "Ticketing",
    question: "Can I get a cheaper ticket?",
    answer: "We have bursary tickets available to undergraduate and CGCM students currently receiving a Cambridge Bursary. To check your eligibility, please contact Clare: finance.officer@hughes.cam.ac.uk"
  },
  {
    category: "General",
    question: "Who is the headliner?",
    answer: "We will be announcing the headliner and all other musical acts very soon! You can expect updates about food vendors, entertainment, and performers over the next few months. If you have any suggestions or enquiries about performing at the ball, please contact David at music@hughesmayball.co.uk"
  },
  {
    category: "General",
    question: "Can I buy a poster?",
    answer: "Yes - if we have interest! If you would like to purchase a poster, please contact Beth at marketing@hughesmayball.co.uk"
  }
];

const Title = () => {
  return (
    <section>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md">
            FAQ
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

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="question w-100 my-5" onClick={toggleOpen}>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span> {question}
        <hr className='my-5'/>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const FaqCategory = ({ category, faqs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-category">
      <div className="category text-2xl font-semibold w-100 my-5" onClick={toggleOpen}>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span> {category}
        <hr className='my-5'/>
      </div>
      {isOpen && faqs.map((faq, i) => (
        <FaqItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FaqDropdown = () => {
  const categories = [];
  for (let faq of faqs) {
    if (!categories[faq.category]) {
      categories[faq.category] = [];
    }
    categories[faq.category].push(faq);
  }

  return (
    <div className="faq-dropdown">
      {['General', 'Ticketing', 'Accessibility', 'Food & Drink'].map(category => (
        <FaqCategory key={category} category={category} faqs={categories[category]} />
      ))}
    </div>
  );
};

const Faq = () => {
  return (
    <ParallaxProvider>
      <Heading />
      <div className="items-center shadow bg-gray-800 border-gray-700 p-10">
        <h1 className="text-white mt-20 lg:mt-0 text-4xl lg:text-6xl drop-shadow-md my-10">FAQ</h1>
        <div className="mt-6 text-lg leading-8 text-white drop-shadow-md">
          <FaqDropdown />
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Faq;