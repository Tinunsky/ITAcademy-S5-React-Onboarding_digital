import { Indicator } from "./Indicator";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function MyCard({
  handleNext,
  handlePrevious,
  index,
  tutorialData,
  handleDotClick,
}) {
  const currentCardData = tutorialData[index];

  //   function handleDotClick(index) {
  //     if (index !== tutorialData.step) {
  //         setStep(index);
  //       }
  // }

  return (
    <div className="main">
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img
          variant="top"
          src={currentCardData.image}
          style={{
            backgroundColor: currentCardData.bgColor,
            width: "100%",
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
          <Card.Text style={{ opacity: 0.8, fontSize: "14px" }}>
            {currentCardData.description}
          </Card.Text>

          {index !== tutorialData.length - 1 && (
            <Button
              variant="primary"
              style={{
                fontSize: "15px",
                borderRadius: "50%",
                marginRight: "5px",
                marginTop: "10px",
                float: "right",
              }}
              onClick={handleNext}
            >
              &#11106;
            </Button>
          )}
          {index > 0 && (
            <Button
              variant="primary"
              style={{
                fontSize: "15px",
                borderRadius: "65%",
                marginRight: "5px",
                marginTop: "10px",
                float: "right",
              }}
              onClick={handlePrevious}
            >
              &#11104;
            </Button>
          )}

          <Indicator
            tutorialData={tutorialData}
            step={index}
            handleDotClick={handleDotClick}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
