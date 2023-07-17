import {HStack, Box, Spacer, Image} from "@chakra-ui/react";
import NavMenu from "./NavMenu.tsx";
import logo from '../assets/react.svg';

const Navbar = () => {
    return (
        <HStack
            alignContent={'center'}
            paddingX={2}
            w="full"
        >
            <Box flex="1">
                <h1>Aki S.</h1>
            </Box>
            <Spacer />
            <Box flex="1" display="flex" justifyContent="center" width="100%">
                <Image src={logo} alt="Logo"/>
            </Box>
            <Spacer />
            <Box flex="1" display="flex" justifyContent="end" width="100%">
                <NavMenu/>
            </Box>
        </HStack>
    );
};

export default Navbar;
