"use client";

import { data } from "@/app/data/Data";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import ProductItem from "@/app/components/Products/ProductItem";
import { hideLoading } from "./redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import CartModal from "@/app/UI/Modal/CartModal";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="flex min-h-screen flex-col p-5 lg:px-24 lg:py-10">
      <h1 className="text-4xl font-bold tracking-wide">Desserts</h1>

      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
        <div className="flex flex-col gap-y-5 pt-8 lg:grid lg:grid-cols-3 lg:gap-x-5 lg:w-3/4">
          {data.map((item) => {
            return <ProductItem products={item} key={item.id} />;
          })}
        </div>

        <div className="lg:w-1/4">
          <Cart click={openModal} />
        </div>
      </div>

      <Footer />

      {showModal && <CartModal click={openModal} />}
    </main>
  );
}
