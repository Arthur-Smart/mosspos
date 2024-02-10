import React from "react";
import LOGO from "../../../public/assets/logo.png";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { ILink } from "@/interfaces/links";

const Sidebar = () => {
  const links: ILink[] = [
    {
      id: 1,
      image: "./assets/home.svg",
      title: "Home",
    },
    {
      id: 2,
      image: "./assets/troll.svg",
      title: "Products",
    },
    {
      id: 3,
      image: "./assets/customers.svg",
      title: "Customers",
    },
    {
      id: 4,
      image: "./assets/orders.svg",
      title: "Orders",
    },
    {
      id: 5,
      image: "./assets/sales.svg",
      title: "Sales",
    },
    {
      id: 6,
      image: "./assets/expense.svg",
      title: "Expenses",
    },
    {
      id: 7,
      image: "./assets/report.svg",
      title: "Reports",
    },
    {
      id: 8,
      image: "./assets/stuffs.svg",
      title: "Stuffs",
    },
    // {
    //   id: 9,
    //   image: "./assets/stuffs.svg",
    //   title: "Settings",
    // },
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
            className="flex items-center mb-9 cursor-pointer"
          >
            <Image
              src={link.image}
              alt=""
              width={20}
              height={20}
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
