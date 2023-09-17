import React from "react";
import Card from "../../../components/Card";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { forgotPasswordMail } from "../../../api/query/userQuery";

const ForgotPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPasswordMail,
    onSuccess: () => {
      navigate("/email-success");
    },
    onError: () => {
      toast({
        title: "Password Reset Error",
        description: error.message,
        status: "error",
      });
    },
  });
  const forgotPasswordValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });
  return (
    <Card>
      <Stack gap="32px">
        <Stack gap="16px">
          <Link to="/signin">
            <Icon as={AiOutlineArrowLeft} color="p.black" fontSize="24px" />
          </Link>
          <Text
            fontSize="28px"
            fontWeight="medium"
            lineHeight="32px"
            color="p.black"
          >
            Forgot Password
          </Text>
          <Text maxW="408px" fontSize="14px" color="black.25" mt="16px">
            Enter your email address for which account you want to reset your
            password.
          </Text>
        </Stack>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={({ email }) => {
            mutate({ email });
          }}
          validationSchema={forgotPasswordValidationSchema}
        >
          <Form>
            <Stack gap="24px">
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="email">
                      <Text variant="form-label" mb="8px">
                        Email
                      </Text>
                    </FormLabel>
                    <Input
                      {...field}
                      type="email"
                      name="email"
                      placeholder="abc@email.com"
                      borderRadius="8px"
                      fontSize="14px"
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button isLoading={isLoading} type="submit" variant="form-btn">
                Reset Password
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Card>
  );
};

export default ForgotPassword;
