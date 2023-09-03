import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "8:15 PM", "9:15 PM", "10:15 PM", "11:15 PM"]

  return (
    <Stack borderRadius="16px" bg="#ffffff" p="24px">
      <HStack justify="space-between" align="start">
        <Stack gap="10px">
          <Text textStyle="h5">Current Price</Text>
          <HStack gap={{
            base:"2px",
            md:"8px"
          }} align="center">
            <Text textStyle="h1">₹26,670.25</Text>
            <HStack gap={{
              base:"2px",
              md:"2px"
            }}>
              <Icon as={BsArrowUpRight} fontSize={{
                base:"10px",
                md:"12px"
              }} color="#059669" />
              <Text fontSize={{
                base:"12px",
                md:"14px"
              }} color="#059669" fontWeight="bold">
                0.04%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button
            leftIcon={<BsFillPlusCircleFill />}
            bg="#5F00D9"
            color="white"
            fontSize="14px"
            _hover={{
              bg: "#ffffff",
              color: "p.purple",
              border: "1px",
              borderColor: "p.purple",
            }}
          >
            Buy
          </Button>
          <Button
            leftIcon={<BiSolidMinusCircle />}
            bg="p.purple"
            color="#ffffff"
            fontSize="14px"
            _hover={{
              bg: "#ffffff",
              color: "p.purple",
              border: "1px",
              borderColor: "p.purple",
            }}
          >
            Sell
          </Button>
        </HStack>
      </HStack>
      <Stack>
      <Tabs variant='soft-rounded'>
      <Flex justify="end" mb="45px">
        <TabList borderRadius="6px" bg="black.5" p="3px" gap="8px">
        {["1H", "1D", "1W", "1M"].map((a,i) => <Tab key={i} color="black.25" p="6px" borderRadius="4px" fontSize="12px"  _selected={{ color: 'p.black', bg: 'white' }}>{a}</Tab>)}
        </TabList>
      </Flex>
        <TabPanels >
          <TabPanel>
            <Image  src="/graph_4.png"/>
          </TabPanel>
          <TabPanel>
            <Image  src="/graph_2.png"/>
          </TabPanel>
          <TabPanel>
            <Image src="/graph_3.png"/>
          </TabPanel>
          <TabPanel>
            <Image src="/graph_4.png"/>
          </TabPanel>
          
        </TabPanels>
      </Tabs> 
      <HStack p="5px" justifyContent="space-between" fontSize="12px" color="black.25" mt="5px">
          {timestamps.map((time)=><Text>{time}</Text>)}
          </HStack>
      </Stack>
    </Stack>
  );
};

export default PriceSection;
