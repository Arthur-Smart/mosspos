import React from "react";
import styles from "./products.module.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <Link href="#">
          <p className="font-semibold">Create new product</p>
        </Link>
        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search by name"
              className={`${styles.search__input} outline-0`}
            />
            <Image
              src="./assets/search.svg"
              alt=""
              width={20}
              height={20}
              className="ml-2"
            />
          </div>
          <select className="ml-3 rounded-md py-2 px-3 bg-[#FFEAC1] outline-0">
            <option>Select category</option>
            <option value="interio">Interior</option>
            <option value="exterior">Exterior</option>
          </select>
        </div>
      </section>
      <section className={`${styles.products__wrapper} w-full`}></section>
    </main>
  );
};

export default page;
