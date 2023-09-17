import { Center, Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

const Card = ({ children }) => {
  return (
    <Center h="100vh">
      <ChakraCard
        bg="white"
        maxW="fit-content"
        minH="fit-content"
        borderRadius="16px"
        boxShadow="0px 4px 25px 0px rgba(0, 0, 0, 0.12)"
        p="24px"
        mx="12px"
      >
        {children}
      </ChakraCard>
    </Center>
  );
};

export default Card;
