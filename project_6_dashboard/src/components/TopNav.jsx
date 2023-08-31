import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const TopNav = ( {title, onOpen} ) => {
  return (
    <Box h="75px" w="100%" alignItems="center" bg="white">
    <HStack>
        <Icon as={FaBars} ml="12px" onClick={onOpen} fontSize="25px" display={{
          base:"block",
          lg:"none"
      }}/>
      <HStack w="100%" maxW="1000px" minW="468px" justify="space-between" py="15px" mx="auto" px="24px">
        <Heading as="h1" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon
              as={BiUserCircle}
              fontSize="40px"
              fontWeight="light"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      </HStack>
    </Box>
  );
};

export default TopNav;
