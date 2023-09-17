import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import TransactionsSection from "./TransactionsSection";
import InfoSection from "./InfoSection";
import { fetchExample } from "../../api/query/exampleQuery";
import { useQuery } from "react-query";

const Dashboard = () => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="24px"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <TransactionsSection />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoSection
            tag="Loans"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            pColor="white"
            sColor="p.purple"
            tColor="p.black"
            bgImage="/bg_1.png"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoSection
            tag="Contact"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            pColor="p.purple"
            sColor="white"
            tColor="white"
            bgImage="/bg_2.png"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
