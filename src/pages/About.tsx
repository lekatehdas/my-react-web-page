import {Box, Image, SimpleGrid, GridItem} from '@chakra-ui/react';
import TechCarousel from "../components/TechCarousel.tsx";
import pic_me from '../assets/me_no_background_cropped.png';
import {Techs} from "../data/Techs.ts";
import PersonalCard from "../components/PersonalCard.tsx";

const About = () => {
    const techs = Object.values(Techs)

    return (
        <SimpleGrid
            columns={{sm: 1, md: 2}}
            h='calc(100vh - 45px)'
            gap={1}
            py={1}
        >

            <Box display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                <Box h="auto" w="auto">
                    <Image
                        src={pic_me}
                        alt="About Image"
                        borderRadius='xl'
                        boxSize="100%"
                    />
                </Box>
            </Box>

            <PersonalCard />

            <GridItem overflow={'hidden'} gridColumn={{ base: "1", md: "span 2" }} py={1}>
                <TechCarousel techs={techs} />
            </GridItem>

        </SimpleGrid>
    );
};

export default About;
