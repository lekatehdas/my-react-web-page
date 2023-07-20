import {projects} from "../data/projects.ts";
import ProjectsCarousel from "../components/ProjectsCarousel.tsx";
import 'react-alice-carousel/lib/alice-carousel.css';
import {useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard.tsx";

const Projects = () => {
    const [selected, setSelected] = useState(projects[0]);

    return <Grid
        templateAreas={{
            base: `"text"
            "carousel"
            "projectCards"`
        }}
        paddingY={10}
        gap={10}
        gridTemplateRows={"min-content min-content 1fr"}
        gridTemplateColumns={'100%'}
        h='calc(100vh - 45px)'
    >
        <GridItem gridArea={'text'}>
            <h1>Here are some of my projects</h1>
        </GridItem>

        <GridItem gridArea={'carousel'}>
            <ProjectsCarousel projects={projects} onSelect={setSelected} />
        </GridItem>

        <GridItem gridArea={'projectCards'}>
            <ProjectCard project={selected}/>
        </GridItem>
    </Grid>
}

export default Projects;
