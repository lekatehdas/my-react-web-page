import {Project} from "./ProjectCard.tsx";
import AliceCarousel from "react-alice-carousel";
import {AspectRatio, Box, Image} from "@chakra-ui/react";

interface Props {
    projects: Project[];
    onSelect: (project: Project) => void
}

const ProjectsCarousel = ({projects, onSelect}: Props) => {
    const items = projects.map((project, index) => (
        <Box
            key={index}
            onClick={() => onSelect(project)}
            role="button"
            tabIndex={0}
            marginX={1}
        >
            <AspectRatio ratio={2/1}>
                <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="fill"
                    borderRadius="md"
                    boxSize="100%"
                />
            </AspectRatio>
        </Box>
    ));

    return (
        <AliceCarousel
            disableDotsControls
            mouseTracking
            items={items}
            controlsStrategy="responsive"
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableButtonsControls
            responsive={{
                0: {items: 3},
                1024: {items: 3},
            }}
        />
    );
};

export default ProjectsCarousel;
