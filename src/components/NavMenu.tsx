import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  HStack,
  Link
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const NavMenu = () => {
  const isDrawer = useBreakpointValue({ base: true, lg: false });

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
            <MenuItem as={Link} to="about" smooth={true} offset={-70} duration={500}>About</MenuItem>
            <MenuItem as={Link} to="projects" smooth={true} offset={-70} duration={500}>Projects</MenuItem>
            <MenuItem as={Link} to="contact" smooth={true} offset={-70} duration={500}>Contact</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing={5}>
          <Link to="about" smooth={true} offset={-70} duration={500}>About</Link>
          <Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>
        </HStack>
      )}
    </>
  );
};

export default NavMenu;
