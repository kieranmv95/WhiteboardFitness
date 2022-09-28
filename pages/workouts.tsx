import type { NextPage } from "next";
import Seo from "../components/Seo";

import * as PageStyles from "../styles/pages/shared";

const Workouts: NextPage = () => {
  return (
    <>
      <Seo
        title="Workouts"
        description="A collection of workouts that I have tried and tested."
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Workouts</PageStyles.Title>
          <p>Workouts &amp; Wods coming soon</p>
        </PageStyles.Container>
      </main>
    </>
  );
};

export default Workouts;
