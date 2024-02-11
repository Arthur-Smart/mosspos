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
          <button className="bg-[#283593] w-[200px] mt-3 flex items-center justify-center rounded-md py-2 ">
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
        <div className="w-[75%]"></div>
      </section>
    </main>
  );
};

export default page;
