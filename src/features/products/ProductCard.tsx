import { NavLink } from "react-router";
import FavouriteToggle from "../favourits/FavouriteToggle";
import type { Product } from "@/types/common";
import { audience } from "@/ui/constants";
import Price from "@/ui/Price";

function Card({ item }: { item: Product }) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl shadow-[0px_2px_5px_rgba(0,0,0,0.2)] transition-all hover:shadow-[0px_0px_5px_rgba(0,0,0,0.5)]">
      <div className="absolute top-4 right-4">
        <FavouriteToggle productId={item.id} />
      </div>
      <NavLink to={`/product/${item.id}`}>
        <div className="aspect-square  w-full">
          <img
            className="aspect-square size-full object-cover"
            src={item.image_url}
            alt={String(item.id)}
          />
        </div>
        <div className="bg-card-bg flex flex-col border-t border-gray-400 px-6 py-4 text-black">
          <p className="truncate text-xl font-bold">{item.title}</p>
          <span className="font-medium text-black/60 capitalize">
            {audience[item.target_audience]}'s shoes
          </span>
                <Price price={item.price} discount={item.discount} />
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
