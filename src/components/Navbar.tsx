import {HStack} from "@chakra-ui/react";
import NavMenu from "./NavMenu.tsx";

const Navbar = () => {
    return (
        <HStack
            justifyContent={'space-between'}
            alignContent={'center'}
            paddingX={2}
        >
            <h1>Aki S.</h1>
            <h3>Logo</h3>
            <NavMenu/>
        </HStack>
    );
};

export default Navbar;
