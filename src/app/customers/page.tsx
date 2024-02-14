import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./customers.module.css";
import CustomersTable from "@/components/customerstable/CustomersTable";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/newcustomer">
            <h2 className="font-semibold">Add a new customer</h2>
          </Link>
          <p className="py-[1px] px-2 ml-2 bg-sky-600 rounded-md text-white">
            25 customer present
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search customer..."
              className={`${styles.search__input} outline-0 py-[6px] px-2 rounded-md`}
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
      <section className="w-full mt-5">
        <table className="w-[100%]">
          <CustomersTable />
        </table>
      </section>
    </main>
  );
};

export default page;
