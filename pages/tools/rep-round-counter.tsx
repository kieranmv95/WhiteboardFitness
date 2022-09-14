import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import * as PageStyles from "../../styles/pages/shared";
import * as S from "../../styles/pages/repRoundCounter";
import { Button } from "../../components/Button/styles";
import { useState } from "react";

const Tools: NextPage = () => {
  const [rounds, setRounds] = useState(0);
  const [reps, setReps] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Rep / Round Counter</PageStyles.Title>
          <p>Simply click one of the giant buttons to count</p>
          <Button
            onClick={() => {
              setRounds(0);
              setReps(0);
            }}
          >
            Reset Counters
          </Button>
        </PageStyles.Container>
        <S.RepCounterGrid fullScreen={fullScreen}>
          <div onClick={() => setRounds(rounds + 1)}>
            <div>
              <h3>ROUNDS</h3>
              <p>{rounds}</p>
            </div>
          </div>
          <div onClick={() => setReps(reps + 1)}>
            <div>
              <h3>REPS</h3>
              <p>{reps}</p>
            </div>
          </div>
          <S.ScreenSize onClick={() => setFullScreen(!fullScreen)}>
            {fullScreen ? "Minimize" : "FULL SCREEN"}
          </S.ScreenSize>
        </S.RepCounterGrid>
      </main>
    </>
  );
};

export default Tools;
