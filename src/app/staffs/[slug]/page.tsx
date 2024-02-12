import React from "react";
import styles from "./staff.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import USER from "../../../../public/assets/admin.jpg";
import ADD from "../../../../public/assets/add.svg";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <Header
        title="Stuff"
        subtitle="John Kamau"
      />
      <section className="w-full flex mt-4">
        <div className="w-[23%]">
          <h2 className="font-semibold text-[16px]">User Image</h2>
          <div
            className={`${styles.profile__img__cont} shadow-lg overflow-hidden rounded-md mt-2 flex items-center justify-center`}
          >
            <Image
              src={USER}
              alt=""
              width={600}
              height={600}
              className={styles.user__image}
            />
          </div>
          <button className="bg-[#283593] w-[230px] mt-3 flex items-center justify-center rounded-md py-2 ">
            <Image
              src={ADD}
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

        {/* Create new user input fields */}
        <div className="w-[77%] flex flex-col">
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">User Name*</label>
                <input
                  value="John Kamau"
                  placeholder="Enter staff name"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">Department*</label>
                <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                  <option value="interior">Manufacturing</option>
                  <option value="enterior">Sales</option>
                </select>
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">Phone*</label>
                <input
                  value="0765746578"
                  placeholder="Enter user phone"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-7">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Email*</label>
                <input
                  value="johnkamau@gmail.com"
                  placeholder="Enter number of units"
                  type="email"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Address</label>
                <input
                  value="Lanet Danger"
                  placeholder="Enter cost"
                  type="text"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">Is Admin*</label>
                <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                  <option value="interior">False</option>
                  <option value="enterior">True</option>
                </select>
              </div>
            </div>
            <div className="flex w-full items-center justify-between mt-7">
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Joined On</label>
                <input
                  value="02/22/2024"
                  placeholder="Enter number of units"
                  type="date"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col`}>
                <label className="font-semibold">Leaving on</label>
                <input
                  placeholder="Enter cost"
                  type="date"
                  className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
                />
              </div>
              <div className={`${styles.input} flex flex-col `}>
                <label className="font-semibold">User Id*</label>
                <div className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md  flex items-center ">
                  <input
                    value="MSP_23465"
                    type="text"
                    className="outline-0 w-[50%]"
                  />
                  <button className="bg-[#283593] w-[50%] text-[15px] p-[2px] text-white rounded-md">
                    Auto generate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full  mt-7">
              <div
                className={`${styles.textarea__wrapper} flex flex-col w-full`}
              >
                <label className="font-semibold">Bio</label>
                <textarea
                  placeholder="Write staff bio..."
                  className={`${styles.textarea} border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md`}
                ></textarea>
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
