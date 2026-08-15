import MultiCheckbox from "@/ui/MultiCheckbox";
import useMultiQueryParam from "../../hooks/useMultiQueryParam";
  const skills = [
    { label: "Man", value: "1" },
    { label: "Woman", value: "2" },
    { label: "Kids", value: "3" },
    { label: "Sports", value: "4" },
  ];
function AudienceCheckbox() {
  const {selectedValues, setSelectedValues} = useMultiQueryParam('au')


  return (
    <MultiCheckbox
      options={skills}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
    />
  );
}

export default AudienceCheckbox;
