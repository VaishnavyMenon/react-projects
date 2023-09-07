import { Box, Grid, HStack, Icon, Stack, Text, Button, Divider } from "@chakra-ui/react";
import { TbCoinRupee } from "react-icons/tb";
import { TbCoinBitcoin } from "react-icons/tb";

const TransactionsSection = () => {
  const transactions = [
    {
      icon: TbCoinRupee,
      text: "INR Deposit",
      subText: "2022-06-09 7:06 PM",
      amt: "+ ₹81,123.10",
    },
    {
      icon: TbCoinBitcoin,
      text: "BTC Sell",
      subText: "2022-05-27 12:32 PM",
      amt: "- 12.48513391 BTC",
      subAmt: "+ $81,123.10",
    },
    {
      icon: TbCoinRupee,
      text: "INR Deposit",
      subText: "2022-04-19 9:54 AM",
      amt: "+ ₹65,763.50",
    },
  ];
  return (
    <Stack borderRadius="16px" bg="#ffffff" p="24px" gap="25px">
      <Text textStyle="h5"  mb="8px">Recent Transactions</Text>
      <Stack gap="16px">
      {transactions.map((rec, index) => (
        <Stack gap="16px" key={index}>
          <HStack gap="16px" justifyContent="space-between">
            <Grid
              h="40px"
              w="40px"
              borderRadius="100%"
              bg="black.5"
              placeItems="center"
            >
              <Icon fontSize="20px" as={rec.icon} />
            </Grid>
            <HStack justify="space-between" w="full">
              <Stack gap="4px">
                <Text textStyle="h3">{rec.text}</Text>
                <Text fontSize="14px" color="black.25">
                  {rec.subText}
                </Text>
              </Stack>
              <Stack gap="4px" align="flex-end">
                <Text textStyle="h3" fontWeight="bold">{rec.amt}</Text>
                {rec.subAmt} &&
                <Text fontSize="14px" color="black.25">
                  {rec.subAmt}
                </Text>
              </Stack>
            </HStack>
          </HStack>
          {transactions.length - 1 !== index && <Stack alignItems="end">
          <Divider />
        </Stack>}
          
        </Stack>
      ))}
      </Stack>
      <Button w="100%">View All</Button>
    </Stack>
  );
};

export default TransactionsSection;
