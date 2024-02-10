import React from "react";
import styles from "./product.module.css";
import Image from "next/image";

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
        <p className="font-medium">Kes 4,500</p>
      </div>
      <div className={styles.more__btn}>
        <button className="">...</button>
      </div>
    </div>
  );
};

export default Product;
