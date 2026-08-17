import { useAllProducts } from "@/features/products/useAllProductsQuery";
import Card from "@/features/products/ProductCard";
import Loader from "@/ui/Loader";
import { LuSettings2 } from "react-icons/lu";
import Sidebar from "@/layouts/Sidebar";
import { useCallback, useRef, useState } from "react";
import Select from "@/ui/Select";
import useQueryParam from "@/hooks/useQueryParam";
import { useScroll } from "@/hooks/useScroll";
const sortOptions = [
  {
    label: "New Arrivals",
    value: "newest",
    dir: "desc",
  },
  {
    label: "Price:High to Low",
    value: "price-desc",
    dir: "desc",
  },
  {
    label: "Price Low to High",
    value: "price-asc",
    dir: "asc",
  },
  {
    label: "Highest Discount",
    value: "discount",
    dir: "desc",
  },
];
function Products() {
  const scrolled = useScroll(20)
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useQueryParam<string>("sort", "");
  const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useAllProducts();
  const productsCount = data?.pages[0].count ?? 0;
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: Element | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      if (node) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
        observer.current.observe(node);
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  return (
    <>
      <section>

        <div  style={{position:scrolled ? "sticky" : "static"}} className=" top-0 z-50 mx-auto  flex h-14 items-center justify-between border-b border-b-black/10 bg-white px-4 text-black shadow-[0_2px_8px_rgba(0,0,0,0.05)] md:px-48">
          <div className="flex w-full items-baseline justify-between xl:max-w-6xl">
            <div className="flex-1">
              <span className=" font-bold capitalize md:text-2xl">
                All shoes ({productsCount})
              </span>
            </div>

            <div className="flex flex-1 items-center justify-end gap-x-4 text-sm font-semibold md:gap-x-12 md:text-base">
              <Select
                options={sortOptions}
                setSelectedOption={setSelectedSort}
                selectedOption={selectedSort}
                placeholder="Sort By"
              />
              <div
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="flex cursor-pointer items-center gap-x-1 md:gap-x-2"
              >
                <span className="hidden md:inline" >Filters</span>
               <div className="bg-[#f0f0f0] p-2 rounded-2xl md:bg-transparent md:p-0 md:rounded-none" >

                <LuSettings2 />
               </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full items-center pb-24">
          {isSidebarOpen && <Sidebar handleClose={() => setSidebarOpen(false)} />}

          <div className="mx-auto w-full max-w-8xl">
            <div className="grid min-h-dvh grid-cols-1 items-center justify-center gap-8 px-12 py-8 md:grid-cols-2 xl:grid-cols-3">
              {isPending
                ? Array.from({ length: 9 }).map((_, i) => <Loader className="min-w-50 md:min-w-100 min-h-75" variant="card-loader" key={i} />)
                : data?.pages.flatMap((page) => page.data)?.map((item) => {
                    return <Card item={item} key={item.id} />;
                  })}
            </div>
            <div className="h-2 w-full" ref={lastElementRef}></div>
            {isFetchingNextPage ? (
              <p className="text-center text-xl font-semibold">Loading...</p>
            ) : null}
          </div>
        </div>

       
      </section>
    </>
  );
}

export default Products;
