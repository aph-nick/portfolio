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
    description: 'School Project consisting of a Swing Java application, that simulates a SmartHouse management system.',
    link: 'https://github.com/aph-nick/SmartHomeManagementSwingUI',
    image:
      '/gui.jpg',
    id: 'project2',
  },
  {
    name: 'Web Portfolio',
    description: 'Simple and clean web portfolio made for private purposes. Built in TypeScript, with React.',
    link: 'https://github.com/aph-nick/portfolio',
    image:
      '/portfolio.jpg',
    id: 'project3',
  },
  {
    name: 'SimpleMail',
    description: 'School Project consisting of a Java application, with Swing components that simulates an email client. Under construction. ',
    link: 'https://github.com/aph-nick/SimpleMail',
    image:
      '/simplemail.jpg',

    id: 'project5',
  },
  {
    name: 'SimpleGraphMaker',
    description: 'Simple Java application that draws Mathematical graphs - made as a CS50x project',
    link: 'https://github.com/aph-nick/SmartGraphMaker',
    image:
      '/graph.jpg',
    id: 'project4',
  },
  {
    name: 'WorkoutTracker',
    description: 'A Java build WorkoutTracking Application. Under construction',
    link: 'https://github.com/aph-nick/',
    image:
      '/workouttracker.jpg',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Polsko Japońska Akademia Technik Komputerowych',
    title: 'Student',
    start: '2024',
    end: 'Present',
    link: 'https://pja.edu.pl',
    id: 'work1',
  },
  {
    company: 'Complete Course with a Certificate (C, Python, SQL, HTML + CSS)',
    title: 'Harvard CS50X',
    start: '2024',
    end: '2024',
    link: 'https://cs50.harvard.edu/x/2025/',
    id: 'work2',
  },
  {
    company: 'Logistics / Container Freight',
    title: 'Cargo Importer',
    start: '2024',
    end: '2025',
    link: '',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/aph-nick',
  },
  {
    label: 'LinkedIN',
    link: 'www.linkedin.com/in/w-kucharski',
  },
];

export const EMAIL = 'w@kucharski.ovh'
