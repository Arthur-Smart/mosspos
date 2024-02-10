import React from "react";
import styles from "./product.module.css";
import Image from "next/image";

const Product = () => {
  return (
    <div className={styles.product}>
      <Image
        src=""
        alt=""
        width={200}
        height={300}
        className={styles.product__image}
      />
    </div>
  );
};

export default Product;
