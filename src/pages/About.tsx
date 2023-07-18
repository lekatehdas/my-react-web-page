import {Box, Button, Text, Image, Stack, Grid, GridItem} from '@chakra-ui/react';
import pic_me from '../assets/me.jpg';
import cv from '../assets/Aki_S_CV.pdf'
import TechCarousel from "../components/TechCarousel.tsx";
import {Link} from "react-scroll";

const About = () => {
    const techs = [
        "React", "Angular", "JavaScript", "Typescript",
        "HTML", "CSS", "Node.js", "Express.js", "Python",
        "Django", "Java", "Kotlin", "MySQL", "MongoDB",
        "Firebase", "Hadoop", "Spark", "ML", "Git"
    ];

    return (
        <Grid
            templateAreas={{
                base: `"picture"
                "techCarousel"
                "textArea"
                "buttonBox"`
            }}
            gridTemplateRows={"1fr min-content min-content min-content"}
            gridTemplateColumns={'100%'}
            h='calc(100vh - 45px)'
            gap={3}
            paddingY={3}
        >

            <GridItem gridArea='picture'>
                <Image
                    src={pic_me}
                    alt="About Image"
                    objectFit='cover'
                    borderRadius='xl'
                    shadow='md'
                    h="100%"
                    boxSize="full"
                />
            </GridItem>


            <GridItem gridArea='techCarousel'>
                <TechCarousel techs={techs}/>
            </GridItem>

            <GridItem gridArea='textArea'>
                <Box>
                    <Text
                        fontSize={['2xl', '3xl', '4xl']}
                        textAlign='left'
                        noOfLines={2}
                    >
                        My name is <Text as='span' fontWeight='bold' color='secondary'>Aki</Text>
                    </Text>

                    <Text
                        fontSize={['sm', 'md', 'lg']}
                        textAlign='left'
                        paddingY={3}
                        noOfLines={3}
                    >
                        I'm a computer science graduate with a passion for coding and problem solving.
                    </Text>
                </Box>
            </GridItem>

            <GridItem gridArea='buttonBox'>
                <Stack direction={['column', 'row']} spacing={2} paddingTop={3}>
                    <a href={cv} download>
                        <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']} borderRadius={"3xl"}>
                            Download CV
                        </Button>
                    </a>
                    <Link to='contact' smooth={true} duration={500} offset={-45}>
                        <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']} borderRadius={"3xl"}>
                            Hire Me
                        </Button>
                    </Link>
                </Stack>
            </GridItem>

        </Grid>
    );
};

export default About;
