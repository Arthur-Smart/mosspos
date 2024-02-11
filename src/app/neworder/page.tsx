import React from "react";
import styles from "./neworder.module.css";
import Header from "@/components/Header";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <Header
        title="Orders"
        subtitle="Create order"
      />
      <section className="w-full flex flex-col mt-7">
        <div className="w-full flex items-center justify-between">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Customer Name*</label>
            <div className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md flex items-center justify-between">
              <input
                placeholder="Enter customer name"
                type="text"
                className="outline-0"
              />
              <Image
                src="./assets/search.svg"
                alt=""
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Product Name*</label>
            <input
              placeholder="Enter product name"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Product Quantity*</label>
            <input
              placeholder="Enter quantity"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Cost*</label>
            <input
              placeholder="Enter product cost"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Product Discount</label>
            <input
              placeholder="% Discount"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Total Cost*</label>
            <input
              defaultValue="51, 000"
              placeholder="Enter quantity"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Status*</label>
            <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
              <option>Preparation</option>
              <option>On the way</option>
              <option>Delivered</option>
              <option>Returned</option>
            </select>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.textarea} flex flex-col`}>
            <label className="font-semibold">Instruction</label>
            <textarea
              placeholder="Add some instruction note ..."
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            ></textarea>
          </div>
        </div>
        <button className="bg-[#0E1935] px-5 py-2 self-end mt-3 rounded-md text-white">
          Create
        </button>
      </section>
    </main>
  );
};

export default page;
