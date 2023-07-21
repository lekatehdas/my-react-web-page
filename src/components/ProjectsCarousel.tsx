import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Project } from './ProjectCard';
import { Box, AspectRatio, Image } from '@chakra-ui/react';

interface Props {
    projects: Project[];
    onSelect: (project: Project) => void
}

const ProjectsCarousel = ({projects, onSelect}: Props) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <Box onClick={() => onSelect(project)} role="button" tabIndex={0} marginX={1}>
                        <AspectRatio ratio={2}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                objectFit="fill"
                                borderRadius="md"
                                boxSize="100%"
                            />
                        </AspectRatio>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectsCarousel;
