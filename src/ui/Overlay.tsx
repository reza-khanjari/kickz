import { useEffect } from "react";

type Props = {
  closeToggle: () => void;
  isOpen: boolean;
};

function Overlay({ closeToggle, isOpen }: Props) {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  return (
    <div
      onClick={closeToggle}
      className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-10 cursor-pointer bg-black/40`}
    ></div>
  );
}

export default Overlay;
