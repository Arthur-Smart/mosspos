import React from "react";
import styles from "./navbar.module.css";
import ADMIN from "../../../public/assets/admin.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className={`${styles.navbar} w-full shadow-md p-2 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <Image
          src={ADMIN}
          alt=""
          width={200}
          height={200}
          className={styles.admin__image}
        />
        <div className="ml-2">
          <h2 className="font-bold text-lg">Moses Kiarie</h2>
          <p className="-mt-2">Sales officer</p>
        </div>
        <Image
          src="./assets/dropdown.svg"
          alt=""
          width={20}
          height={20}
          className="ml-2 cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <button>
          <Image
            src="./assets/moon.svg"
            alt=""
            width={30}
            height={30}
          />
        </button>
        <div
          className={`${styles.notification__icon} flex items-center justify-center ml-3`}
        >
          <Image
            src="./assets/bell.svg"
            alt=""
            width={20}
            height={20}
            className=""
          />
          <div className={`${styles.count} flex items-center justify-center `}>
            <p className="font-semibold text-[14px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
