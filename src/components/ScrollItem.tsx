import React, {ReactNode} from "react";
import { Link as ScrollLink } from 'react-scroll';

interface ScrollItemProps {
  to: string;
  children: ReactNode;
}

const ScrollItem: React.FC<ScrollItemProps> = ({to, children}) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-40}
    duration={500}
  >
    {children}
  </ScrollLink>
);

export default ScrollItem;
