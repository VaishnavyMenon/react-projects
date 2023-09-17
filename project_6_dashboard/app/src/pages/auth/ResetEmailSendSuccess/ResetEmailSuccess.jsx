import Card from "../../../components/Card";
import SuccessPopup from "../../../components/SuccessPopup";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router";
import { Box } from "@chakra-ui/react";

const ResetEmailSuccess = () => {
  const { email } = useParams();
  const subtext = (
    <span>
      We have sent instructions on how to reset your password to{" "}
      <Box as="b" color="p.black">
        {email}.{" "}
      </Box>
      Please follow the instructions from the email.
    </span>
  );

  return (
    <Card>
      <SuccessPopup
        icon={BsFillCheckCircleFill}
        iconColor="#059669"
        title="Successfully Sent"
        subtext={subtext}
      />
    </Card>
  );
};

export default ResetEmailSuccess;
