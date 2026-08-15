import OrderItem from "@/features/orders/OrderItem";
import useOrdersQuery from "@/features/orders/useOrdersQuery";
import Heading from "@/ui/Heading";
import Loader from "@/ui/Loader";

function ProfileOrders() {
  const { data, isLoading } = useOrdersQuery();

  return (
    <div className="h-full w-full">
      <Heading className="font-medium" level="h2">Order History</Heading>
      <div className="mx-auto grid h-full w-full grid-cols-1 gap-x-8 gap-y-8 py-8 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 9 }, (_,i) => (
              <Loader key={i} variant="card-loader" className="min-h-75 min-w-75" />
            ))
          : data?.map((item) => <OrderItem item={item} />)}
      </div>
    </div>
  );
}

export default ProfileOrders;
