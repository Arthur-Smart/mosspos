import React from "react";
import LOGO from "../../../public/assets/logo.png";
import styles from "./sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  interface ILink {
    id: number;
    image: HTMLImageElement;
    title: string;
  }
  const links = [
    {
      id: 1,
      image: LOGO,
      title: "Home",
    },
    {
      id: 2,
      image: LOGO,
      title: "Products",
    },
    {
      id: 3,
      image: LOGO,
      title: "Customers",
    },
    {
      id: 4,
      image: LOGO,
      title: "Orders",
    },
    {
      id: 5,
      image: LOGO,
      title: "Sales",
    },
    {
      id: 6,
      image: LOGO,
      title: "Expenses",
    },
    {
      id: 7,
      image: LOGO,
      title: "Reports",
    },
    {
      id: 8,
      image: LOGO,
      title: "Stuffs",
    },
  ];
  return (
    <div className="w-[20%] bg-[#122043] h-[100vh] flex flex-col items-center justify-between p-3">
      <Image
        src={LOGO}
        alt="Moss Paints"
        width={300}
        height={300}
        className={styles.logo}
      />
      <div className={`${styles.links_wrapper} mt-6`}>
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center mb-7 cursor-pointer"
          >
            <Image
              src={link.image}
              alt=""
              width={25}
              height={25}
            />
            <p className="text-white ml-2">{link.title}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#787E8E] text-white font-semibold py-2 px-7 w-[90%] rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
