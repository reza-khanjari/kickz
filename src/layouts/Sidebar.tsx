import Accordion from "../ui/Accordion";
import AccordionItem from "../ui/AccordionItem";
import PriceRange from "@/features/products/PriceRange";
import AudienceCheckbox from "@/features/products/AudienceCheckbox";
import Brands from "@/features/products/Brands";

function Sidebar() {
  return (
    <div
      className={`animate-move-right bg-[#fcfcfc] fixed top-0 bottom-0 left-0 z-20000 min-h-dvh w-full border-r border-slate-300/70  transition-all duration-300 ease-in-out md:sticky md:top-14 md:max-w-xs`}
    >
      <div className="max-h-[calc(100dvh-128px)] w-full overflow-y-auto px-3  py-24">
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
