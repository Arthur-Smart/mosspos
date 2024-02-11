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
        <div className="w-[25%]">
          <h2 className="font-semibold text-[16px]">Products Image</h2>
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
        <div className="w-[75%]">
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Product Name*</label>
                <input
                  placeholder="Enter product name"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">SKU*</label>
                <input
                  placeholder="Enter product name"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">Barcode type*</label>
                <input
                  placeholder="Enter product name"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-7">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Unit*</label>
                <input
                  placeholder="Enter number of units"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Cost*</label>
                <input
                  placeholder="Enter cost"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">Category*</label>
                <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                  <option value="interior">Interior</option>
                  <option value="enterior">Enterior</option>
                </select>
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-7">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Unit*</label>
                <input
                  placeholder="Enter number of units"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Cost*</label>
                <input
                  placeholder="Enter cost"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
