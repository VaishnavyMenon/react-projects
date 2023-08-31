import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
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
            base:"8px",
            md:"12px"
        }}>
            <Text fontSize="32px" color="p.black" fontWeight="bold">{title}</Text>
            <Text fontSize="14px" color="black.30" flexDir="wrap">{subText}</Text>
        </Stack>
      </Stack>
      <Stack minW="520px">{container}</Stack>
    </HStack>
  );
};

export default SupportContainer;
