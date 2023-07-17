import React, {ReactNode} from "react";
import { MenuItem } from "@chakra-ui/react";
import ScrollItem from './ScrollItem';

interface ScrollMenuItemProps {
  to: string;
  children: ReactNode;
}

const ScrollMenuItem: React.FC<ScrollMenuItemProps> = ({ to, children, ...props }) => {
  return (
    <MenuItem {...props}>
      <ScrollItem to={to}>{children}</ScrollItem>
    </MenuItem>
  );
};

export default ScrollMenuItem;
