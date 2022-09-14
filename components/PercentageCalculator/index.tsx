import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  update,
  toggleRoundToWhole,
  toggleShowValuesUnder50,
  changePercentageIntervals,
} from "../../redux/slice/percentageCalc";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styles";

const PercentageCalculator = () => {
  const dispatch = useDispatch();
  const { value, settings } = useSelector(
    (state: RootState) => state.percentageCalc
  );

  const round = (weight: number): number => {
    if (settings.roundToWhole) {
      return Math.round(weight);
    } else {
      return Math.round(weight * 2) / 2;
    }
  };

  return (
    <div>
      <S.InputHolder>
        <label>
          Enter 1RM in KG:
          <Input
            placeholder="100"
            type="number"
            onChange={(e) => dispatch(update(e.target.value))}
            value={value}
          />
        </label>
      </S.InputHolder>
      <S.Breakdown>Breakdown</S.Breakdown>
      {!value && "Enter a value to see breakdown"}
      {value && (
        <>
          <S.RoundingCopy>
            All results are rounded to the nearest{" "}
            {settings.roundToWhole ? "whole number" : "0.5kg"}
          </S.RoundingCopy>
          <S.Buttons>
            <Button onClick={() => dispatch(changePercentageIntervals())}>
              {settings.percentageIntervals === 10
                ? "Show 5% Increments"
                : "Hide 5 increments%"}
            </Button>
            <Button onClick={() => dispatch(toggleShowValuesUnder50())}>
              {settings.showValuesUnder50 ? "Hide under 50%" : "Show under 50%"}
            </Button>
            <Button onClick={() => dispatch(toggleRoundToWhole())}>
              {settings.roundToWhole
                ? "Round to nearest 0.5kg"
                : "Round to whole numbers"}
            </Button>
          </S.Buttons>
          <S.NumbersGrid>
            {Array.from(
              Array(100 / settings.percentageIntervals),
              (_, x) => x + 1
            )
              .reverse()
              .map((e) => {
                if (e * settings.percentageIntervals === 0) return null;
                const percentage = e * settings.percentageIntervals;
                const weight = (Number(value) / 100) * percentage;

                if (!settings.showValuesUnder50 && percentage < 50) return null;

                return (
                  <S.NumbersGridItem key={e.toString()}>
                    <S.NumbersGridPercentage>
                      {percentage}%
                    </S.NumbersGridPercentage>
                    <S.NumbersGridValue>{round(weight)}kg</S.NumbersGridValue>
                  </S.NumbersGridItem>
                );
              })}
          </S.NumbersGrid>
        </>
      )}
    </div>
  );
};

export default PercentageCalculator;
