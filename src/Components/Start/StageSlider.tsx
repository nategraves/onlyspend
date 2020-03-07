import React, { useState, useContext } from "react";
import { Slider } from "antd";
import { SliderValue } from "antd/lib/slider";

import StartContext from "../../Contexts/StartContext";

const BuyingStages = {
  0: "Haven't started",
  1: "Researching locations",
  2: "Seeing options in person",
  3: "Submitting offer(s)",
  4: "Finding a mortgage"
};

const StageSlider = () => {
  const startContext = useContext(StartContext);
  const [stage, setStage] = useState<SliderValue>(
    startContext ? startContext.buyingStage : 0
  );

  const handleChange = (value: SliderValue) => {
    setStage(value);
    startContext && startContext.setBuyingStage(value);
  };

  return (
    <Slider
      style={{ height: "200px" }}
      vertical
      reverse
      value={stage}
      onChange={handleChange}
      step={null}
      tipFormatter={null}
      marks={BuyingStages}
      max={Object.keys(BuyingStages).length - 1}
    />
  );
};

export default StageSlider;
