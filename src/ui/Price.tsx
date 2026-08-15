interface Price {
  price: number;
  discount: number;
}
function Price({ price, discount }:Price) {
  const discountedPrice = price - (price * discount) / 100;
  return (
    <div className="my-2 flex items-center gap-x-2">
      <span className="text-2xl font-bold">${discountedPrice} </span>
      <span className="text-lg font-bold text-gray-500 line-through">
        ${price}{" "}
      </span>
      <span className="text-xl font-bold text-emerald-700">
        {discount}% OFF
      </span>
    </div>
  );
}

export default Price;
