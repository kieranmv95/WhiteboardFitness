import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../../components/Button/styles";
import Seo from "../../components/Seo";

import * as PageStyles from "../../styles/pages/shared";
import * as S from "../../styles/pages/tools";

const Tools: NextPage = () => {
  return (
    <>
      <Seo
        title="Tools"
        description="A collection of tools that I have created to make life in the gym easier"
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Tools</PageStyles.Title>

          <S.ToolCard>
            <h2>Percentage breakdown calculator</h2>
            <p>
              Do you know your 1rep max and want to do a workout based off a
              percentage of that weight? Then this tool makes your life much
              easier.
            </p>
            <p>
              Add your 1RM into the calculator and then you will see a list of
              percentage breakdowns of that weight. I use it to calculator
              weights for wendler cycles but you can use it as you please. Some
              people use it to figure out percentages of their bodyweight!
            </p>
            <Link href="/tools/percentage-calculator">
              <Button>Go to Percentage Calculator</Button>
            </Link>
          </S.ToolCard>
          <S.ToolCard>
            <h2>Rep/Round counter</h2>
            <p>
              Losing track of your reps or rounds on an AMRAP or when working
              out. It gets suprisingly hard to count when your in a hole dying
              on a sweaty workout. Use this giant button to keep track of your
              rounds.
            </p>
            <Link href="/tools/rep-round-counter">
              <Button>Go to Rep/Round counter</Button>
            </Link>
          </S.ToolCard>
          <PageStyles.Title>More tools coming soon</PageStyles.Title>
          <p>
            These tools are currently under development so please check back
            soon
          </p>
          <S.ToolCard>
            <h2>WOD Timer</h2>
            <p>
              This is a simple yet advanced WOD timer to help you keep tabs on
              your workout. Setup a simple countdown or countup or get fancy and
              setup rounds and rest periods with the highly customisable timer.
            </p>
            <Button disabled>Coming Soon</Button>
          </S.ToolCard>
        </PageStyles.Container>
      </main>
    </>
  );
};

export default Tools;
