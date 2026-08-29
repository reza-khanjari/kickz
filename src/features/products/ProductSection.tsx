import { useAppDispath } from "@/app/hooks";
import { addToCart, type CartItem } from "@/features/cart/cartSlice";
import { useGetProduct } from "@/features/products/useProductsQuery";
import { audience, brands } from "@/ui/constants";
import Heading from "@/ui/Heading";
import Loader from "@/ui/Loader";
import PickColors from "@/ui/PickColors";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/ui/Button";
import FavouriteToggle from "@/features/favourits/FavouriteToggle";
import Price from "@/ui/Price";
import Skeleton from "@/ui/Skeleton";

function ProductSection() {
  const { data, isLoading } = useGetProduct();
  const dispatch = useAppDispath();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const productVariants = useMemo(() => data?.product_variants ?? [], [data]);
  const brand = useMemo(() => {
    if (!data) return "";
    return brands.find((item) => item.value === String(data.brand_id))?.label;
  }, [data]);
  const shoesColors = useMemo(() => {
    return [...new Set(productVariants?.map((v) => v.color.toLowerCase()))];
  }, [productVariants]);
  const shoesSizes = useMemo(() => {
    return [...new Set(productVariants?.map((v) => v.size))];
  }, [productVariants]);
  const selectedVariant = useMemo(() => {
    return (
      productVariants?.find(
        (v) =>
          v.color.toLowerCase() === selectedColor && v.size === selectedSize,
      ) || null
    );
  }, [selectedColor, selectedSize, productVariants]);

  const canAddToCart = !!selectedVariant && selectedVariant.stock > 0;
  const productInfo: CartItem | undefined =
    data && canAddToCart
      ? {
          variantId: selectedVariant?.id,
          productId: data?.id,
          imageUrl: data?.image_url,
          price: data?.price,
          title: data?.title,
          quantity: 1,
          color: selectedVariant?.color,
          size: selectedVariant?.size,
        }
      : undefined;

  const addProduct = () => {
    if (!productInfo) {
      throw new Error("There was a problem to add product");
    }
    dispatch(addToCart(productInfo));
    toast.success("Product Added to your shopping cart");
  };


  return (
    <section>
      <div className="mx-auto w-full px-4 py-6 sm:max-w-xl xl:max-w-7xl">
        {isLoading ? (
          <div className="flex items-center">
             <Skeleton variant="productPage" />
          </div>
        ) : (
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full overflow-hidden rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:max-w-120">
              <img
                className="aspect-square w-full object-cover"
                src={data?.image_url}
                alt={String(data?.id)}
              />
            </div>
            <div className="h-full w-full sm:px-8 py-6">
              <div className="flex h-full flex-col">
                <Heading className="font-bold" level="h3">{data?.title}</Heading>

                <div className="my-2 text-sm font-medium text-black/80 capitalize">
                  <span>
                    {" "}
                    {`${audience[String(data?.target_audience)]}'s shoes`},
                  </span>
                  <span> {`${brand}'s product`}</span>
                </div>

                <p className="my-2 font-semibold">{data?.description}</p>
                 <Price price={data?.price ?? 0} discount={data?.discount ?? 0}  />
                <div className="my-4 flex flex-col gap-y-4">
                  <p>Select Size</p>
                  <div className="flex gap-x-6">
                    <PickColors
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                      arrayColors={shoesColors}
                    />
                  </div>
                </div>
                <div className="my-4 flex flex-col gap-y-4">
                  <p>Select Size</p>
                  <div className="flex gap-x-6">
                    {shoesSizes.map((item) => (
                      <button
                        type="button"
                        onClick={() => setSelectedSize(item)}
                        className={`${selectedSize === item ? "bg-black text-white" : "bg-white"} cursor-pointer rounded-md border-2 border-black/70 px-6 py-2 font-medium shadow-[0_2_3px_rgba(0,0,0,0.25)] transition-all hover:bg-black hover:text-white hover:shadow-[0_0_5px_rgba(0,0,,0,0.8)]`}
                        key={item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <p
                  className={`${(selectedColor && selectedSize && !canAddToCart ) ? "max-w-max rounded-md border-2 border-red-600 font-semibold text-red-600" : "border-2 border-transparent text-transparent"} my-6 px-4 py-1`}
                >
                  Product is not avalable
                </p>
                <div className="flex items-center gap-x-8">
                  <Button
                    disabled={!canAddToCart}
                    className="max-w-75 py-3"
                    onClick={() => addProduct()}
                  >
                    {canAddToCart ? "add to cart" : "not avalable"}
                  </Button>
                  <FavouriteToggle productId={data?.id ?? 0} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
