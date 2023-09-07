import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      gap={{
        xl:"130px",
        base:"30px",
      }}
      bg="#ffffff"
      borderRadius="16px"
      p="24px"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: "6",
        xl: "0",
      }}
      
    >
      <HStack
        gap={{
          base: "20px",
          xl: "30px",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack gap="1px">
            <Text textStyle="h5">Total Portfolio Value</Text>
            <Popover placement="top">
              <PopoverTrigger>
                <Box pl="4px">
                  <Icon
                    as={AiOutlineInfoCircle}
                    fontSize="16px"
                    color="black.25"
                    p="auto"
                  />
                </Box>
              </PopoverTrigger>
              <PopoverContent p={3}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody fontSize="12px">
                  The total monetary value of the assets held in your investment
                  portfolio. Finding your portfolio value involves first
                  calculating the monetary value of each individual asset, then
                  adding all of those values together.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <Text textStyle="h1">₹ 112,312.24</Text>
        </Stack>
        <Box
          h="58px"
          w="0.5px"
          bg="black.10"
          borderRadius="0.5px"
          display={{
            base: "none",
            xl: "block",
          }}
        ></Box>
        <Stack>
          <Text textStyle="h5">Wallet Balances</Text>
          <HStack
            gap="20px"
          >
            <HStack
              gap={{
                base: "6px",
                xl: "4px",
              }}
            >
              <Text textStyle="h2">B 22.39401000</Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack
              gap={{
                base: "6px",
                xl: "4px",
              }}
            >
              <Text textStyle="h2">₹ 1,300.00</Text>
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack
        gap={{
          base: "14px",
          xl: "8px",
        }}
      >
        <Button
          borderRadius="10px"
          gap="8px"
          bg="#5F00D9"
          h="38px"
          w="107px"
          color="#ffffff"
          _hover={{
            bg: "transparent",
            color: "p.purple",
            border: "1px",
            borderColor: "p.purple",
          }}
        >
          <Icon fontSize="16px" as={HiDownload} />
          <Text fontSize="14px" fontWeight="medium">
            Deposit
          </Text>
        </Button>
        <Button
          borderRadius="10px"
          gap="8px"
          bg="#5F00D9"
          h="38px"
          w="107px"
          color="#ffffff"
          _hover={{
            bg: "transparent",
            color: "p.purple",
            border: "1px",
            borderColor: "p.purple",
          }}
        >
          <Icon fontSize="16px" as={HiUpload} />
          <Text fontSize="14px" fontWeight="medium">
            Withdraw
          </Text>
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
