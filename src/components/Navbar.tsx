import {HStack, Box, Spacer, Image} from "@chakra-ui/react";
import NavMenu from "./NavMenu.tsx";
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <HStack
            alignContent={'center'}
            w="full"
            bgColor={'main'}
        >
            <Box flex="1" fontWeight={'bold'}>
                <h1 color={'secondary'}>Aki S.</h1>
            </Box>
            <Spacer/>
            <Box flex="1" display="flex" justifyContent="center">
                <Image
                    src={logo}
                    alt="Logo"
                    maxHeight="5vh"
                    borderRadius={'50%'}
                    paddingTop={1}
                    paddingBottom={1}
                    filter={'invert(60%) sepia(13%) saturate(694%) hue-rotate(152deg) brightness(85%) contrast(82%)'}
                />
            </Box>
            <Spacer/>
            <Box flex="1" display="flex" justifyContent="end" width="100%" paddingTop={1} paddingBottom={1}>
                <NavMenu/>
            </Box>
        </HStack>
    );
};

export default Navbar;
