import type { OrderItem } from "@/features/orders/OrderItem";

type OrderStatus = OrderItem["status"];

const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-orange-700",
  paid: "bg-blue-950",
  processing: "bg-indigo-700",
  shipped: "bg-sky-800",
  delivered: "bg-emerald-800",
  cancelled: "bg-red-800",
};

function Status({ status }: { status: OrderStatus }) {
  return (
    <div
      className={`${statusStyles[status]} rounded-md px-2 py-2 text-center font-medium text-white capitalize`}
    >
      <span>{status}</span>
    </div>
  );
}

export default Status;
