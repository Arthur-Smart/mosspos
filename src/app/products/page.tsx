import React from "react";
import styles from "./products.module.css";
import Link from "next/link";
import Image from "next/image";
import Product from "@/components/product/Product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <Link href="/newproduct">
          <p className="font-semibold">Create new product</p>
        </Link>
        <div className="flex items-center">
          <div className="flex">
            <input
              placeholder="Search by name ..."
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
          {/* <select className="ml-3 rounded-md py-2 px-3 bg-[#FFEAC1] outline-0 text-semibold">
            <option>Select category</option>
            <option value="interio">Interior</option>
            <option value="exterior">Exterior</option>
          </select> */}
          <Select>
            <SelectTrigger className="w-[180px] ml-3 rounded-md py-2 px-3 outline-0 text-semibold">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="intrior">Interior</SelectItem>
              <SelectItem value="exterior">Exterior</SelectItem>
              <SelectItem value="wall">Wall preparation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section className={`${styles.products__wrapper} w-full gap-2 mt-5`}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  );
};

export default page;
