import React from "react";
import styles from "./staffs.module.css";
import Image from "next/image";
import Link from "next/link";
import Staff from "@/components/staff/Staff";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="#">
            <p className="font-semibold">Creat new staff</p>
          </Link>
          <div
            className="ml-4 flex"
            title="Expenses total"
          >
            <p className="font-semibold bg-[#4682B4] py-[3px] px-3 rounded-lg text-white">
              (20) Present
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search staff ..."
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
          <select className="ml-3 rounded-md py-2 px-3 bg-[#FFEAC1] outline-0 text-semibold">
            <option>Select Department</option>
            <option value="interio">Interior</option>
            <option value="exterior">Exterior</option>
          </select>
        </div>
      </section>
      <section className={`${styles.staffs__wrapper} w-full gap-2 mt-5`}>
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
        <Staff />
      </section>
    </main>
  );
};

export default page;
