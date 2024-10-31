"use client";
import { createContext, ReactNode, useState } from "react";

export const ToggleBetweenLoadAndPageContext = createContext<{
  isPageSelected: boolean;
  toggleLoadPage: () => void;
} | null>(null);

export const ToggleBetweenLoadAndPageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isPageSelected, setIsPageSelected] = useState(true);

  const toggleLoadPage = () =>
    setIsPageSelected((prev) => {
      console.log(prev);
      return !prev;
    });

  return (
    <ToggleBetweenLoadAndPageContext.Provider
      value={{ isPageSelected, toggleLoadPage }}
    >
      {children}
    </ToggleBetweenLoadAndPageContext.Provider>
  );
};
