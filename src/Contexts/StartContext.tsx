import React, { FC, createContext, useState } from "react";
import { SliderValue } from "antd/lib/slider";

import { MINIMUM_ANNUAL_INCOME } from "../utils/constants";

interface StartValues {
  buyingStage: SliderValue;
  location: string;
  annualIncome: number;
  monthlyDebt: number;
  savings: number;
  setBuyingStage: (stage: SliderValue) => void;
  setLocation: (location: string) => void;
  setAnnualIncome: (annualIncome: number) => void;
  setMonthlyDebt: (annualIncome: number) => void;
  setSavings: (annualIncome: number) => void;
}

const StartContext = createContext<StartValues | null>(null);

const { Consumer: StartConsumer, Provider } = StartContext;

const StartProvider: FC = ({ children }) => {
  const [buyingStage, setBuyingStage] = useState<SliderValue>(3);
  const [location, setLocation] = useState(
    "14250 SE 14th St, Bellevue, WA 98007"
  ); // ''
  const [annualIncome, setAnnualIncome] = useState(300000); // 14250 SE 14th St, Bellevue, WA 98007
  const [monthlyDebt, setMonthlyDebt] = useState(500); // 0
  const [savings, setSavings] = useState(130000); // 0

  return (
    <Provider
      value={{
        buyingStage,
        location,
        annualIncome,
        monthlyDebt,
        savings,

        setBuyingStage,
        setLocation,
        setAnnualIncome,
        setMonthlyDebt,
        setSavings
      }}
    >
      {children}
    </Provider>
  );
};

export default StartContext;
export { StartConsumer, StartProvider };
