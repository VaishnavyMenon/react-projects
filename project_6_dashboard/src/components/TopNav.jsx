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
        <Icon as={FaBars} ml="12px" onClick={onOpen} fontSize="25px" cursor="pointer" display={{
          base:"block",
          lg:"none"
      }}/>
      <HStack w="100%" maxW="1000px" justify="space-between" py="15px" mx="auto" px="18px" >
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
            <a href={`/support`}><MenuItem>Support</MenuItem></a>
          </MenuList>
        </Menu>
      </HStack>
      </HStack>
    </Box>
  );
};

export default TopNav;
