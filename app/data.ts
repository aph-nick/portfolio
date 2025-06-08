type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Aphelium',
    description:
      'Revolutional community server for CS:GO. Made with custom and complete SourceCode plugins.',
    link: 'https://steamcommunity.com/groups/ApheliumCommunity',
    image:
      '/aphelium.jpg',
    id: 'project1',
  },
  {
    name: 'SmartHome',
    description: 'School Project consisting of a CLI Java application, that simulates a SmartHouse management system.',
    link: 'https://github.com/aph-nick/SmartHome',
    image:
      '/smarthome.jpg',
    id: 'project2',
  },
  {
    name: 'SimpleGraphMaker',
    description: 'Simple Java application that draws Mathematical graphs - made as a CS50x project',
    link: 'https://github.com/me50/aph-nick',
    image:
      '/graph.jpg',
    id: 'project3',
  },
  {
    name: 'SimpleMail',
    description: 'School Project consisting of a Java application, with Swing components that simulates an email client. Under construction. ',
    link: 'https://github.com/aph-nick/SmartHome',
    image:
      '/simplemail.jpg',
    id: 'project4',
  },
  {
    name: 'WorkoutTracker',
    description: 'A Java build WorkoutTracking Application, under construction',
    link: 'https://github.com/aph-nick/SmartHome',
    image:
      '/workouttracker.jpg',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/aph-nick',
  },
];

export const EMAIL = 'w@kucharski.ovh'
