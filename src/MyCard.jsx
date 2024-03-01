import { Indicator } from "./Indicator";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export function MyCard({
  handleNext,
  handlePrevious,
  index,
  tutorialData,
  handleDotClick,
}) {

  const currentCardData = tutorialData[index];
  const [leftPosition, setLeftPosition] = useState("0px");
  const [isVisible, setIsVisible] = useState(true);

  const slideAndNext = () => {
    setLeftPosition("-1000px");

    setTimeout(() => {
      setIsVisible(false);
    }, "200");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("1000px");
    }, "250");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("0px");
      handleNext();
    }, "400");
  };

  const slideAndLeft = () => {
    setLeftPosition("800px");

    setTimeout(() => {
      setIsVisible(false);
    }, "200");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("-800px");
    }, "250");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("0px");
      handlePrevious();
    }, "400");
  };

  const slideDot = (i) => {
    setLeftPosition("-800px");

    setTimeout(() => {
      setIsVisible(false);
    }, "400");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("800px");
    }, "450");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition("0px");
      handleDotClick(i);
    }, "800");
  };

  return (
    <div className="main">
      {isVisible && (
        <Card
          style={{
            width: "18rem",
            margin: "auto",
            position: "relative",
            transition: "all 0.3s",
            left: leftPosition,
          }}
        >
          <Card.Img
            variant="top"
            src={currentCardData.image}
            style={{
              backgroundColor: currentCardData.bgColor,
              width: "100%",
              height: "170px",
              paddingTop: "80px",
              paddingBottom: "80px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
          <Card.Body
            style={{
              backgroundColor: "#FFFFFF",
              padding: "45px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold" }}>
              {currentCardData.title}
            </Card.Title>
            <Card.Text
              style={{ opacity: 0.8, fontSize: "14px", height: "50px" }}
            >
              {currentCardData.description}
            </Card.Text>

            {index !== tutorialData.length - 1 && (
              <Button
                variant="primary"
                style={{
                  fontSize: "15px",
                  backgroundColor: "#141414",
                  width: "30px",
                  height: "30px",
                  borderRadius: "65px",
                  marginRight: "5px",
                  color: "white",
                  marginTop: "10px",
                  float: "right",
                }}
                onClick={slideAndNext}
              >
                &#11106;
              </Button>
            )}
            {index > 0 && (
              <Button
                variant="primary"
                style={{
                  fontSize: "15px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "65px",
                  marginRight: "5px",
                  marginTop: "10px",
                  float: "right",
                }}
                onClick={slideAndLeft}
              >
                &#11104;
              </Button>
            )}

            <Indicator
              tutorialData={tutorialData}
              step={index}
              handleDotClick={slideDot}
            />
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
