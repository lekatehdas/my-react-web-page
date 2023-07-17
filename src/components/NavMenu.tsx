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
          {(props) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList bg='secondary'>
                <ScrollMenuItem to="about" onClick={props.onClose}>About</ScrollMenuItem>
                <ScrollMenuItem to="projects" onClick={props.onClose}>Projects</ScrollMenuItem>
                <ScrollMenuItem to="contact" onClick={props.onClose}>Contact</ScrollMenuItem>
              </MenuList>
            </>
          )}
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
