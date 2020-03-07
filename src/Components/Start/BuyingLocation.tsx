import React, { useState, useContext } from "react";
import { Input, Typography } from "antd";

import StartContext from "../../Contexts/StartContext";

const { Title, Text } = Typography;

const BuyingLocation = () => {
  const [location, setLocation] = useState("");
  const startContext = useContext(StartContext);

  if (!startContext) {
    return null;
  }

  const { buyingStage } = startContext;
  console.log(startContext);
  let title, hint, explanation;

  switch (buyingStage) {
    case 0:
      title = "Great! Then, let's start at the beginning.";
      break;
    case 1:
      title = "What area are you researching?";
      hint =
        "If you're researching more than one area, you'll be able to add that later";
      explanation =
        "This allows us to find trends in the market as well as important rate info";
      break;
    case 2:
      title = "What area are you visiting?";
      hint =
        "If you're researching more than one area, you'll be able to add that later";
      break;
    case 3:
      title = "Congrats! What's the address of the property";
      break;
    default:
      break;
  }

  return (
    <>
      <Title level={4}>{title}</Title>
      {buyingStage > 0 && (
        <>
          <Text>{explanation}</Text>
          <Input value={location} onChange={e => setLocation(e.target.value)} />
          <Text>{hint}</Text>
        </>
      )}
    </>
  );
};

export default BuyingLocation;
