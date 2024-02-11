import React from "react";
import styles from "./newcustomer.module.css";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section>
        <h2 className="font-semibold">
          Customers <span className="text-[#6E7373]">/ Add customer</span>
        </h2>
      </section>
      <section className="w-full flex mt-4">
        <div className="w-[23%]">
          <h2 className="font-semibold text-[16px]">Customer Image</h2>
          <div
            className={`${styles.profile__img__cont} shadow-lg rounded-md mt-2 flex items-center justify-center`}
          >
            <Image
              src="./assets/photo.svg"
              alt=""
              width={35}
              height={35}
            />
          </div>
          <button className="bg-[#283593] w-[230px] mt-3 flex items-center justify-center rounded-md py-2 ">
            <Image
              src="./assets/add.svg"
              alt=""
              width={15}
              height={15}
            />
            <p className="text-white text-[17px] ml-2">Uploaod</p>
          </button>
          <p className="mt-2 text-[14px] text-[#707070]">Max file size 5MB</p>
          <p className="mt-2 text-[14px] text-[#707070] -mt-[3px]">
            Allowed files; jpg, jpeg, png
          </p>
        </div>
        <div className="w-[77%] flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div className={`${styles.input} flex flex-col`}>
              <label className="font-semibold">Customer name*</label>
              <input
                placeholder="Enter custoemr name"
                type="text"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
            </div>
            <div className={`${styles.input} flex flex-col`}>
              <label className="font-semibold">Customer phone*</label>
              <input
                placeholder="Enter customer name"
                type="text"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between mt-6">
            <div className={`${styles.input} flex flex-col`}>
              <label className="font-semibold">Customer email*</label>
              <input
                placeholder="Enter customer email"
                type="email"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
            </div>
            <div className={`${styles.input} flex flex-col`}>
              <label className="font-semibold">Customer Location*</label>
              <input
                placeholder="Enter customer location"
                type="text"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between mt-6">
            <div className={`${styles.input} flex flex-col`}>
              <label className="font-semibold">No of Orders*</label>
              <input
                placeholder="Enter customer email"
                type="email"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
            </div>
            <div className={`${styles.input} flex`}>
              <input
                placeholder="Enter customer location"
                type="checkbox"
                className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
              />
              <p className="font-semibold ml-2">
                Sign in for the Email Campaign
              </p>
            </div>
          </div>
          <button className="bg-[#0E1935] px-5 py-2 flex mt-11 rounded-md text-white self-end">
            Create
          </button>
        </div>
      </section>
    </main>
  );
};

export default page;
