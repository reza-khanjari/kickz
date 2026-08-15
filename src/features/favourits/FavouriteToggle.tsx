import { FaRegHeart } from "react-icons/fa6";
import useFavQuery from "./useFavQuery";
import useCreateFav from "./useCreateFav";
import useRemoveFav from "./useRemoveFav";
import { useUser } from "../auth/useAuth";

function FavouriteToggle({ productId }:{productId:number}) {
  const { favs } = useFavQuery();
  const { createFav } = useCreateFav();
  const { removeFav } = useRemoveFav();
  const { user } = useUser();
  const userId = user?.id;
  const toggleFav = (id: number) => {
    if (userId && id) {
      const data = { user_id: userId, product_id: id };
      if (data) {
        if (isFavItem) {
          removeFav(data);
        } else {
          createFav(data);
        }
      }
    }
  };
  const isFavItem = favs?.some((item) => item.product_id === productId) || false;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleFav(productId);
      }}
      className={`flex-center cursor-pointer rounded-xl border transition-all ${isFavItem ? "border-white/65 bg-red-600 text-white" : "border-red-800/50 bg-[rgba(255,255,255,0.35)]"} border p-2.5 text-xl hover:border-red-600/50 text-red-600 shadow-[0px_2px_5px_rgba(255,0,0,0.3)] backdrop-blur-xl transition-all hover:bg-red-200 hover:text-red-600`}
    >
      <FaRegHeart className="stroke-16" />
    </button>
  );
}

export default FavouriteToggle;
