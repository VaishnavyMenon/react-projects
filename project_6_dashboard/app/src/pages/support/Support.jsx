import { Stack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import InfoSection from "../dashboard/InfoSection";
import ContactSection from "./ContactSection";
import SupportContainer from "./SupportContainer";
import { AiFillMail } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack gap="40px">
        <SupportContainer
          icon={AiFillMail}
          title="Contact Us"
          subText="Have a question or just want to know more? Feel free to reach out to us."
          container={<ContactSection />}
        />
        <SupportContainer
          icon={BsFillChatFill}
          title="Live Chat"
          subText="Don’t have time to wait for the answer? Chat with us now."
          container={
            <InfoSection
              tag="Chatbot"
              text="Chat with us now"
              pColor="p.purple"
              sColor="white"
              tColor="white"
              bgImage="/bg_2.png"
            />
          }
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
