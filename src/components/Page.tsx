import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import {Element} from 'react-scroll';

interface Props {
    id: string
    children: ReactNode
}

const Page = ({id, children}: Props) => {
    return (
        <Box h="95vh" id={id} w="full">
            <Element name={id}>
                {children}
            </Element>
        </Box>
    )
};

export default Page;
