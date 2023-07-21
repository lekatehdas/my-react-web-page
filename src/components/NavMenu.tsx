import {useBreakpointValue} from "@chakra-ui/react";
import BurgerMenu from "./BurgerMenu.tsx";
import OpenMenu from "./OpenMenu.tsx";

export interface MenuItemPros {
    to: string
    text: string
}
const NavMenu = () => {
    const isDrawer = useBreakpointValue({base: true, md: false});
    const menuItems: MenuItemPros[] = [
        {to: "about", text: "About"},
        {to: "projects", text: "Projects"},
        {to: "contact", text: "Contact"},
    ]

    return (
        <>
            {isDrawer ? (<BurgerMenu items={menuItems}/>) : (<OpenMenu items={menuItems}/>)}
        </>
    );
};

export default NavMenu;
