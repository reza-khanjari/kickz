import Accordion from "../ui/Accordion";
import AccordionItem from "../ui/AccordionItem";
import PriceRange from "@/features/products/PriceRange";
import AudienceCheckbox from "@/features/products/AudienceCheckbox";
import Brands from "@/features/products/Brands";
import { FaX } from "react-icons/fa6";

function Sidebar({handleClose}:{handleClose:() => void}) {
  return (
    <div
      className={`animate-move-right bg-[#fcfcfc] fixed overflow-y-auto top-0 bottom-0 left-0 z-20000 min-h-dvh w-full border-r border-slate-300/70  transition-all duration-300 ease-in-out md:sticky md:top-14 md:max-w-xs`}
    >
      <button type="button" onClick={handleClose} className="absolute top-8 md:hidden right-4 p-3 cursor-pointer flex-center border-3 border-sky-700 bg-black text-white rounded-full" >
          <FaX strokeWidth={20} className="aspect-square" /> 
      </button>
      <div className="max-h-[calc(100dvh-128px)] w-full px-3 py-28 md:py-12">
        <Accordion allowMultiple={true}>
          <AccordionItem>{["Price", <PriceRange />]}</AccordionItem>
          <AccordionItem>{["Audience", <AudienceCheckbox />]}</AccordionItem>
          <AccordionItem>{["Brands", <Brands />]}</AccordionItem>
        </Accordion>
      </div>
              

    </div>
  );
}

export default Sidebar;
