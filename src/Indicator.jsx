import styled from "styled-components";

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#000000" : "#ccc")};
  cursor: pointer;
`;

export function Indicator({ tutorialData, step, handleDotClick }) {
  return (
    <IndicatorWrapper>
      {tutorialData.map((_, i) => (
        <Dot
          key={i}
          $isActive={step === i ? "true" : ""}
          onClick={() => handleDotClick(i)}
        />
      ))}
    </IndicatorWrapper>
  );
}
