import React from "react";
import styles from "./invoice.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Order from "@/components/order/Order";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <Header
        title="Invoice"
        subtitle="INVMSP-23567"
      />
      <section className="w-full flex items-center justify-between mt-4">
        <div>
          <p>
            <strong className="text-[15px]">Customer Name: </strong> Joshua
            Kimani
          </p>
          <p>
            <strong className="text-[15px]">Prepared by:</strong> Moses Kiarie
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <Image
              src="./assets/calendar.svg"
              alt=""
              width={25}
              height={25}
            />
            <p>12/02/2024</p>
          </div>

          <div className="flex">
            <p>
              <strong className="text-[15px]">Invoce Paid</strong>
            </p>
            <Image
              src="./assets/success.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2"
            />
          </div>
        </div>
      </section>
      <section>
        {" "}
        <p className="mt-11 font-semibold">Products</p>
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
      </section>
      <section className="flex items-center justify-between mt-9">
        <div>
          <h3 className="font-semibold">Total: (kes) 100,000</h3>
        </div>
        <div className="flex items-center">
          <Image
            src="./assets/delete.svg"
            alt=""
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <Image
            src="./assets/edit.svg"
            alt=""
            width={24}
            height={24}
            className="ml-[2px] cursor-pointer"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
