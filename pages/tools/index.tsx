import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import * as PageStyles from "../../styles/pages/shared";
import { Button } from "../../components/Button/styles";

const Tools: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Tools</PageStyles.Title>

          <div>
            <h2>Percentage Calculator</h2>
            <p>
              Do yoy know your 1rep max and want to do a workout based off a
              percentage weight. Then this tool makes your life much easier.
            </p>
            <p>
              Add your 1RM into the calculator and then you will see a list of %
              breakdowns of that weight. I use it to calculator weights for
              wendler cycles but use it as you please
            </p>
            <Link href="/tools/percentage-calculator">
              <Button>Go to Percentage Calculator</Button>
            </Link>
          </div>
          <PageStyles.Title>Tools Coming Soon</PageStyles.Title>
          <p>
            These tools are currently under development so please check back
            soon
          </p>
          <div>
            <h2>WOD Timer</h2>
            <p>
              This is a simple yet advanced WOD timer to help you keep tabs on
              your workout. Setup a simple countdown or countup or get fancy and
              setup rounds and rest periods with the highly customisable timer.
            </p>
          </div>
        </PageStyles.Container>
      </main>
    </>
  );
};

export default Tools;
