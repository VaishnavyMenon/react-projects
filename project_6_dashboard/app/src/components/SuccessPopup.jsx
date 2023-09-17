import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SuccessPopup = ({
  icon,
  iconColor,
  title,
  subtext,
  button = false,
  buttonvariant,
  link,
}) => {
  return (
    <Stack justify="center" alignItems="center" gap="24px" p="16px">
      <Icon
        as={icon}
        color={iconColor}
        fontSize="48px"
        minW={{
          base: "361px",
          md: "408px",
        }}
      />
      <Box>
        <Text textStyle="h8" align="center">
          {title}
        </Text>
        <Text
          maxW="408px"
          textAlign="center"
          fontSize="14px"
          color="black.25"
          mt="16px"
        >
          {subtext}
        </Text>
      </Box>
      <Box w="100%">
        {button && (
          <Link to={link}>
            <Button variant={buttonvariant}>{button}</Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
};

export default SuccessPopup;
