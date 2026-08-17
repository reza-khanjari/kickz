import { supabase } from "@/supabase/supabase";
import type { CreateOrderInput } from "./useCreateOrder";

async function createOrder(orderData: CreateOrderInput) {

  const { data, error: orderError } = await supabase
    .from("orders")
    .insert([{
      user_id: orderData.userId,
      total_amount: orderData.totalAmount,
      status: "pending",
    }]).select("*").single()
    ;

 if (orderError) {
  console.error('Supabase error:', orderError.code, orderError.message, orderError.details, orderError.hint);
  throw new Error(orderError.message);
}

  const orderItems = orderData.orderItems.map((item) => {
    return {
      order_id: data.id,
      variant_id: item.variantId,
      quantity: item.quantity,
      price: item.price,
    };
  });
  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);
  if (itemsError) {
    throw new Error(itemsError.message);
  }
}

export default createOrder;
