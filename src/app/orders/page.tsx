import React from "react";
import styles from "./orders.module.css";
import Image from "next/image";
import Link from "next/link";
import OrdersTable from "@/components/orderstable/OrdersTable";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <Link href="#">
          <p className="font-semibold">Create new order</p>
        </Link>
        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search order"
              className={`${styles.search__input} outline-0 py-[6px] px-2 rounded-md`}
            />
            <Image
              src="./assets/search.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2"
            />
          </div>
          <button className="ml-4">
            <Image
              src="./assets/filter.svg"
              alt=""
              width={27}
              height={27}
            />
          </button>
        </div>
      </section>
      <table className="w-full mt-5 overflow-hidden rounded-md">
        <OrdersTable />
      </table>
    </main>
  );
};

export default page;
