import { useState } from "react";
import { FaBars, FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import NavbarList from "./NavbarList";
import { useNavigate } from "react-router";
import { useAppSelector } from "@/app/hooks";
import { selectCartItemsCount } from "@/features/cart/cartSlice";
import { useScroll } from "@/hooks/useScroll";
import { logoUrl } from "@/ui/constants";

function Header() {
  const scrolled = useScroll(20);
  const navigate = useNavigate();
  const cartCount = useAppSelector(selectCartItemsCount);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      {!scrolled ? (
        <header className="flex h-16 w-full justify-center">
          <nav
            className={`bg-black-900 text-white fixed z-50 flex h-16 w-full items-center justify-between border border-transparent px-6 font-bold  transition-all duration-300 md:px-32`}
          >
            <div className="size-14 md:size-18">
              <img className="size-full" src={logoUrl} alt="logo" />
            </div>
            <NavbarList closeMenu={closeMenu} isOpen={isOpenMenu} />
            <div className="flex gap-x-8 text-[28px]">
              <div className="relative">
                <FaCartShopping
                  onClick={() => navigate("/cart")}
                  className="cursor-pointer"
                />
                {cartCount > 0 && (
                  <span className="flex-center absolute -top-2.5 -right-5 size-6 rounded-full border bg-white px-4 text-sm font-bold text-black">
                    {cartCount}
                  </span>
                )}
              </div>
              <FaRegCircleUser
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              />
              <div onClick={openMenu} className="cursor-pointer md:hidden">
                <FaBars size={24} />
              </div>
            </div>
          </nav>
        </header>
      ) : null}
    </>
  );
}

export default Header;
