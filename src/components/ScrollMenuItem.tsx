// ScrollMenuItem.tsx
import { MenuItem, MenuItemProps } from '@chakra-ui/react';
import ScrollItem from './ScrollItem';
import React, { ReactNode } from 'react';

interface ScrollMenuItemProps extends MenuItemProps {
  to: string;
  children: ReactNode;
}

const ScrollMenuItem: React.FC<ScrollMenuItemProps> = ({ to, children, ...props }) => {
  return (
    <MenuItem color="white" bg="secondary.500" _hover={{ bg: "secondary.600" }} {...props}>
      <ScrollItem to={to}>{children}</ScrollItem>
    </MenuItem>
  );
};

export default ScrollMenuItem;
