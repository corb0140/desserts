import Image from "next/image";

export default function Button({ src, text, style, click }) {
  return (
    <button
      className={` bg-white rounded-full border-[1.5px] border-Rose300 flex items-center justify-center gap-x-2 text-sm 
        font-medium text-Rose900 ${style}`}
      onClick={click}
    >
      <Image src={src} alt="add to cart" />
      {text}
    </button>
  );
}
