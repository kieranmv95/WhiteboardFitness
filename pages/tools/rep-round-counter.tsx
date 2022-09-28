import type { NextPage } from "next";
import type { RootState } from "../../redux/store";
import { Button } from "../../components/Button/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementRep,
  incrementRound,
  reset,
  toggleFullScreen,
} from "../../redux/slice/repRound";
import Seo from "../../components/Seo";

import * as PageStyles from "../../styles/pages/shared";
import * as S from "../../styles/pages/repRoundCounter";

const Tools: NextPage = () => {
  const dispatch = useDispatch();
  const repRounds = useSelector((state: RootState) => state.repRounds);

  return (
    <>
      <Seo
        title="Rep Round Counter"
        description="A simple rep and round counter for your workouts"
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>Rep / Round Counter</PageStyles.Title>
          <p>Simply click one of the giant buttons to count</p>
          <Button onClick={() => dispatch(reset())}>Reset Counters</Button>
        </PageStyles.Container>
        <S.RepCounterGrid fullScreen={repRounds.fullScreen}>
          <div onClick={() => dispatch(incrementRound())}>
            <div>
              <h3>ROUNDS</h3>
              <p>{repRounds.round}</p>
            </div>
          </div>
          <div onClick={() => dispatch(incrementRep())}>
            <div>
              <h3>REPS</h3>
              <p>{repRounds.rep}</p>
            </div>
          </div>
          <S.ScreenSize onClick={() => dispatch(toggleFullScreen())}>
            {repRounds.fullScreen ? "Minimize" : "FULL SCREEN"}
          </S.ScreenSize>
        </S.RepCounterGrid>
      </main>
    </>
  );
};

export default Tools;
