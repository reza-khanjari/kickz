import { createContext, useContext } from "react";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
}
export const AccordionContext = createContext<AccordionContextValue | null>(null);
export function useAccordionContext(): AccordionContextValue {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionItem must be within an <Accordion>");
  }
  return ctx;
}