import {
  Button,
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
import { Field, Formik, Form } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { signInUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";

const signinValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const toast = useToast();
  const { login } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signInUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        login(token);
      }
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Card>
      <Stack gap="40px">
        <Stack gap="16px">
          <Text textStyle="h7" fontWeight="medium" lineHeight="36px" w="408px">
            Login{" "}
          </Text>
          <Text
            textStyle="h5"
            color="black.25"
            lineHeight="18px"
            fontWeight="500"
          >
            Welcome back to{" "}
            <Text as="span" color="p.purple">
              Crypto Admin
            </Text>
          </Text>
        </Stack>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            mutate(values);
          }}
          validationSchema={signinValidationSchema}
        >
          <Form>
            <Stack gap="24px">
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl
                    gap="8px"
                    isInvalid={!!(meta.error && meta.touched)}
                  >
                    <FormLabel htmlFor="email">
                      <Text
                        textStyle="h6"
                        color="p.black"
                        fontWeight="500"
                        lineHeight="14px"
                      >
                        Email
                      </Text>
                    </FormLabel>
                    <Input
                      {...field}
                      name="email"
                      type="email"
                      placeholder="abc@email.com"
                      fontSize="14px"
                    />
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
              <Flex justify="space-between">
                <Checkbox colorScheme="purple">
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="14px"
                    color="p.black"
                  >
                    Remember me
                  </Text>
                </Checkbox>
                <Link to="/forgot-password">
                  <Text variant="form-label" color="p.purple">
                    Forgot Password?
                  </Text>
                </Link>
              </Flex>
              <Stack gap="12px">
                <Button isLoading={isLoading} type="submit" variant="form-btn">
                  Login
                </Button>
                <Link to="/signup">
                  <Button variant="form-btn-outline">Create New Account</Button>
                </Link>
              </Stack>
            </Stack>
          </Form>
        </Formik>
      </Stack>
    </Card>
  );
};

export default SignIn;
