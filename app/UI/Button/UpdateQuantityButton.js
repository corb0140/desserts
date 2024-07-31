import Image from "next/image";
import increment from "@/public/images/icon-increment-quantity.svg";
import decrement from "@/public/images/icon-decrement-quantity.svg";

export default function UpdateQuantityButton({
  decrease,
  currentNumber,
  increase,
}) {
  return (
    <div
      className={` bg-primary rounded-full flex items-center justify-between px-5 text-sm 
        font-medium text-white absolute -bottom-[1.2rem] left-[50%] -translate-x-[50%] w-1/2 h-11 lg:w-2/3 lg:h-10`}
    >
      <button
        onClick={decrease}
        className="h-5 w-5 rounded-full hover:bg-secondary transition duration-300 flex items-center justify-center"
      >
        <Image src={decrement} alt="minus sign icon" className="" />
      </button>
      <span>{currentNumber}</span>
      <button
        onClick={increase}
        className="h-5 w-5 rounded-full hover:bg-secondary transition duration-300 flex items-center justify-center"
      >
        <Image src={increment} alt="plus sign icon" />
      </button>
    </div>
  );
}
