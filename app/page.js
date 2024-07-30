import { data } from "@/Data/Data";
import Image from "next/image";
import addToCart from "@/public/images/icon-add-to-cart.svg";
import emptyCart from "@/public/images/illustration-empty-cart.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5 lg:px-24 lg:py-10">
      <h1 className="text-4xl font-bold tracking-wide">Desserts</h1>

      <div className="flex flex-col gap-y-5 pt-8 lg:grid lg:grid-cols-3 lg:gap-x-5 lg:w-2/3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[22rem] w-full flex flex-col justify-between"
            >
              <div className="relative h-[14rem] w-full rounded-lg ">
                <Image
                  src={item.image.mobile}
                  alt={item.name}
                  height={240}
                  width={240}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-full"
                />

                <button
                  className="absolute -bottom-[1.2rem] left-[50%] -translate-x-[50%] bg-white rounded-full border-[1.5px] border-Rose300 
                  w-1/2 h-11 lg:w-2/3 lg:h-10
                  flex items-center justify-center gap-x-2 text-sm font-medium text-Rose900"
                >
                  <Image src={addToCart} alt="add to cart" />
                  Add to Cart
                </button>
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="text-sm text-Rose400">{item.category}</p>
                <p className="font-semibold tracking-wide text-ProductName">
                  {item.name}
                </p>
                <p className="text-primary font-semibold">${item.price}0</p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="h-auto w-full mt-8 bg-white rounded-lg py-8 px-5 flex flex-col gap-y-8 shadow-md 
      lg:fixed lg:top-0 lg:right-24 lg:w-[24rem]"
      >
        <h2 className="text-2xl text-primary font-bold">Your Cart {`(0)`}</h2>
        <Image
          src={emptyCart}
          alt="icon of chocolate with a slice taken out"
          className="self-center h-[10rem] w-[10rem]"
        />
        <p className="self-center text-Rose500 text-sm font-semibold">
          Your added items will appear here
        </p>
      </div>
    </main>
  );
}
