
 import { logoUrl } from "@/ui/constants";
import {
  FaChevronRight,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router";
 const Style = {
  link: "group flex items-center text-white/50 hover:text-white gap-x-2 border-b-2 border-transparent pb-2 transition-colors hover:border-b-white",
  chevron: "group-hover:translate-x-4 transition-all duration-300",
  box: "size-12 flex-center bg-black-600 hover:bg-white hover:text-black-600 p-2  rounded-md group cursor-pointer ",
  icon: "",
};
 function Footer() {
   return (
      <footer>
        <div className="bg-black-900 flex-center w-full py-32 text-white">
          <div className="grid-col-1 grid gap-x-48 gap-y-16 xl:grid-cols-3">
            <div className="flex w-max flex-col gap-y-2 justify-self-center">
              <h3 className="pb-4 text-2xl font-semibold">Quick Links</h3>

              <NavLink to="/men" className={Style["link"]}>
                <span>Men's Shoes</span>
                <FaChevronRight className={Style["chevron"]} />
              </NavLink>
              <NavLink className={Style["link"]} to="/women">
                Women's Shoes
                <FaChevronRight className={Style["chevron"]} />
              </NavLink>
              <NavLink className={Style["link"]} to="/kids">
                Kids' Shoes
                <FaChevronRight className={Style["chevron"]} />
              </NavLink>
              <NavLink className={Style["link"]} to="/sports">
                Sports' Shoes
                <FaChevronRight className={Style["chevron"]} />
              </NavLink>
            </div>

            <div className="-translate-y-16">
              <div className="mx-auto size-64">
                <img className="size-full" src={logoUrl} alt="logo" />
              </div>
              <p className="text-center text-lg font-semibold text-white/85">
                Step into comfort and style
              </p>
            </div>

            <div className="">
              <h3 className="text-center text-2xl font-semibold">Follow Us</h3>
              <div className="mx-auto my-6 grid w-max grid-cols-2 items-center gap-4 text-4xl">
                <div className={Style["box"]}>
                  <FaTwitter className={Style["icon"]} />
                </div>
                <div className={Style["box"]}>
                  <FaTelegram className={Style["icon"]} />
                </div>
                <div className={Style["box"]}>
                  <FaInstagram className={Style["icon"]} />
                </div>
                <div className={Style["box"]}>
                  <FaYoutube className={Style["icon"]} />
                </div>
              </div>
              <p className="text-center text-white/50">
                <span className="cursor-pointer hover:text-white">
                  Contact{" "}
                </span>{" "}
                /
                <span className="cursor-pointer hover:text-white">
                  {" "}
                  Newsletter{" "}
                </span>{" "}
                /
                <span className="cursor-pointer hover:text-white">
                  {" "}
                  Support
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
   )
 }
 
 export default Footer
 
