import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { HiDownload } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { CSVLink } from "react-csv";
import { useState } from "react";

const Transaction = () => {
  const records = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      subtype: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA3R",
      date: "2022-06-07",
      time: "02:48 PM",
      type: "INR Withdraw",
      subtype: "Wire Transfer",
      amount: "- ₹80,000.00",
      status: "Processing",
    },
    {
      id: "FG82NA2H",
      date: "2022-06-04",
      time: "09:21 AM",
      type: "Buy",
      amount: "+ 12.48513391 BTC",
      subamount: "- $81,123.10",
      status: "Cancelled",
    },
    {
      id: "HD93NA2V",
      date: "2022-06-03",
      time: "01:32 PM",
      type: "Sell",
      amount: "- 0.36401628 BTC",
      subamount: "+ $19,378.84",
      status: "Completed",
    },
    {
      id: "SD29NA9V",
      date: "2022-06-03",
      time: "09:02 AM",
      type: "BTC Deposit",
      subtype: "E-Transfer",
      amount: "+ 4.13946104 BTC",
      subamount: "+ $37,929.31",
      status: "Completed",
    },
    {
      id: "DR27NA2H",
      date: "2022-06-01",
      time: "01:56 PM",
      type: "BTC Withdraw",
      subtype: "E-Transfer",
      amount: "- 10.00000000 BTC",
      subamount: "- $62,017.58",
      status: "Completed",
    },
  ];

  const tabs = [
    {
      name: "All",
      tag: 349,
    },
    {
      name: "Deposit",
      tag: 114,
    },
    {
      name: "Withdraw",
      tag: 213,
    },
    {
      name: "Trade",
      tag: 22,
    },
  ];
  const colors = {
    Processing: "#F5A50B",
    Pending: "black.25",
    Cancelled: "#DC2626",
    Completed: "#059669",
  };

  const [data, setData] = useState(records);

  const filterContent = (e) => {
    const val = e.target.value;
    const filteredData = records.filter((rec) =>
      rec.id.toLowerCase().includes(val.toLowerCase())
    );
    setData(filteredData);
  };

  const sortedArray = () => {
    const dateConversion = records.map((a) => ({
      ...a,
      date: new Date(a.date),
    }));
    const sort = dateConversion.sort((a, b) => a.date - b.date);
    const sortedList = sort.map((item) => {
      const inputDate = new Date(item.date);
      const year = inputDate.getFullYear();
      const month = String(inputDate.getMonth() + 1).padStart(2, "0");
      const day = String(inputDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      return { ...item, date: formattedDate };
    });
    setData(sortedList);
  };

  return (
    <DashboardLayout title="Transactions">
      <Stack gap="12px">
        <Flex justifyContent="end">
          <Button
            leftIcon={<HiDownload fontSize="18px" />}
            borderRadius="10px"
            fontSize="14px"
            py="10px"
            px="16px"
            bg="#5F00D9"
            w="auto"
            color="#ffffff"
            _hover={{
              bg: "transparent",
              color: "p.purple",
              border: "1px",
              borderColor: "p.purple",
            }}
          >
            <CSVLink filename="my-file.csv" data={records}>
              Export CSV
            </CSVLink>
          </Button>
        </Flex>
        <Stack bg="white" borderRadius="16px" align="top" pt="14px">
          <Tabs>
            <TabList>
              <HStack
                alignItems="start"
                px="16px"
                flex="1"
                justifyContent="space-between"
              >
                <HStack>
                  {tabs.map((tab) => (
                    <Tab pb="25px" fontSize="14px" mt="0px">
                      {tab.name}{" "}
                      <Show above="md">
                      <Tag
                      borderRadius="100px"
                      fontSize="12px"
                      ml="8px"
                      px="6px"
                      py="4px"
                      color="black.25"
                      >
                      {tab.tag}
                      </Tag>
                      </Show>
                    </Tab>
                  ))}
                </HStack>
                <Show above="md">
                  <HStack pt="8px">
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <AiOutlineSearch color="gray" fontSize="20px" />
                      </InputLeftElement>
                      <Input
                        placeholder="Search by ID or destination"
                        border="none"
                        color="black.25"
                        px="8px"
                        fontSize="14px"
                        onChange={filterContent}
                      />
                    </InputGroup>
                  </HStack>
                </Show>
              </HStack>
            </TabList>

            <TabPanels>
              {[1, 2, 3, 4].map((a) => (
                <TabPanel>
                  <TableContainer>
                    <Table variant="simple">
                      <Thead mx="0px">
                        <Tr>
                          <Th fontSize="12px" color="black.25" p={{
                            base:"12px",
                            md:"auto"
                          }}>
                            ID
                          </Th>
                          <Show above="md">
                            <Th fontSize="12px" color="black.25" >
                              <HStack alignItems="center" gap="3px">
                                <Text>Date & Time</Text>
                                <Icon
                                  as={IoMdArrowDropdown}
                                  fontSize="16px"
                                  onClick={sortedArray}
                                />
                              </HStack>
                            </Th>
                            <Th fontSize="12px" color="black.25">
                              Type
                            </Th>
                          </Show>
                          <Th fontSize="12px" color="black.25" p={{
                            base:"15px",
                            md:"auto"
                          }}>
                            Amount
                          </Th>
                          <Th fontSize="12px" color="black.25" p={{
                            base:"15px",
                            md:"auto"
                          }}>
                            Status
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody px="24px" py="16px">
                        {data?.map((record) => (
                          <Tr>
                          <Td textStyle="h4" p={{
                            base:"12px",
                            md:"auto"
                          }}>
                          {record.id}
                          <Show below="md">
                                <Text
                                  textStyle={{
                                    base: "h6",
                                    md: "h4",
                                  }}
                                >
                                  {record.date}
                                </Text>
                                <Text textStyle="h6">{record.time}</Text>
                              </Show>
                            </Td>

                            <Show above="md">
                              <Td>
                                <Stack gap="2px">
                                  <Text textStyle="h4">{record.date}</Text>
                                  <Text textStyle="h6">{record.time}</Text>
                                </Stack>
                              </Td>
                            </Show>
                            <Show above="md">
                              <Td>
                                <Stack gap="2px">
                                  <Text textStyle="h4">{record.type}</Text>
                                  {record.subtype && (
                                    <Text textStyle="h6">{record.subtype}</Text>
                                  )}
                                </Stack>
                              </Td>
                            </Show>
                            <Td p={{
                              base:"15px",
                              md:"auto"
                            }}>
                              <Stack gap="2px">
                                <Text textStyle="h4">{record.amount}</Text>
                                {record.subamount && (
                                  <Text textStyle="h6">{record.subamount}</Text>
                                )}
                              </Stack>
                            </Td>
                            <Td p={{
                              base:"15px",
                              md:"auto"
                            }}>
                              <Tag
                                h="22px"
                                px="8px"
                                py="4px"
                                fontSize="12px"
                                color="white"
                                bg={colors[record.status]}
                                borderRadius="100px"
                              >
                                {record.status}
                              </Tag>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </DashboardLayout>
  );
};

export default Transaction;
