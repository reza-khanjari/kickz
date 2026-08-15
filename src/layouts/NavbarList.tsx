
import Overlay from "@/ui/Overlay";
import { NavLink } from "react-router";
interface NavItem {
  label: string;
  href: string;
}
const NavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/Products" },

 
];
function NavbarList({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <>
      <ul className={`hidden gap-x-6 md:flex`}>
        {NavItems.map((item) => (
          <li key={item.label} className="text-center">
            <NavLink
              onClick={closeMenu}
              className="block size-full px-2 py-6 text-center"
              to={item.href}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
     <Overlay isOpen={isOpen} closeToggle={closeMenu} />
      <ul
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} bg-black-950 fixed top-0 right-0 bottom-0 z-20 w-7/10 gap-x-6  transition-all md:hidden`}
      >
        {NavItems.map((item, index) => (
          <li
            key={index}
            className=" border-b-2 text-center transition-colors"
          >
            <NavLink
              onClick={closeMenu}
              className="block size-full px-2 py-6 text-center"
              to={item.href}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavbarList;
