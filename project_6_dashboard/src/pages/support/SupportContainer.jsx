import { Grid, GridItem, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import InfoSection from "../dashboard/InfoSection";


const SupportContainer = ({icon, title, subText, container}) => {
  return (
    
    <HStack alignItems="start" justifyContent="space-between" maxW="950px" gap="24px" flexDirection={{
      base: "column",
      xl: "row",
    }}>
    <Stack gap="12px" flexDirection={{
      base: "row",
      xl: "column",
    }} >
    <Icon as={icon} fontSize="24px" color="p.purple" mt={{
      base:"10px",
      xl:"0px"
    }}/>
    <Stack gap={{
      base:"0px",
      md:"12px"
    }}>
    <Text textStyle="h7">{title}</Text>
    <Text textStyle="h5" flexDir="wrap">{subText}</Text>
    </Stack>
    </Stack>
    <Stack minW={{
      base:"100%",
      md:"520px"
    }}>{container}</Stack>
    </HStack>
    
  );
};

export default SupportContainer;
