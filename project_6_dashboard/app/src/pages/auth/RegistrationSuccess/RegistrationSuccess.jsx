import React from "react";
import SuccessPopup from "../../../components/SuccessPopup";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Card from "../../../components/Card";
import { useNavigate, useParams } from "react-router";
import { verifyUserMail } from "../../../api/query/userQuery";
import { useToast } from "@chakra-ui/react";
import { useQuery } from "react-query";

const RegistrationSuccess = () => {
  const { token } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const { isSuccess } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyUserMail({ token }),
    enabled: !!token,
    isError: () => {
      toast({
        title: "SignUp error",
        description: error.message,
        status: "error",
      });

      navigate("/signup");
    },
  });
  return (
    isSuccess && (
      <Card>
        <SuccessPopup
          icon={BsFillCheckCircleFill}
          iconColor="#059669"
          title="Successfully Registration"
          subtext="Hurray! You have successfully created your account. Enter the app to explore all it’s features."
          button="Enter the App"
          buttonvariant="form-btn"
          link="/signin"
        />
      </Card>
    )
  );
};

export default RegistrationSuccess;
