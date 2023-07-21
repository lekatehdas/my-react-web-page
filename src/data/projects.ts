import {Project} from '../components/ProjectCard.tsx';
import hackathon from '../assets/hackathon.png'
import oldWebPage from '../assets/oldWebPage.png'
import randomness from '../assets/random_generator.png'
import game from '../assets/game_search.png'
import {Techs} from "./Techs.ts";

export const projects: Project[] = [
    {
        title: 'Puzzle backend',
        explanation: 'Node.js REST API for coding puzzles.',
        image: hackathon,
        github: 'https://github.com/KishDelish/hkrhackathon_backend',
        techs: [Techs.NodeJS, Techs.ExpressJS, Techs.TypeScript, Techs.MongoDB],
    },
    {
        title: 'My Page',
        explanation: 'My old portfolio website.',
        image: oldWebPage,
        github: 'https://github.com/lekatehdas/myWebPage',
        page: 'https://my-web-page-blush.vercel.app/about',
        techs: [Techs.Angular, Techs.TypeScript, Techs.Firebase, Techs.HTML, Techs.CSS],
    },
    {
        title: 'Pseudorandom Generator',
        explanation: 'Android application for gathering sensor data from user interactions.',
        image: randomness,
        github: 'https://github.com/lekatehdas/thesis_project',
        techs: [Techs.Kotlin, Techs.Android, Techs.Firebase],
    },
    {
        title: 'Games Finder',
        explanation: 'React study project, webpage for finding information about games.',
        image: game,
        github: 'https://github.com/lekatehdas/game_hub',
        page: 'https://game-hub-sand-phi.vercel.app/',
        techs: [Techs.React, Techs.TypeScript],
    }
];