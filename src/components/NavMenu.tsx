// NavMenu.tsx
import { Menu, MenuButton, MenuList, IconButton, useBreakpointValue, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ScrollItem from './ScrollItem';
import ScrollMenuItem from './ScrollMenuItem';

const NavMenu = () => {
  const isDrawer = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isDrawer ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <ScrollMenuItem to="about">About</ScrollMenuItem>
            <ScrollMenuItem to="projects">Projects</ScrollMenuItem>
            <ScrollMenuItem to="contact">Contact</ScrollMenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing={5}>
          <ScrollItem to="about">About</ScrollItem>
          <ScrollItem to="projects">Projects</ScrollItem>
          <ScrollItem to="contact">Contact</ScrollItem>
        </HStack>
      )}
    </>
  );
};

export default NavMenu;
