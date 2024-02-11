import React from "react";
import styles from "./newproduct.module.css";
import Image from "next/image";
import Header from "@/components/Header";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <Header
        title="Products"
        subtitle="Add product"
      />
      <section className="w-full flex mt-4">
        <div className="w-[23%]">
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
        <div className="w-[77%] flex flex-col">
          <div className="w-full">
            {/* Create Product Input field */}
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
            <div className="flex w-full  mt-7">
              <div
                className={`${styles.textarea__wrapper} flex flex-col w-[67%]`}
              >
                <label className="font-semibold">Product Description*</label>
                <textarea
                  placeholder="Write description..."
                  className={`${styles.textarea} border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md`}
                ></textarea>
              </div>
              <div className="ml-2 w-[33%]">
                <label className="font-semibold">Product Brochure</label>
                <input type="file" />
                <p className="mt-2 text-[14px] text-[#707070]">
                  Max file size 5MB
                </p>
                <p className="mt-2 text-[14px] text-[#707070] -mt-[3px]">
                  Allowed files; jpg, jpeg, png
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-3">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Weight*</label>
                <input
                  placeholder="Enter product weight"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Discount</label>
                <input
                  placeholder="% Discount"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex`}>
                <input
                  placeholder="Enter product name"
                  type="checkbox"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md ml-2"
                />
                <p className="font-semibold ml-2">In stock</p>
              </div>
            </div>
          </div>
          {/* End of Create Product Input field */}
          <button className="bg-[#0E1935] px-5 py-2 self-end mt-3 rounded-md text-white">
            Create
          </button>
        </div>
      </section>
    </main>
  );
};

export default page;
