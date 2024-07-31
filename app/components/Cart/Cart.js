import Image from "next/image";
import remove from "@/public/images/icon-remove-item.svg";
import carbon from "@/public/images/icon-carbon-neutral.svg";
import { useEffect, useState } from "react";

const Cart = ({ emptyCart, numberOfItems, items }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const removeItem = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);

    //remove item from cart and update total
  };

  useEffect(() => {
    console.log(items);
    const total = items.reduce((acc, item) => {
      return acc + parseFloat(item.price);
    }, 0);
    setTotal(total);
    setCartItems(items);
  }, [items, setCartItems, cartItems]);

  return (
    <div
      className="h-auto w-full mt-8 bg-white rounded-lg py-8 px-5 flex flex-col gap-y-8 shadow-md 
      lg:fixed lg:top-0 lg:right-24 lg:w-[24rem]"
    >
      <h2 className="text-2xl text-primary font-bold">
        Your Cart {`(${cartItems.length === 0 ? 0 : numberOfItems})`}
      </h2>
      {cartItems.length === 0 ? (
        <>
          <Image
            src={emptyCart}
            alt="icon of chocolate with a slice taken out"
            className="self-center h-[10rem] w-[10rem]"
          />

          <p className="self-center text-Rose500 text-sm font-semibold">
            Your added items will appear here
          </p>
        </>
      ) : (
        cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between h-auto pb-3 px-2 border-b border-gray-200"
            >
              <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-semibold text-Rose900">{item.name}</h3>
                  <div className="flex items-center gap-x-5">
                    <span className="text-sm text-primary">1x</span>
                    <p className="text-sm text-gray-400">@ ${item.price}0</p>
                    <p className="text-sm text-gray-400">$0.00</p>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center justify-center h-[1.2rem] w-[1.2rem] border-2 
                border-Rose400 rounded-full hover:cursor-pointer"
              >
                <Image
                  src={remove}
                  alt="icon for removing item"
                  className="font-bold"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </div>
          );
        })
      )}

      {cartItems.length === 0 ? (
        ""
      ) : (
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <p className="text-md text-Rose900">Order Total</p>
            <p className="text-3xl font-bold text-Rose900">${total}</p>
          </div>

          <div className="h-12 w-full bg-Rose100 rounded-lg flex justify-center items-center gap-x-2">
            <Image
              src={carbon}
              alt="carbon neutral icon"
              className="h-6 w-6"
              style={{ objectFit: "contain" }}
            />
            <p className="text-sm text-Rose900">
              This is a <span className="font-bold">carbon-neutral</span>
              delivery
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
