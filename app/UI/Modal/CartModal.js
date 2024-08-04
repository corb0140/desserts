import confirm from "@/public/images/icon-order-confirmed.svg";
import Image from "next/image";

const CartModal = () => {
  return (
    <>
      <div className="fixed h-screen w-full bottom-0 right-0 bg-black bg-opacity-70"></div>
      <div
        className="fixed bottom-0 h-[42rem] w-full right-0 bg-white rounded-t-[.5rem] shadow-2xl
      flex flex-col gap-y-5 p-10"
      >
        <Image
          src={confirm}
          alt="image of a green circle with a green tick in the middle"
          className="h-[4.2rem] w-[4.2rem]"
        />

        <h1 className="flex flex-col">
          <p className="font-bold text-5xl text-Rose900">Order</p>
          <p className="font-bold text-5xl text-Rose900 pt-2">Confirmed</p>
          <p className="text-sm text-Rose400 pt-4">
            We hope you enjoyed your food!
          </p>
        </h1>

        <div className="bg-Rose400 h-auto"></div>
      </div>
    </>
  );
};

export default CartModal;
