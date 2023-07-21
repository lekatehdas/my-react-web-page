import {Box, HStack} from "@chakra-ui/react";
import {MenuItemPros} from "./NavMenu.tsx";
import scrollTo from "../services/scrolling.ts";

interface Props {
    items: MenuItemPros[]
}
const OpenMenu = ({items}: Props) => {
    function handleOnClick(destination: string) {
        scrollTo(destination)
    }

    return (
        <HStack spacing={5}>
            {items.map(item =>
            <Box cursor={'pointer'} onClick={() => handleOnClick(item.to)}>
                {item.text}
            </Box>
            )}
        </HStack>
    );
};

export default OpenMenu;
