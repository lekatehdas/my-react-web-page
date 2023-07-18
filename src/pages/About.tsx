import {Box, Button, Text, Image, Stack} from '@chakra-ui/react';
import pic_me from '../assets/me.jpg';
import TechCarousel from "../components/TechCarousel.tsx";

const About = () => {
    const techs = [
        "React", "Angular", "JavaScript", "Typescript",
        "HTML", "CSS", "Node.js", "Express.js", "Python",
        "Django", "Java", "Kotlin", "MySQL", "MongoDB",
        "Firebase", "Hadoop", "Spark", "ML", "Git"
    ];

    return (
        <Box pt={10} display='flex' flexDirection='column' alignItems='center' h='100vh' as='section'>


            <Image
                src={pic_me}
                alt="About Image"
                objectFit='cover'
                flex='2'
                borderRadius='xl'
                shadow='md'
                mb={3}
            />


            <TechCarousel techs={techs}/>


            <Box
                flex='2'
                mt={3}
                pt={5}
            >

                <Text
                    fontSize={['2xl', '3xl', '4xl']}
                    textAlign='left'
                    paddingTop={3}
                    noOfLines={2}
                >
                    My name is <Text as='span' fontWeight='bold' color='secondary'>Aki</Text>
                </Text>

                <Text
                    fontSize={['sm', 'md', 'lg']}
                    textAlign='left'
                    paddingY={3}
                    noOfLines={[2, 3]}
                >
                    I'm a computer science graduate with a passion for coding and problem solving.
                </Text>

                <Stack direction={['column', 'row']} spacing={2} paddingTop={10}>
                    <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']} borderRadius={"3xl"}>
                        Download CV
                    </Button>
                    <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']} borderRadius={"3xl"}>
                        Hire Me
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default About;
