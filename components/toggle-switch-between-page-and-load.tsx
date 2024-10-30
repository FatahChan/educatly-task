import { useContext } from "react";
import { Switch } from "./ui/switch";
import { ToggleBetweenLoadAndPageContext } from "@/context/toggle-between-load-and-page-provider";

export const ToggleSwitchBetweenPageAndLoadMore = () => {
  const context = useContext(ToggleBetweenLoadAndPageContext);
  if (!context) {
    throw new Error(
      "ToggleBetweenLoadAndPageContext must be used within a ToggleBetweenLoadAndPageProvider"
    );
  }
  return <Switch onChange={() => context.toggleLoadPage} />;
};
