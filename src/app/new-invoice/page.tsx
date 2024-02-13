import React from "react";
import styles from "./newinvoice.module.css";
import Image from "next/image";
import Order from "@/components/order/Order";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="w-full flex flex-col">
        <div className="flex flex-col">
          <label className="font-semibold ">Customer name*</label>
          <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
            <input
              type="text"
              placeholder="Enter customer name "
              className="w-[80%] outline-0"
            />
            <Image
              src="./assets/search.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-semibold ">Prepared By*</label>
          <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
            <input
              type="text"
              placeholder="Enter person's name "
              className="w-[80%] outline-0"
            />
            <Image
              src="./assets/search.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div className="w-full flex items-center gap-2">
            <div className="w-[40%]">
              <label className="font-semibold ">Product</label>
              <div className="flex items-center justify-between  border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                <input
                  type="text"
                  placeholder="Enter product name "
                  className=" outline-0 w-[80%]"
                />
                <Image
                  src="./assets/search.svg"
                  width={25}
                  height={25}
                  alt=""
                />
              </div>
            </div>
            <div className="w-[40%] ">
              <label className="font-semibold ">Quantity</label>
              <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                <input
                  type="text"
                  placeholder="Quantity purchased"
                  className=" outline-0 w-[100%]"
                />
              </div>
            </div>
            <button className="w-[18%] bg-[#283593] py-2 px-3 rounded-md text-white mt-5">
              Add
            </button>
          </div>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md mt-2">
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
          </div>
        </div>
        <h1 className="mt-4 font-semibold">Total: (Kes) 250, 000</h1>
      </section>
    </main>
  );
};

export default page;
