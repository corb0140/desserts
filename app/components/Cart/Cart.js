import Image from "next/image";

const Cart = ({ emptyCart, numberOfItems }) => {
  return (
    <div
      className="h-auto w-full mt-8 bg-white rounded-lg py-8 px-5 flex flex-col gap-y-8 shadow-md 
      lg:fixed lg:top-0 lg:right-24 lg:w-[24rem]"
    >
      <h2 className="text-2xl text-primary font-bold">
        Your Cart {`(${numberOfItems})`}
      </h2>
      <Image
        src={emptyCart}
        alt="icon of chocolate with a slice taken out"
        className="self-center h-[10rem] w-[10rem]"
      />

      <p className="self-center text-Rose500 text-sm font-semibold">
        Your added items will appear here
      </p>
    </div>
  );
};

export default Cart;
