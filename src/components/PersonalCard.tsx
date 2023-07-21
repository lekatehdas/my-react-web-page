import {Box, Card, Stack, Text} from "@chakra-ui/react";
import cv from "../assets/Aki_S_CV.pdf";
import WideButton from "./WideButton.tsx";
import scrollTo from "../services/scrolling.ts";

const PersonalCard = () => {
    function handleOnClick() {
        scrollTo('contact')
    }

    return (
            <Box pt={{base: '0', md: '16vh'}}>
                <Card bg="white" boxShadow="lg" p={6} rounded="md" h={'min-content'}>

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


                    <Stack direction={['column', 'row']} spacing={2} paddingTop={3}>
                        <a href={cv} download>
                            <WideButton>Download CV</WideButton>
                        </a>
                        <Box onClick={handleOnClick}>
                            <WideButton>Hire Me</WideButton>
                        </Box>
                    </Stack>
                </Card>
            </Box>
    );
};

export default PersonalCard;
