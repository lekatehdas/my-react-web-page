import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import {Element} from 'react-scroll';

interface Props {
    id: string
    /**
     * The height of the page. Must be a CSS accepted value.
     * Note: The navbar height will be subtracted from this value.
     */
    height? :string
    children: ReactNode
}

const Page = ({id, children, height}: Props) => {
    return (
        <Box h={height ? `calc(${height} - 45px)` : 'calc(100vh - 45px)'} id={id} w="full">
            <Element name={id}>
                {children}
            </Element>
        </Box>
    )
};

export default Page;
