import { useScroll } from "@/hooks/useScroll";
import { FaChevronUp } from "react-icons/fa6";

function BackToTop() {
  const scrolled = useScroll();
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrolled && (
        <button
          onClick={handleBackToTop}
          className="bg-black-700 animate-fade-in border-white/10 border flex-center fixed right-8 bottom-8 z-1000 cursor-pointer rounded-full p-3.5  text-white shadow-[0px_4px_10px_rgba(0,0,0,.15)]"
        >
          <FaChevronUp className="stroke-30 text-xl" />
        </button>
      )}
    </>
  );
}

export default BackToTop;
