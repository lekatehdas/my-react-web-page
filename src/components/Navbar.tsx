import {HStack, Box, Image, Text} from "@chakra-ui/react";
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
                <Text color={'secondary'} fontSize={'md'} whiteSpace={'nowrap'}>Aki Sirkiä</Text>
            </Box>

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

            <Box flex="1" display="flex" justifyContent="end" width="100%" paddingTop={1} paddingBottom={1}>
                <NavMenu/>
            </Box>
        </HStack>
    );
};

export default Navbar;
