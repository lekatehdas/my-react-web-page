import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    id: string
    children: ReactNode
    bg: string
}

const Page = ({id, children, bg}: Props) => {
    return (
        <Box h="95vh" id={id} w="full" bg={bg}>
            {children}
        </Box>
    )
};

export default Page;
