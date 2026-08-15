import MultiCheckbox from "@/ui/MultiCheckbox";
import useMultiQueryParam from "../../hooks/useMultiQueryParam";

const brands = [
  { label: "Nike", value: "1" },
  { label: "Adidas", value: "2" },
  { label: "Puma", value: "3" },
  { label: "Reebok", value: "4" },
  { label: "Converse", value: "5" },
  { label: "Vans", value: "6" },
  { label: "New Balance", value: "7" },
  { label: "Skechers", value: "8" },
  { label: "ASICS", value: "9" },
  { label: "Under Armou", value: "10" },
];
function Brands() {
  const { selectedValues, setSelectedValues } = useMultiQueryParam("br");
  return (
    <MultiCheckbox
      selectedValues={selectedValues}
      onChange={setSelectedValues}
      options={brands}
    />
  );
}

export default Brands;
