import React from "react";
import styles from "./order.module.css";
import Image from "next/image";

const Order = () => {
  return (
    <div className="py-[2px] px-3 rounded-full flex items-start justify-between border-[1px] border-gray-200">
      <div>
        <h1 className="font-semibold">Silk Vinly</h1>
        <p className="text-[#6E7373] text-[14px]">Qty 3 | Cost 3,000</p>
      </div>
      <Image
        src="./assets/close.svg"
        alt=""
        width={15}
        height={15}
        className="ml-3 cursor-pointer"
      />
    </div>
  );
};

export default Order;
