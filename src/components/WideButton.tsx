import {ReactNode} from "react";
import {Button} from "@chakra-ui/react";

interface Props {
    children: ReactNode
}

const WideButton = ({children}: Props) => {
    return (
        <Button
            colorScheme='highlight'
            variant='solid'
            width={['100%', 'auto']}
            borderRadius={"3xl"}
        >
            {children}
        </Button>
    );
};

export default WideButton;
