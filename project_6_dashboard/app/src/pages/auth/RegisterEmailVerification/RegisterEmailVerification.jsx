import React, { useEffect } from "react";
import Card from "../../../components/Card";
import { GrMail } from "react-icons/gr";
import { useLocation, useParams } from "react-router";
import { Box, Button, Center, Icon, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

const RegisterEmailVerification = () => {
  const {email} = useParams();
  const toast = useToast()
    
  if(email === ""){
    return <Center h="100vh">Invalid Email</Center>
  }
  

  const {mutate, isSuccess, isLoading} = useMutation({
    mutationKey: ['send-verification-mail'],
    mutationFn: sendVerificationMail,
    onSettled:(data) =>{
      console.log(data, "send mail verification")
    },
    onError: (error) => {
      toast({
        title:"Signup Error",
        description: error.message,
        status: "error",
      })
    },
    enabled: !!email,
  })

  useEffect(() => {
    mutate({ email })
  }, [email])


  return (
    <Card>
    <Stack justify="center" alignItems="center" gap="24px" p="16px">
      <Icon
        as={GrMail}
        color="p.purple"
        fontSize="48px"
        minW={{
          base: "361px",
          md: "408px",
        }}
      />
      <Box>
        <Text textStyle="h8" align="center">
        Email Verification
        </Text>
        <Text
          maxW="408px"
          textAlign="center"
          fontSize="14px"
          color="black.25"
          mt="16px"
        >
        We have sent you an email verification to <Box as="b" color='p.black'>{email}. </Box>
        If you didn’t receive it, click the button below.
        </Text>
      </Box>
      <Box w="100%">
            <Button
              variant="form-btn-outline"
              onClick={() => {
                mutate({ email });
              }}
              isLoading={isLoading}
            >
            Re-Send Email
            </Button>
        
      </Box>
    </Stack>
  </Card>
  );
};

export default RegisterEmailVerification;
