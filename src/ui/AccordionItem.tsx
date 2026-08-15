import React, { useId } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAccordionContext } from "./AccordionContext";

interface AccordionItemRenderProps {
  isOpen: boolean;
  toggle: () => void;
  id: string;
}

type AccordionItemChildren =
  | ((props: AccordionItemRenderProps) => React.ReactNode)
  | readonly [header: React.ReactNode, panel: React.ReactNode];

interface AccordionItemProps {
  children: AccordionItemChildren;
  id?: string;
}

interface ItemContentProps {
  id: string;
  isOpen: boolean;
  toggle: () => void;
  header: React.ReactNode;
  panel: React.ReactNode;
}

function AccordionItem({ children, id: customId }: AccordionItemProps) {
  const generatedId = useId();
  const id = customId ?? generatedId;
  const { toggle, openItems } = useAccordionContext();
  const isOpen = openItems.has(id);
  return (
    <>
      {typeof children === "function" ? (
        children({ isOpen, toggle: () => toggle(id), id })
      ) : (
        <ItemContent
          header={children[0]}
          panel={children[1]}
          isOpen={isOpen}
          toggle={() => toggle(id)}
          id={id}
        />
      )}
    </>
  );
}
function ItemContent({ id, isOpen, toggle, header, panel }: ItemContentProps) {
  const panelId = `panel-${id}`;
  const triggerId = `trigger-${id}`;
  return (
    <div className="border-b-[1.5px]  border-black/20 last:border-b-transparent" >
      <h3  >
        <button
          onClick={toggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={triggerId}
          className="flex w-full cursor-pointer py-2 font-medium text-black text-lg  items-center justify-between "
        >
          <span>{header}</span>
          {isOpen ? (
            <FaChevronUp className="text-black-700" />
          ) : (
            <FaChevronDown className="text-black-700" />
          )}
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid w-full transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">{panel}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
