import OrderItem from "@/features/orders/OrderItem";
import useOrdersQuery from "@/features/orders/useOrdersQuery";
import Heading from "@/ui/Heading";
import Skeleton from "@/ui/Skeleton";

function ProfileOrders() {
  const { data, isLoading } = useOrdersQuery();

  return (
    <div className="h-full w-full">
      <Heading className="font-medium" level="h2">Order History</Heading>
      <div className="mx-auto grid h-full w-full grid-cols-1 gap-x-8 gap-y-8 py-8 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }, (_,i) => (
              <Skeleton key={i} variant="card"  />
            ))
          : data?.map((item) => <OrderItem item={item} />)}
      </div>
    </div>
  );
}

export default ProfileOrders;
