import {IconButton, Menu, MenuButton, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import ScrollMenuItem from "./ScrollMenuItem.tsx";
import {MenuItemPros} from "./NavMenu.tsx";

interface Props {
    items: MenuItemPros[]
}
const BurgerMenu = ({items}: Props) => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon/>}
                variant='outline'
            />
            <MenuList bg='secondary'>
                {items.map((item) =>
                    <ScrollMenuItem key={item.to} to={item.to}>{item.text}</ScrollMenuItem>
                )}
            </MenuList>
        </Menu>
    );
};

export default BurgerMenu;
