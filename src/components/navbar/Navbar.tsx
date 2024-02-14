import React from "react";
import styles from "./navbar.module.css";
import ADMIN from "../../../public/assets/admin.jpg";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

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
        <HoverCard>
          <HoverCardTrigger>
            <Image
              src="./assets/dropdown.svg"
              alt=""
              width={20}
              height={20}
              className="ml-3 cursor-pointer"
            />
          </HoverCardTrigger>
          <HoverCardContent className="mt-5">
            <div className="flex items-center mb-2">
              Admin
              <p className="bg-green-500 py-[1px] px-4 text-white rounded-md ml-2">
                true
              </p>
            </div>
            <Link
              href="#"
              className="mt-4"
            >
              Visit your account setting
            </Link>
          </HoverCardContent>
        </HoverCard>
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
          <Sheet>
            <SheetTrigger>
              <Image
                src="./assets/bell.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>You have 15 unread notifications</SheetTitle>
                <SheetDescription className="border-gray-200 border-[1px] p-3 rounded-md">
                  Josphine Katheka sent you an Email.
                  <button className="p-2 rounded-md bg-[#283593] text-white mt-2">
                    Mark as read
                  </button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className={`${styles.count} flex items-center justify-center `}>
            <p className="font-semibold text-[14px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
