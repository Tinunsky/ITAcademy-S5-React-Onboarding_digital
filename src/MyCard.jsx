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

  const slide = (leftMin, leftMax, handleFunction) => {
    setLeftPosition(leftMin);

    setTimeout(() => {
      setIsVisible(false);
    }, "200");

    setTimeout(() => {
      setIsVisible(true);
      setLeftPosition(leftMax);
    }, "250");

    setTimeout(() => {
      setLeftPosition("0px");
      handleFunction();
    }, "500");
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
            opacity: leftPosition === "0px" ? 1 : 0,
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
                onClick={() => slide("-500px", "1000px", handleNext)}
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
                onClick={() => slide("500px", "-1000px", handlePrevious)}
              >
                &#11104;
              </Button>
            )}

            <Indicator
              tutorialData={tutorialData}
              step={index}
              handleDotClick={(i) =>
                slide("-500px", "1000px", () => handleDotClick(i))
              }
            />
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
