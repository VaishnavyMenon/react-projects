import React from "react";
import Card from "../../../components/Card";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { object, ref, string } from "yup";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router";
import { verifyForgotMail } from "../../../api/query/userQuery";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: verifyForgotMail,
    onSuccess: () => {
      navigate("/reset-success");
    },
    onError: () => {
      toast({
        title: "Reset Password Error",
        description: error.message,
        status: "error",
      });
    },
  });
  const resetPasswordValidationSchema = object({
    newpassword: string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required"),
    repeatnewpassword: string()
      .oneOf([ref("newpassword"), null], "Passwords must match")
      .required("Reapeat Password is required"),
  });
  return (
    <Card>
      <Stack
        gap="32px"
        minW={{
          base: "300px",
          sm: "408px",
          md: "408px",
        }}
      >
        <Stack gap="16px">
          <Text
            fontSize="28px"
            fontWeight="medium"
            lineHeight="32px"
            color="p.black"
          >
            Reset Password
          </Text>
          <Text maxW="408px" fontSize="14px" color="black.25">
            Enter your new password.
          </Text>
        </Stack>
        <Formik
          initialValues={{
            newpassword: "",
            repeatnewpassword: "",
          }}
          onSubmit={(values) => {
            mutate({
              password: values.newpassword,
              token: token,
            });
          }}
          validationSchema={resetPasswordValidationSchema}
        >
          <Form>
            <Stack gap="24px">
              <Field name="newpassword">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="newpassword">
                      <Text variant="form-label" mb="8px">
                        New Password
                      </Text>
                    </FormLabel>
                    <Input
                      {...field}
                      name="newpassword"
                      type="password"
                      placeholder="••••••••••••"
                      borderRadius="8px"
                      fontSize="14px"
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="repeatnewpassword">
                {({ field, meta }) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor="repeatnewpassword">
                      <Text variant="form-label" mb="8px">
                        Repeat New Password
                      </Text>
                    </FormLabel>
                    <Input
                      {...field}
                      name="repeatnewpassword"
                      type="password"
                      placeholder="••••••••••••"
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

export default ResetPassword;
