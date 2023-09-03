import { Box, Container, Flex, useDisclosure, useEditable } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  
const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Flex>
      <Box display={{
        base:"none",
        md:"none",
        lg:"block"
    }}>
        <SideNav active={title}/>
      </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1} ml={{
          base:0,
          lg: "256px",
          xl: "256px"
        }}>
          <TopNav title={title} onOpen={onOpen} />
          <Container mt="24px" mb="30px" maxW="1000px" minW="fit-content" overflowY="auto" h={{
            base: "85vh",
            md:"calc(100vh - 129px)",
          }}>{children}</Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
