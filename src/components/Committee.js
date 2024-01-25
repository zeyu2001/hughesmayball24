import { Parallax } from 'react-scroll-parallax';

const commiteeMembers = [
  { name: 'Chavara Naidoo', title: 'Head of Finance', description: 'a person who exists in the world and does things.' },
  { name: 'Adelyn Wu', title: 'Sponsorship', description: 'a person who exists in the world and does things.' },
  { name: 'Maw Maw Khaing', title: 'Ticketing', description: 'a person who exists in the world and does things.' },
  { name: 'Anushka', title: 'Head of Events', description: 'a person who exists in the world and does things.' },
  { name: 'Junjie Wang', title: 'Food', description: 'a person who exists in the world and does things.' },
  { name: 'Lauren Wang YueQin', title: 'Drinks and Sustainability', description: 'a person who exists in the world and does things.' },
  { name: 'Maya Schulz', title: 'Non-musical entertainment', description: 'a person who exists in the world and does things.' },
  { name: 'Oneir Raza', title: 'Musical entertainment', description: 'a person who exists in the world and does things.' },
  { name: 'Janina Forsyth', title: 'Head of Design', description: 'a person who exists in the world and does things.' },
  { name: 'Minerva Maheshwari', title: 'Art and Graphics', description: 'a person who exists in the world and does things.' },
  { name: 'Jack Zhan', title: 'Scene', description: 'a person who exists in the world and does things.' },
  { name: 'Linda Prüß', title: 'Scene', description: 'a person who exists in the world and does things.'},
  { name: 'Beth Sykes', title: 'Head of Marketing', description: 'a person who exists in the world and does things.' },
  { name: 'Yihan Yue', title: 'Social Media', description: 'a person who exists in the world and does things.' },
  { name: 'Zayne Zhang', title: 'Website', description: 'a person who exists in the world and does things.'},
  { name: 'Nowsha Farha', title: 'Head of Operations', description: 'a person who exists in the world and does things.' },
  { name: 'Xinyi Cao', title: 'Infrastructure', description: 'a person who exists in the world and does things.' },
  { name: 'Asmita Narang', title: 'Personnel & Accessibility', description: 'a person who exists in the world and does things.' },
  { name: 'Mac', title: 'Security', description: 'a person who exists in the world and does things.' }
];

const CommitteeMember = (member) => {
  return (
    <div className="items-center rounded-lg shadow sm:flex bg-gray-800 border-gray-700">
      <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt={`${member.name} Avatar`} />
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-white">
          <a href="#">{member.name}</a>
        </h3>
        <span className="text-gray-500 text-gray-400">{member.title}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 text-gray-400">{member.description}</p>
      </div>
    </div>
  )
}

const Committee = () => {

  const rows = commiteeMembers.reduce((rows, key, index) => {
    return (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows;
  }, []);

  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        {rows.map((row, index) => {
          return (
            <div key={index} className="py-5 grid gap-8 mb-6 lg:mb-16 grid-cols-2">
              {row.map((member, index) => {
                return (
                  <Parallax key={index} scale={[0.9, 1.1, 'easeInQuad']}>
                    <CommitteeMember {...member} />
                  </Parallax>
                )
              })}
            </div>
          )
        })}
      </div >
    </section>
  )
};

export default Committee;