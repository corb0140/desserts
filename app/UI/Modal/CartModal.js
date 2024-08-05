import confirm from "@/public/images/icon-order-confirmed.svg";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeAllFromCart } from "@/app/redux/slices/cartSlice";

const CartModal = ({ click }) => {
  const { cartItems, taxPrice, totalPrice } = useSelector(
    (state) => state.cart
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const startNewOrder = () => {
    dispatch(removeAllFromCart());
    router.push("/");
  };
  return (
    <div className="flex lg:items-center lg:justify-center">
      <div className="fixed h-screen w-full bottom-0 right-0 bg-black bg-opacity-70"></div>
      <div
        className="fixed h-[90%] w-full lg:w-1/3 bottom-0 right-0 lg:bottom-[50%] lg:right-[50%] 
        lg:translate-x-[50%] lg:translate-y-[50%] bg-white rounded-t-[.5rem] lg:rounded-[.5rem] shadow-2xl
        flex flex-col gap-y-5 px-5 py-10"
      >
        <Image
          src={confirm}
          alt="image of a green circle with a green tick in the middle"
          className="h-[4rem] w-[4rem]"
        />

        <h1 className="flex flex-col">
          <p className="font-bold text-5xl text-Rose900">Order</p>
          <p className="font-bold text-5xl text-Rose900 pt-2">Confirmed</p>
          <p className="text-sm text-Rose400 pt-4">
            We hope you enjoyed your food!
          </p>
        </h1>

        {/* ITEMS */}
        <div className="bg-Rose100 h-[60%] overflow-y-auto w-full rounded-lg py-5">
          {cartItems.map((item, index) => {
            const itemPrice = (item.price * item.qty).toFixed(2);
            return (
              <div
                key={index}
                className="flex items-center justify-between h-auto py-3 px-2"
              >
                <div className="flex items-center gap-x-5 w-full border-b border-gray-200 pb-5">
                  <div className="flex gap-x-5 w-full">
                    <Image
                      src={item.image.thumbnail}
                      alt="image of item"
                      width={50}
                      height={50}
                      className="h-10 w-10 rounded-lg"
                    />

                    <div className="w-full">
                      <h3 className="font-semibold text-Rose900">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-x-5">
                        <span className="text-sm text-primary">
                          <select value={item.qty} className="bg-Rose100">
                            {[...Array(item.qty).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </span>
                        <p className="text-sm text-Rose500">@ ${item.price}</p>

                        <p className="text-sm font-semibold text-Rose900">
                          ${itemPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ,
          <div className="flex flex-col gap-y-2 px-5">
            <div className="flex flex-col gap-y-5 pb-5">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <p className="text-md text-Rose900">Tax Price</p>
                  <p className="text-3xl font-bold text-Rose900">${taxPrice}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-md text-Rose900">Order Total</p>
                  <p className="text-3xl font-bold text-Rose900">
                    ${totalPrice}
                  </p>
                </div>
              </div>
            </div>

            <button
              className="bg-primary rounded-full h-12 flex items-center justify-center text-sm 
        font-medium text-white hover:cursor-pointer"
              onClick={() => {
                click();
                startNewOrder();
              }}
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
