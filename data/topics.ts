export interface Topic {
  icon: string;
  label: string;
  description: {
    text: string;
    imageUrl?: string;
    link?: {url: string, label: string}
  }


}

export const topicList: Topic[] = [
  { icon: "📚", label: "Degree", description: {text: 'My Bachelor of IT degree was my first introduction to the world of programming. I found myself really motivated by the results I was getting by working hard on my courses and I graduated at the top of my class with 95 being my lowest score. I felt at home when I programmed and was able to get into the world of software thanks to my encouraging lecturers and the challenges that they put in front of me. ', imageUrl: 'graduation.jpeg'},  },
  { icon: "🔎", label: "Research", description: {text: 'I published a paper on repurposing hardware and gave a presentation at the annual IT conference in 2018 in Wellington. It was my first academic conference presentation, which I attended after driving in a Gen-1 Nissan Leaf for 20 hours (charging it quite a few times along the way). ', link: {label: 'Research paper', url: 'https://www.researchgate.net/publication/357928870_A_Prototype_Robot_as_an_Example_of_Creative_Repurposing_of_Accessible_Technologies'}, imageUrl: 'conference.jpeg'} },
  { icon: "🏆", label: "Recognition", description: { text: 'Throughout university and my first job, I have been appreciated for my efforts in several ways, which I am very grateful for. I have been interviewed by a newspaper for my achievements during my tertiary education. At Vista, with my team, I have won a VOSCARS award twice in the two years that the ceremony was held. ', link: {label: 'Article', url: 'https://indiannewslink.co.nz/career-prospects-have-their-beginnings-at-mit/'}, imageUrl: 'voscars.png'}},
  { icon: "💻", label: "Developer", description: {text: 'I never quite imagined how far I would come as a developer and how quickly. I have had the pleasure and luck of working with some brilliant developers who helped me learn to code cleanly, get in touch with industry practices and drive in the importance of maintainable code. I work far too many hours (by choice), so I get quite a lot of practice. 3 (years) is just a number. ', link: {label: 'CV', url: 'https://www.dropbox.com/s/japvf987uf7kqtt/Sadia%20Afrin%20---%20CV.pdf?dl=0'} }},
  { icon: "🧩", label: "Life/Work", description: {text: "Outside of software, I am obsessed with building my dream home. It's far from a humble abode, and so I have taken on several real estate projects, to pave the way. With my husband's support, I am continuing to invest quite heavily in real estate with around 8 properties in my portfolio. ", link: {url: 'https://fb.watch/aVOOr1Mz3b/', label:'Interview with RainMaker'} }},
  { icon: "🇧🇩", label: "Bangladesh", description: {text: 'I am and always will be a Bengali girl. My personality has been shaped by the culture and outlook on life that many Bangladeshis have, which is to try to stand out just that little bit more amongst the millions of people around them. Like other Bengalis, I am competitive, (a little too) honest, and am very bubbly around the people around me that support me, including my co-workers. ' }}
];
