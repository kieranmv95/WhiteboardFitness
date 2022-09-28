import type { NextPage } from "next";
import PercentageCalculator from "../../components/PercentageCalculator";
import Seo from "../../components/Seo";

import * as PageStyles from "../../styles/pages/shared";

const Tools: NextPage = () => {
  return (
    <>
      <Seo
        title="Percentage Calculator"
        description="Get insights into what the percentage breakdown of your one rep max is"
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Percentage breakdown calculator</PageStyles.Title>
          <p>
            Enter your one rep max in KG into the calculator below to get an
            insight into what the percentage breakdown of your one rep max is.
          </p>
          <PercentageCalculator />
        </PageStyles.Container>
      </main>
    </>
  );
};

export default Tools;
