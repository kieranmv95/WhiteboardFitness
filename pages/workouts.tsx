import type { NextPage } from "next";
import Head from "next/head";

import * as PageStyles from "../styles/pages/shared";

const Workouts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
