import Image from "next/image";
import remove from "@/public/images/icon-remove-item.svg";
import carbon from "@/public/images/icon-carbon-neutral.svg";
import emptyCart from "@/public/images/illustration-empty-cart.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQty,
} from "@/app/redux/slices/cartSlice";

const Cart = () => {
  const { loading, cartItems, totalPrice, taxPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const addToCartHandler = (item, qty) => {
    dispatch(addToCart({ ...item, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(updateQty(1));
  };

  return (
    <div
      className="h-auto w-full mt-8 bg-white rounded-lg py-8 px-5 flex flex-col gap-y-8 shadow-md 
      lg:fixed lg:top-0 lg:right-24 lg:w-[24rem]"
    >
      <h2 className="text-2xl text-primary font-bold">
        Your Cart
        {`(${loading ? 0 : cartItems.reduce((a, c) => a + c.qty, 0)})`}
      </h2>

      {loading ? (
        <div>
          <div className="py-5 px-2">Loading...</div>
        </div>
      ) : cartItems.length === 0 ? (
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
          const itemPrice = (item.price * item.qty).toFixed(2);
          return (
            <div
              key={index}
              className="flex justify-between h-auto pb-3 px-2 border-b border-gray-200"
            >
              <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-semibold text-Rose900">{item.name}</h3>
                  <div className="flex items-center gap-x-5">
                    <span className="text-sm text-primary">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.qty).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </span>
                    <p className="text-sm text-gray-400">@ ${item.price}</p>
                    <p className="text-sm text-gray-400">${itemPrice}</p>
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
                  onClick={() => removeFromCartHandler(item.id)}
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
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-md text-Rose900">Tax Price</p>
              <p className="text-3xl font-bold text-Rose900">${taxPrice}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md text-Rose900">Order Total</p>
              <p className="text-3xl font-bold text-Rose900">${totalPrice}</p>
            </div>
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

          <button
            className="bg-primary rounded-full h-12 flex items-center justify-center text-sm 
        font-medium text-white hover:cursor-pointer"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
