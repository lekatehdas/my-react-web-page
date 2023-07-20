import {Box, HStack, Link} from '@chakra-ui/react';
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {Icon} from "@chakra-ui/icons";

const Footer = () => {
    return (
        <HStack>
            <Box>&copy; 2023 Aki Sirkiä</Box>

            <Link href="https://github.com/lekatehdas" isExternal>
                <Icon as={SiGithub} color={'secondary'}/>
            </Link>

            <Link href="https://www.linkedin.com/in/aki-sirki%C3%A4-5397a8272/" isExternal ml={2}>
                <Icon as={SiLinkedin} color={'secondary'}/>
            </Link>
        </HStack>

    );
};

export default Footer;
