import Image from "next/image";

import AddToCart from "../Cart/AddToCart";

const ProductItem = ({ products }) => {
  return (
    <div>
      <div className="h-[22rem] w-full flex flex-col justify-between">
        <div className="relative h-[14rem] w-full rounded-lg">
          <Image
            src={products.image.mobile}
            alt={products.name}
            height={240}
            width={240}
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full h-full"
          />

          <AddToCart
            showQty={false}
            products={products}
            increasePerClick={true}
            redirect={false}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-sm text-Rose400">{products.category}</p>
          <p className="font-semibold tracking-wide text-ProductName">
            {products.name}
          </p>
          <p className="text-primary font-semibold">${products.price}0</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
