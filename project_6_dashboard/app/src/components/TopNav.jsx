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
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TopNav = ({ title, onOpen }) => {
  const { logout } = useAuth();
  return (
    <Box h="75px" w="100%" alignItems="center" bg="white">
      <HStack>
        <Icon
          as={FaBars}
          ml="12px"
          onClick={onOpen}
          fontSize="25px"
          cursor="pointer"
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <HStack
          w="100%"
          maxW="1000px"
          justify="space-between"
          py="15px"
          mx="auto"
          px="18px"
        >
          <Heading as="h1" fontSize="28px" fontWeight="700">
            {title}
          </Heading>
          <Menu>
            <MenuButton>
              <Icon as={BiUserCircle} fontSize="40px" fontWeight="light" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logout}>Logout</MenuItem>
              <Link to="/support">
                <MenuItem>Support</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default TopNav;
