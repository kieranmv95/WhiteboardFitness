import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styles";

const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [roundToWhole, setRoundToWhole] = useState(false);
  const [percentageIntervals, setPercentageIntervals] = useState(10);
  const [showValuesUnder50, setShowValuesUnder50] = useState(false);

  const round = (weight: number): number => {
    if (roundToWhole) {
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
            onChange={(e) => setValue(e.target.value)}
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
            {roundToWhole ? "whole number" : "0.5kg"}
          </S.RoundingCopy>
          <S.Buttons>
            <Button
              onClick={() =>
                setPercentageIntervals(percentageIntervals === 10 ? 5 : 10)
              }
            >
              {percentageIntervals === 10
                ? "Show 5% Increments"
                : "Hide 5 increments%"}
            </Button>
            <Button onClick={() => setShowValuesUnder50(!showValuesUnder50)}>
              {showValuesUnder50 ? "Hide under 50%" : "Show under 50%"}
            </Button>
            <Button onClick={() => setRoundToWhole(!roundToWhole)}>
              {roundToWhole
                ? "Round to nearest 0.5kg"
                : "Round to whole numbers"}
            </Button>
          </S.Buttons>
          <S.NumbersGrid>
            {Array.from(Array(100 / percentageIntervals), (_, x) => x + 1)
              .reverse()
              .map((e) => {
                if (e * percentageIntervals === 0) return null;
                const percentage = e * percentageIntervals;
                const weight = (Number(value) / 100) * percentage;

                if (!showValuesUnder50 && percentage < 50) return null;

                return (
                  <S.NumbersGridItem>
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
