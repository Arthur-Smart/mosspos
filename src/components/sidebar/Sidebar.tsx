import Image from "next/image";
import React from "react";
import LOGO from "../../../public/assets/logo.png";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className="w-[20%] bg-[#122043] h-[100vh] flex flex-col items-center p-3">
      <Image
        src={LOGO}
        alt="Moss Paints"
        width={300}
        height={300}
        className={styles.logo}
      />
    </div>
  );
};

export default Sidebar;
