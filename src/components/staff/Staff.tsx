import React from "react";
import styles from "./staff.module.css";
import Image from "next/image";
import STAFF from "../../../public/assets/admin.jpg";

const Staff = () => {
  return (
    <div
      className={`${styles.staff} rounded-md overflow-hidden border-[1px] border-gray-200`}
    >
      <Image
        src={STAFF}
        alt=""
        width={400}
        height={300}
        className={styles.staff__image}
      />
      <div className="w-full p-2 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Joseph Maina</h2>
          <p className="text-[15px] text-gray-600">Accountant</p>
        </div>
        <p className="text-[18px]">...</p>
      </div>
    </div>
  );
};

export default Staff;
