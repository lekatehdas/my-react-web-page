import {Box, Text, Image, Button, Flex, VStack, HStack} from '@chakra-ui/react';
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
        <Box
            padding={4}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
            height="100%"
        >
            <Flex direction={["column", "row"]} height="100%">
                <VStack flex="1" pb={3} align={'flex-end'} height="100%">
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
                    flex="1"
                    justify="space-between"
                    p={2}
                    gap={1}
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
            </Flex>
        </Box>
    );
}

export default ProjectCard;
