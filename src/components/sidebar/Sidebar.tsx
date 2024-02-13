"use client";

import React from "react";
import LOGO from "../../../public/assets/logo.png";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ILink } from "@/interfaces/links";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const links: ILink[] = [
    {
      id: 1,
      path: "/",
      image: "./assets/home.svg",
      title: "Home",
    },
    {
      id: 2,
      path: "/products",
      image: "./assets/troll.svg",
      title: "Products",
    },
    {
      id: 3,
      path: "/customers",
      image: "./assets/customers.svg",
      title: "Customers",
    },
    {
      id: 4,
      path: "/orders",
      image: "./assets/orders.svg",
      title: "Orders",
    },
    {
      id: 5,
      path: "/sales",
      image: "./assets/sales.svg",
      title: "Sales",
    },
    {
      id: 6,
      path: "/expenses",
      image: "./assets/expense.svg",
      title: "Expenses",
    },
    {
      id: 7,
      path: "/reports",
      image: "./assets/report.svg",
      title: "Reports",
    },
    {
      id: 8,
      path: "/staffs",
      image: "./assets/stuffs.svg",
      title: "Staffs",
    },
    {
      id: 9,
      path: "/settings",
      image: "./assets/stuffs.svg",
      title: "Settings",
    },
  ];
  return (
    <div
      className={`${styles.sidebar} w-[20%] bg-[#122043] h-[100vh] flex flex-col items-center justify-between p-3`}
    >
      <Image
        src={LOGO}
        alt="Moss Paints"
        width={300}
        height={300}
        className={styles.logo}
      />
      <div className={`${styles.links_wrapper} mt-6`}>
        {links.map((link) => (
          <Link href={link.path}>
            <div
              key={link.id}
              className="flex items-center mb-7 cursor-pointer"
            >
              <div
                className={
                  link.path == pathname ? "bg-[#FF9800] p-2 rounded-md" : ""
                }
              >
                <Image
                  src={link.image}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>

              <p className="text-white ml-2">{link.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-[#787E8E] text-white font-semibold py-2 px-7 w-[90%] rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
