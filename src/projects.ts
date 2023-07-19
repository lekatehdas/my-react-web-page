import {Project} from './components/ProjectCard';
import hackathon from './assets/hackathon.png'
import oldWebPage from './assets/oldWebPage.png'
import randomness from './assets/random_generator.png'
import game from './assets/game_search.png'
import patterns from './assets/design_patterns.png'
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
    image: game,
    github: 'https://github.com/your-username/project-1',
    page: 'https://www.project-1-demo.com',
    techs: [Techs.React, Techs.TypeScript],
  },
  {
    title: 'Design Patterns',
    explanation: 'An ongoing study project implementing all the design patterns',
    image: patterns,
    github: 'https://github.com/your-username/project-1',
    page: 'https://www.project-1-demo.com',
    techs: [Techs.Java],
  },
];