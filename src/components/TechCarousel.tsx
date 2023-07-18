import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Box, Text} from "@chakra-ui/react";

interface Props {
    techs: string[];
}

const TechCarousel = ({techs}: Props) => {
    const items = techs.map((tech, index) => (
        <Box
            key={index}
            bg={'secondary'}
            marginX={1}
            borderRadius={"xl"}
        >
            <Text
                paddingX={1}
                textAlign={'center'}
                color={'main'}
            >{tech}</Text>
        </Box>
    ));

    return (
        <AliceCarousel
            autoPlay
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            autoPlayInterval={3000}
            responsive={{
                0: {
                    items: 3,
                },
                1024: {
                    items: 3,
                }
            }}
        />
    );
};

export default TechCarousel;
