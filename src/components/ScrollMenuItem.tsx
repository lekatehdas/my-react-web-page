import { MenuItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import scrollTo from "../services/scrolling.ts";

interface Props {
  to: string;
  children: ReactNode;
}

const ScrollMenuItem = ({to, children}: Props) => {
  const handleClick = () => {
      scrollTo(to)
  };

  return (
    <MenuItem color="white" bg="secondary.500" _hover={{ bg: "secondary.600" }} onClick={handleClick}>
      {children}
    </MenuItem>
  );
};

export default ScrollMenuItem;
