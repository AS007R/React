import { createContext } from "react";

export const HealthyFoodContext = createContext({
  foods: [""],
  bought: [""],
  onClickHandle: (_item: string) => {},
  onkeyHandle: (_event: any) => {},
});
