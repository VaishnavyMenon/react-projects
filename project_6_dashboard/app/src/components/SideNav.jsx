import { Stack, Icon, HStack, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GoArrowSwitch } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideNav = ({ active }) => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GoArrowSwitch,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      h="full"
      position="fixed"
      pt="54px"
      justify="space-between"
      fontWeight="medium"
      zIndex={1}
      bg="#ffffff"
      minW={{
        base: "full",
        lg: "256px",
      }}
    >
      <Box>
        <Heading
          as="h1"
          fontSize="24px"
          fontWeight="medium"
          color="#5F00D9"
          pb="24px"
          pl="28px"
        >
          Dashboard.
        </Heading>
        {navLinks.map((el) => (
          <Link to={el.link} key={el.text}>
            <HStack
              gap="3"
              py="14px"
              mx="12px"
              pl="4"
              bg={active === el.text ? "black.5" : "auto"}
              color={active === el.text ? "#171717" : "black.25"}
              borderRadius={active === el.text ? "10px" : "auto"}
              _hover={{
                bg: "black.5",
                color: "#171717",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <Icon as={el.icon} fontSize="18px" color />
              <Text fontSize="16px">{el.text}</Text>
            </HStack>
          </Link>
        ))}
      </Box>
      <Box>
        <Link to="/support">
          <HStack
            gap="3"
            mb="20px"
            py="14px"
            mx="12px"
            pl="4"
            bg={active === "Support" ? "black.5" : "auto"}
            color={active === "Support" ? "#171717" : "black.25"}
            borderRadius={active === "Support" ? "10px" : "auto"}
            _hover={{
              bg: "black.5",
              color: "#171717",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            _selected={{ color: "red" }}
          >
            <Icon as={BiSupport} fontSize="18px" color />
            <Text fontSize="16px">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
