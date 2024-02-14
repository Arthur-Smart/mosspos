import React from "react";
import styles from "./expenses.module.css";
import Link from "next/link";
import Image from "next/image";
import ExpenseTable from "@/components/expencetable/ExpenseTable";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="#">
            <p className="font-semibold">Create new expense</p>
          </Link>
          <div
            className="ml-4 flex"
            title="Expenses total"
          >
            <p className="font-semibold bg-[#6C8B9F] py-[3px] px-3 rounded-lg text-white">
              (Kes) 55,000
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search expense ..."
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
      <table className="w-full mt-7 rounded-md overflow-hidden">
        <ExpenseTable />
      </table>
    </main>
  );
};

export default page;
