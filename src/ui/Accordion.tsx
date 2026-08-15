import React, {  useState } from "react";
import { AccordionContext } from "./AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
  allowMultiple: boolean;
}


function Accordion({ children, allowMultiple  }: AccordionProps) {
  const defaultOpen:string[] = [];
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));
  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <AccordionContext value={{ openItems, toggle }}>
      <div className="w-full flex flex-col gap-y-1    rounded-lg  px-4   ">
        {children}
      </div>
    </AccordionContext>
  );
}



export default Accordion;
