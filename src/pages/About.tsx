import {Box, Button, Text, Image, Stack, Grid, GridItem} from '@chakra-ui/react';
import TechCarousel from "../components/TechCarousel.tsx";
import {Link} from "react-scroll";
import cv from '../assets/Aki_S_CV.pdf'
import pic_me from '../assets/me_no_background_cropped.png';
import {Techs} from "../data/Techs.ts";

const About = () => {
    const techs = Object.values(Techs)

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
            gap={1}
            py={1}
        >

            <GridItem gridArea='picture' display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                <Box h="auto" w="auto">
                    <Image
                        src={pic_me}
                        alt="About Image"
                        borderRadius='xl'
                        shadow='md'
                        boxSize="100%"
                    />
                </Box>
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
                        My name is <Text as='span' fontWeight='bold' color='secondary'>Aki Sirkiä</Text>
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
