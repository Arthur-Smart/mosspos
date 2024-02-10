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
          <div>
            <input
              placeholder="Search by name"
              className={styles.search__input}
            />
            <Image
              src="./assests/search.svg"
              alt=""
              width={25}
              height={25}
            />
          </div>
          <select className="ml-3">
            <option>Select category</option>
          </select>
        </div>
      </section>
    </main>
  );
};

export default page;
