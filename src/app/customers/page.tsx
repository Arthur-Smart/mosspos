import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./customers.module.css";
import CustomersTable from "@/components/customerstable/CustomersTable";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <Link href="#">
          <p className="font-semibold">Add a new customer</p>
        </Link>
        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search customer"
              className={`${styles.search__input} outline-0`}
            />
            <Image
              src="./assets/search.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-4 ">
        <table className="w-[100%]">
          <CustomersTable />
        </table>
      </section>
    </main>
  );
};

export default page;
