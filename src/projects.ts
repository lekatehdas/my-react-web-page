import {Project} from './components/ProjectCard';
import hackathon from './assets/hackathon.png'
import oldWebPage from './assets/oldWebPage.png'
import randomness from './assets/random_generator.png'
import {Techs} from "./Techs.ts";

export const projects: Project[] = [
  {
    title: 'Node.js REST APi',
    explanation: 'Backend for coding puzzles',
    image: hackathon,
    github: 'https://github.com/your-username/project-1',
    techs: [Techs.NodeJS, Techs.ExpressJS, Techs.TypeScript, Techs.MongoDB],
  },
  {
    title: 'Old Portfolio Page',
    explanation: 'Old Portfolio Website',
    image: oldWebPage,
    github: 'https://github.com/your-username/project-1',
    page: 'https://www.project-1-demo.com',
    techs: [Techs.Angular, Techs.TypeScript, Techs.Firebase, Techs.HTML, Techs.CSS],
  },
  {
    title: 'Pseudorandom Generator',
    explanation: 'Android application for gathering sensor data',
    image: randomness,
    github: 'https://github.com/your-username/project-1',
    techs: [Techs.Kotlin, Techs.Android, Techs.Firebase],
  },
  {
    title: 'Games Finder',
    explanation: 'React study project, webpage for finding information about games',
    image: '/path/to/project-1-image.jpg',
    github: 'https://github.com/your-username/project-1',
    page: 'https://www.project-1-demo.com',
    techs: [Techs.React, Techs.TypeScript],
  },
  {
    title: 'Design Patterns',
    explanation: 'Study project implementing all the design patterns',
    image: '/path/to/project-1-image.jpg',
    github: 'https://github.com/your-username/project-1',
    page: 'https://www.project-1-demo.com',
    techs: [Techs.Java],
  },
];