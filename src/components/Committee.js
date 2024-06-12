import { Parallax } from 'react-scroll-parallax';
import { useEffect, useRef } from 'react';

const commiteeMembers = [
  { name: 'Jennifer Schwartz', title: 'President', contact: 'president@hughesmayball.co.uk', photo: '/committee/jennifer.jpeg' },
  { name: 'Chavara Naidoo', title: 'Head of Finance', contact: 'finance@hughesmayball.co.uk', photo: '/committee/chavara.jpg' },
  { name: 'Adelyn Wu', title: 'Sponsorship', contact: 'sponsorship@hughesmayball.co.uk', photo: '/committee/addie.jpg' },
  { name: 'Oneir Raza', title: 'Ticketing', contact: 'ticketing@hughesmayball.co.uk', photo: '/committee/oneir.jpeg' },
  { name: 'Anushka', title: 'Head of Events', contact: 'events@hughesmayball.co.uk', photo: '/committee/anushka.jpeg' },
  { name: 'Abbie Gellatly', title: 'Food', contact: 'food@hughesmayball.co.uk', photo: '/committee/abbie.jpeg' },
  { name: 'Lauren Wang YueQin', title: 'Drinks and Sustainability', contact: 'drinks@hughesmayball.co.uk', photo: '/committee/yueqin.jpeg' },
  { name: 'David Whyatt', title: 'Musical entertainment', contact: 'music@hughesmayball.co.uk', photo: '/committee/david.jpeg' },
  { name: 'Linda Prüß', title: 'Scene', contact: 'scene@hughesmayball.co.uk', photo: '/committee/linda.jpeg' },
  { name: 'Minerva Maheshwari', title: 'Scene', contact: 'scene@hughesmayball.co.uk', photo: '/committee/minerva.jpeg' },
  { name: 'Jack Zhan', title: 'Scene', contact: 'scene@hughesmayball.co.uk', photo: '/committee/jack.jpg' },
  { name: 'Beth Sykes', title: 'Head of Marketing', contact: 'marketing@hughesmayball.co.uk', photo: '/committee/beth.jpg' },
  { name: 'Yihan Yue', title: 'Social Media', contact: 'media@hughesmayball.co.uk', photo: '/committee/yihan.jpg' },
  { name: 'Zayne Zhang', title: 'Website', contact: 'website@hughesmayball.co.uk', photo: '/committee/zayne.jpg' },
  { name: 'Nowsha Farha', title: 'Head of Operations', contact: 'operations@hughesmayball.co.uk', photo: '/committee/nowsha.jpg' },
  { name: 'Xinyi Cao', title: 'Infrastructure', contact: 'infrastructure@hughesmayball.co.uk', photo: '/committee/xinyi.jpeg' },
  { name: 'Asmita Narang', title: 'Personnel & Accessibility', contact: 'accessibility@hughesmayball.co.uk', photo: '/committee/asmita.jpg' },
  { name: 'Max Pralle', title: 'Security', contact: 'security@hughesmayball.co.uk', photo: '/committee/max.jpg' },
];

const CommitteeMember = (member) => {

  const ref = useRef(null);
  const threshold = 0.5;

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const elem = entry.target;
      if (entry.intersectionRatio >= threshold && !elem.classList.contains("transition")) {
        elem.classList.add("transition");
        setTimeout(() => {elem.classList.remove("grayscale-fg"); elem.classList.remove("transition")}, 2000);
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
    <div ref={ref} className="grayscale-fg text-center text-gray-400">
      <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={member.photo || "/avatar.jpg"} alt={member.name} />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
          <a href="#">{member.name}</a>
        </h3>
        <p>{member.title}</p>
        <p>{member.contact}</p>
    </div>
  )
}

const Committee = () => {
  return (
    <section className="bg-gray-900" id="committee">
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {commiteeMembers.map((member, index) => {
          return (
            <Parallax key={index} scale={[0.8, 1.2, 'easeInQuad']}>
              <CommitteeMember {...member} />
            </Parallax>
          )
        })}
      </div >
    </section>
  )
};

export default Committee;