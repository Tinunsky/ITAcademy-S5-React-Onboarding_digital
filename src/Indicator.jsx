import styled from "styled-components";

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
`;

const Dot = styled.span`
  display: inline-block;
  width: ${(props) => (props.$isActive ? "15px" : "5px")};
  height: 5px; 
  margin-right: 6px;
  border-radius: 30px;
  background-color: ${(props) => (props.$isActive ? "#000000" : "#ccc")};
  cursor: pointer;
  transition: all 0.5s;
`;

export function Indicator({ tutorialData, step, handleDotClick }) {
  return (
    <IndicatorWrapper>
      {tutorialData.map((_, i) => (
        <Dot key={i} $isActive={step === i} onClick={() => handleDotClick(i)} />
      ))}
    </IndicatorWrapper>
  );
}
