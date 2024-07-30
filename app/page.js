import { data } from "@/Data/Data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <h1 className="text-4xl font-bold tracking-wide">Desserts</h1>

      <div className="flex flex-col gap-y-5 pt-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[22rem] w-full flex flex-col justify-between"
            >
              <div className="h-[14rem] w-full rounded-lg ">
                <Image
                  src={item.image.mobile}
                  alt={item.name}
                  height={240}
                  width={240}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-full"
                />
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
    </main>
  );
}
