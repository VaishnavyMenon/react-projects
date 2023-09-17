import { Center } from "@chakra-ui/react";
import React from "react";
import Card from "../../../components/Card";
import SuccessPopup from "../../../components/SuccessPopup";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ResetSuccess = () => {
  return (
    <Card>
      <SuccessPopup
        icon={BsFillCheckCircleFill}
        iconColor="#059669"
        title="Password Reset Done"
        subtext="Now you can access you account."
        button="Login"
        buttonvariant="form-btn"
        link="/signin"
      />
    </Card>
  );
};

export default ResetSuccess;
