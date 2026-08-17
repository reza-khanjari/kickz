import Heading from "@/ui/Heading";
import useFavQuery from "./useFavQuery";
import Card from "../products/ProductCard";
import Loader from "@/ui/Loader";

function FavouritesList() {
  const { favs, isLoading } = useFavQuery();

  const products = favs?.map((item) => item["products"]);

  return (
    <section>
      <Heading className="mb-6 font-medium" level="h2">
        Favourite List
      </Heading>

      <div className="grid grid-cols-1 gap-16 px-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 9 }, (_, index) => index).map((item) => (
              <Loader key={item} variant="card-loader" className="min-w-50 md:min-w-75 min-h-100" />
            ))
          : products?.map((item) => <Card item={item} />)}
      </div>
    </section>
  );
}

export default FavouritesList;
