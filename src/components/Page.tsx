import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import {Element} from 'react-scroll';

interface Props {
    id: string
    children: ReactNode
    bg: string
}

const Page = ({id, children, bg}: Props) => {
    return (
        <Box h="95vh" id={id} w="full" bg={bg}>
            <Element name={id}>
                {children}
            </Element>
        </Box>
    )
};

export default Page;
