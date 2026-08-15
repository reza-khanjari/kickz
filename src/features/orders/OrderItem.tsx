import Status from "@/ui/Status";
export type OrderItem = {
  id: string;
  status:
    | "pending"
    | "paid"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";
  total_amount: number;
  created_at: string;
};

function OrderItem({ item }: { item: OrderItem }) {
  const formatedDate = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(item.created_at));

  return (
    <div className="shadow-[0px_2px_8px_rgba(0,0,0,0.05)] w-full max-w-sm space-y-4 rounded-xl border border-black/10 bg-gray-50 p-8">
      <div className="w-full">
        <Status status={item.status} />
      </div>
      <div className="space-y-2 px-4">
        <p className="">
          {`ORDER ID: `}
          <span className="font-medium">{item.id}</span>
        </p>
        <p className="">
          {`DATE: `}
          <span className="font-medium">{formatedDate}</span>
        </p>
        <p className="">
          {`PRICE: `}
          <span className="font-medium">{item.total_amount}$</span>
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
