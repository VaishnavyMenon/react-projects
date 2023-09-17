import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [proceed, setProceed] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setProceed(true);
    name && surname && email && checked && setProceed(false);
  });

  return (
    <Card
      p="24px"
      gap="32px"
      maxW={{
        base: "100%",
        xl: "550px",
      }}
      borderRadius="16px"
    >
      <Text textStyle="h4" fontWeight="bold">
        {" "}
        You will receive response within 24 hours of time of submit.
      </Text>
      <Flex flexWrap="wrap" gap="24px" w="100%">
        <HStack
          w="100%"
          justifyContent="space-between"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <Text textStyle="h6" fontWeight="bold">
              Name
            </Text>
            <Input
              fontSize="12px"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Stack>
          <Stack
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <Text textStyle="h6" fontWeight="bold">
              Surname
            </Text>
            <Input
              fontSize="12px"
              type="text"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </Stack>
        </HStack>
        <Stack w="100%">
          <Text textStyle="h6" fontWeight="bold">
            Email
          </Text>
          <Input
            fontSize="12px"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Stack w="100%" size="lg">
          <Text textStyle="h6" fontWeight="bold">
            Message
          </Text>
          <Textarea
            fontSize="12px"
            placeholder="Message"
            py="10px"
            onChange={(e) => setText(e.target.value)}
          />
        </Stack>
      </Flex>
      <Checkbox
        colorScheme="purple"
        isChecked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        <Text fontSize="12px">
          I agree with{" "}
          <Box as="span" color="p.purple">
            Terms & Conditions.
          </Box>{" "}
        </Text>
      </Checkbox>
      <Stack>
        <Button
          w="100%"
          isDisabled={proceed}
          fontSize="14px"
          bg="p.purple"
          color="white"
        >
          Send a Message
        </Button>
        <Button w="100%" fontSize="14px">
          Book a Meeting
        </Button>
      </Stack>
    </Card>
  );
};

export default ContactSection;
