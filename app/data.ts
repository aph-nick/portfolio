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
    name: 'Patient Management System',
    description:
      'Java Backend Patient Management System with Microservices',
    link: 'https://github.com/aph-nick/patient-management',
    image:
      '/patientservice.jpg',
    id: 'project1',
  },
  {
    name: 'Noted.App',
    description:
      'Clean Architecture Mobile app built with JetPack Compose that lets the user manages his personal Notes',
    link: 'https://github.com/aph-nick/Noted.app',
    image:
      '/noted.jpg',
    id: 'project2',
  },
  {
    name: 'SmartHome',
    description: 'School Project consisting of a Swing Java application, that simulates a SmartHouse management system.',
    link: 'https://github.com/aph-nick/SmartHomeManagementSwingUI',
    image:
      '/gui.jpg',
    id: 'project3',
  },
  {
    name: 'SimpleMail',
    description: 'School Project consisting of a Java application, with Swing components that simulates an email client. Under construction. ',
    link: 'https://github.com/aph-nick/SimpleMail',
    image:
      '/simplemail.jpg',

    id: 'project4',
  },
  {
    name: 'Web Portfolio',
    description: 'Simple and clean web portfolio made for private purposes. Built in TypeScript, with React.',
    link: 'https://github.com/aph-nick/portfolio',
    image:
      '/portfolio.jpg',
    id: 'project5',
  },
  {
    name: 'Weather.now',
    description: 'Clean Architecture, Jetpack Compose Weather app. Under Construction...',
    link: 'https://github.com/aph-nick/Weather.now',
    image:
      '/weather.jpg',
    id: 'project6',
  },
  {
    name: 'SimpleGraphMaker',
    description: 'Simple Java application that draws Mathematical graphs - made as a CS50x project',
    link: 'https://github.com/aph-nick/SmartGraphMaker',
    image:
      '/graph.jpg',
    id: 'project7',
  },
  {
    name: 'Aphelium',
    description:
      'Revolutional community server for CS:GO. Made with custom and complete SourceCode plugins.',
    link: 'https://steamcommunity.com/groups/ApheliumCommunity',
    image:
      '/aphelium.jpg',
    id: 'project8',
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
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/w-kucharski',
  },
];

export const EMAIL = 'wk@kucharski.ovh'
