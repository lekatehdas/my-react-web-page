import {Box, Text, Image, Button, VStack, HStack, SimpleGrid, Card} from '@chakra-ui/react';
import {Techs} from "../data/Techs.ts";
import TechStackIconList from "./TechStackIconList.tsx";

export interface Project {
    title: string;
    explanation: string;
    image: string;
    github: string;
    page?: string;
    techs: Techs[]
}

interface Props {
    project: Project;
}

const ProjectCard = ({project}: Props) => {
    return (
        <Card
            padding={4}
            borderRadius="lg"
            height="100%"
        >
            <SimpleGrid
                columns={{base: 1, sm: 2}}
                spacing={2}
                height="100%"
                templateRows={
                {base: "1fr min-content",
                    md: "1fr"}
            }
            >
                <VStack spacing={4}>
                    <Box
                        height="100%"
                        width="100%"
                        overflow={'hidden'}
                        position="relative"
                        borderRadius={'md'}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            objectFit="cover"
                            boxSize="100%"
                            position="absolute"
                            top="0"
                            right="0"
                            bottom="0"
                            left="0"
                        />
                    </Box>

                    <TechStackIconList techs={project.techs}/>
                </VStack>

                <VStack
                    justify="center"
                    p={2}
                    gap={5}
                >
                    <Box>
                        <Text fontSize="2xl">{project.title}</Text>
                        <Text>{project.explanation}</Text>
                    </Box>

                    <HStack spacing={3}>
                        <Button as="a" href={project.github} target="_blank" colorScheme="highlight">
                            GitHub
                        </Button>
                        {project.page &&
                            <Button as="a" href={project.page} target="_blank" colorScheme="highlight">
                                Live Demo
                            </Button>
                        }
                    </HStack>
                </VStack>
            </SimpleGrid>
        </Card>
    );
}

export default ProjectCard;
