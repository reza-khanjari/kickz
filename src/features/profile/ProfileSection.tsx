import useGetProfile from "@/features/profile/useProfileQuery";
import Heading from "@/ui/Heading";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { useLogout } from "@/features/auth/useAuth";
import useQueryParam from "@/hooks/useQueryParam";

import FavouritesList from "@/features/favourits/FavouritesList";
import Loader from "@/ui/Loader";
import ProfileOrders from "./ProfileOrders";
import ProfileUpdate from "@/features/profile/ProfileUpdate";
import { useNavigate } from "react-router";
import Skeleton from "@/ui/Skeleton";
type Tabs = "orders" | "favorits" | "details";
const TAB_COMPONENTS: Record<Tabs, React.ReactNode> = {
  orders: <ProfileOrders />,
  favorits: <FavouritesList />,
  details: <ProfileUpdate />,
};
const styles = {
  activeTab: "border-white",
  liTab:
    "flex items-center gap-x-4 cursor-pointer border-l-4 hover:text-white  hover:border-white capitalize font-bold",
  btnTab:
    "py-4 px-4 flex w-full items-center gap-x-4 cursor-pointer capitalize",
  iconTab: "text-2xl",
};
function ProfileSection() {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogout();
  const { data, isLoading } = useGetProfile();
  const [activeTab, setActiveTab] = useQueryParam<Tabs>("activeTab", "details");


  return (
    <section>
      <div className="flex w-full flex-col items-start md:flex-row">
        <div
          className={`bg-black-800 flex w-full flex-col py-3 text-[#f0f0f0] md:sticky md:top-0 md:min-h-dvh md:max-w-65 md:py-0 md:shadow-[2px_0px_5px_rgba(123,123,123,0.2)]`}
        >
          <div className="flex items-center justify-between px-6 pt-10 pb-8">
            <button
              className="flex cursor-pointer items-center gap-x-2 font-bold hover:text-white"
              type="button"
              onClick={() => navigate("/")}
            >
              <FaHome className="text-2xl" />
              Home
            </button>
            <button
              className="flex cursor-pointer items-center gap-x-2 font-bold hover:text-white"
              type="button"
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping className="text-2xl" />
              Cart
            </button>
          </div>
          <div className="mx-auto mt-2 w-9/10 border-t-2 border-t-white/20"></div>

          <div className="flex w-full flex-col border-b-white/10 py-6 text-center">
            <div className="mx-auto mb-6 size-28 overflow-hidden rounded-full">
              {isLoading ? (
                <div className="animate-background-pulse size-full bg-[#ddd]"></div>
              ) : (
                <img
                  className="size-full object-center"
                  src={data?.avatar}
                  alt="avatar"
                />
              )}
            </div>

            <div className="flex flex-col gap-y-6">
              <Heading level="h3">
                {isLoading ? (
                  <div className="animate-background-pulse rounded-sm h-8 w-7/10 mx-auto bg-[#ddd]"></div>
                ) : (
                  data?.full_name
                )}
              </Heading>
              <span className="text-sm text-gray-300">
                {isLoading ? (
                  <div className="animate-background-pulse h-6 w-7/10 rounded-sm mx-auto bg-[#ddd]"></div>
                ) : (
                  data?.email
                )}
              </span>
            </div>
          </div>
          <div className="w-full grow flex-col">
            <div className="mx-auto w-9/10 border-t-2 border-t-white/20"></div>
            <ul className="flex h-full flex-col gap-y-2 px-4 py-2">
              <li
                className={`${styles["liTab"]} ${activeTab === "details" ? styles["activeTab"] : "border-transparent"}`}
              >
                <button
                  type="button"
                  className={styles["btnTab"]}
                  onClick={() => setActiveTab("details")}
                >
                  <VscAccount className={styles["iconTab"]} />
                  <span>Personal info</span>
                </button>
              </li>
              <li
                className={`${styles["liTab"]} ${activeTab === "orders" ? styles["activeTab"] : "border-transparent"}`}
              >
                <button
                  type="button"
                  className={styles["btnTab"]}
                  onClick={() => setActiveTab("orders")}
                >
                  <FaCartShopping className="text-2xl" />
                  <span>Orders History</span>
                </button>
              </li>

              <li
                className={`${styles["liTab"]} ${activeTab === "favorits" ? styles["activeTab"] : "border-transparent"}`}
              >
                <button
                  className={styles["btnTab"]}
                  onClick={() => setActiveTab("favorits")}
                  type="button"
                >
                  <FaHeart className="text-2xl" />
                  <span>Favorits list</span>
                </button>
              </li>

              <div className="mx-auto mt-2 w-9/10 border-t-2 border-t-white/20"></div>

              <button
                disabled={isPending}
                onClick={() => mutate()}
                type="button"
                className={`mx-auto mt-4 flex cursor-pointer gap-x-2 rounded-lg border border-[#2A1215]/10 bg-[#2A1215] px-8 py-3 font-semibold text-[#FF4D4F] hover:bg-[#3b1a1e]`}
              >
                <BiLogOut className={styles["iconTab"]} />
                {isPending ? "pendnig" : "sign out"}
              </button>
            </ul>
          </div>
        </div>

        <div className={`size-full self-start p-8`}>
          {TAB_COMPONENTS[activeTab]}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
