import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const Product = () => {
  return (
    <div
      className={`${styles.product} border-[1px] border-gray-200 rounded-md flex flex-col items-center p-2`}
    >
      <Image
        src="./assets/product.svg"
        alt=""
        width={300}
        height={400}
        className={`${styles.product__image} self-center`}
      />
      <div className="w-full">
        <h3 className="font-semibold text-[18px]">Extra shield</h3>
        <p className="font-medium -mt-[3px] text-gray-600">Kes 4,500</p>
      </div>
      <div className={styles.more__btn}>
        <Popover>
          <PopoverTrigger>
            <p>...</p>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center w-[100px] bg-[#DCDCDC] ">
            <Link
              href="/product/1234"
              className="mb-[1px] text-[14px] font-medium"
            >
              More
            </Link>
            <Link
              href="#"
              className="mb-[1px] text-[14px] font-medium"
            >
              Edit
            </Link>
            <button className="text-[14px] text-red-500">Delete</button>
          </PopoverContent>
        </Popover>
      </div>
      {/* <div className={styles.links__cont}>
        <p>Hello</p>
      </div> */}
    </div>
  );
};

export default Product;
