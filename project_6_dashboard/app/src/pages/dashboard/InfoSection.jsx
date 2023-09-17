import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InfoSection = ({ tag, text, pColor, sColor, tColor, bgImage }) => {
  return (
    <Stack
      borderRadius="16px"
      bg={pColor}
      p="24px"
      gap="16px"
      bgImage={bgImage}
      bgSize="cover"
    >
      <Box
        py="4px"
        px="10px"
        fontSize="12px"
        w="fit-content"
        borderRadius="100px"
        fontWeight="medium"
        bg={sColor}
        color={pColor}
      >
        {tag}
      </Box>
      <Text fontSize="16px" fontWeight="medium" maxW="420px" color={tColor}>
        {text}
      </Text>
    </Stack>
  );
};

export default InfoSection;
