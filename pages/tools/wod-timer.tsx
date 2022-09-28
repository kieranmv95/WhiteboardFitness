import type { NextPage } from "next";
import Seo from "../../components/Seo";

import * as PageStyles from "../../styles/pages/shared";

const WodTimerPage: NextPage = () => {
  return (
    <>
      <Seo
        title="WOD Timer"
        description="Time your workouts with ease with this customisable timer"
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>WOD Timer</PageStyles.Title>
        </PageStyles.Container>
      </main>
    </>
  );
};

export default WodTimerPage;
