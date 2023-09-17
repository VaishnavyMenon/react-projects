import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, boolean, ref } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/userQuery";

const signupValidationSchema = object({
  firstname: string().required("First name is required"),
  lastname: string().required("Last name is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmpassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Field is required"),
  checkbox: boolean()
    .oneOf([true, null], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const SignUp = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSettled: async (data) => {
      if (email) {
        navigate(`/email-verification/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Card>
      <Stack gap="40px">
        <Stack gap="16px">
          <Text textStyle="h7" fontWeight="medium" lineHeight="36px">
            Welcome to{" "}
            <Text as="span" color="p.purple">
              Crypto Admin
            </Text>
          </Text>
          <Text
            textStyle="h5"
            color="black.25"
            lineHeight="18px"
            fontWeight="500"
          >
            Create a free account.
          </Text>
        </Stack>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            checkbox: false,
          }}
          onSubmit={(values) => {
            mutate({
              email: values.email,
              password: values.password,
              firstName: values.firstname,
              lastName: values.lastname,
            });
          }}
          validationSchema={signupValidationSchema}
        >
          {() => (
            <Form>
              <Stack gap="24px">
                <Flex gap="24px">
                  <Field name="firstname">
                    {({ field, meta }) => (
                      <FormControl
                        gap="8px"
                        isInvalid={!!(meta.error && meta.touched)}
                      >
                        <FormLabel htmlFor="firstname">
                          <Text variant="form-label">First Name</Text>
                        </FormLabel>
                        <Input
                          {...field}
                          name="firstname"
                          type="text"
                          placeholder="John"
                          fontSize="14px"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastname">
                    {({ field, meta }) => (
                      <FormControl
                        gap="8px"
                        isInvalid={!!(meta.error && meta.touched)}
                      >
                        <FormLabel htmlFor="lastname">
                          <Text variant="form-label">Last Name</Text>
                        </FormLabel>
                        <Input
                          {...field}
                          name="lastname"
                          type="text"
                          placeholder="Doe"
                          fontSize="14px"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl
                      gap="8px"
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <FormLabel htmlFor="email">
                        <Text variant="form-label">Email</Text>
                      </FormLabel>
                      <Input
                        {...field}
                        name="email"
                        type="email"
                        placeholder="abc@email.com"
                        fontSize="14px"
                      />
                      {setEmail(field.value)}
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl
                      gap="8px"
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <FormLabel htmlFor="password">
                        <Text variant="form-label">Password</Text>
                      </FormLabel>
                      <Input
                        {...field}
                        name="password"
                        type="password"
                        placeholder="Password"
                        fontSize="14px"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="confirmpassword">
                  {({ field, meta }) => (
                    <FormControl
                      gap="8px"
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <FormLabel htmlFor="confirmpassword">
                        <Text variant="form-label">Confirm Password</Text>
                      </FormLabel>
                      <Input
                        {...field}
                        name="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                        fontSize="14px"
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="checkbox">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <Checkbox
                        {...field}
                        name="checkbox"
                        gap="8px"
                        colorScheme="purple"
                      >
                        <Text fontSize="12px">
                          I agree with{" "}
                          <Box as="span" color="p.purple">
                            Terms & Conditions.
                          </Box>
                        </Text>
                      </Checkbox>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button isLoading={isLoading} type="submit" variant="form-btn">
                  Create Account
                </Button>
                <Center>
                  <Text fontSize="12px" color="black.25" fontWeight="500">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <Box as="span" color="p.purple">
                        Log In
                      </Box>
                    </Link>
                  </Text>
                </Center>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Card>
  );
};

export default SignUp;
