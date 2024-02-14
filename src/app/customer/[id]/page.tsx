import React from "react";
import styles from "./customer.module.css";
import Image from "next/image";
import ADDICON from "../../../../public/assets/add2.svg";
import CUSTOMERIMG from "../../../../public/assets/admin.jpg";
import MOREICON from "../../../../public/assets/more2.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <section className="flex items-center justify-between">
        <div>
          <p>
            <span className="font-black">15</span> Orders in total
          </p>
        </div>
        <div className="flex">
          <button className="border-[1px] border-gray-200 hover:bg-[#283593] hover:text-white py-2 px-4 rounded-md outline-0">
            Generate Invoice
          </button>
          <div className="flex items-center ml-2 cursor-pointer">
            <p> Create Delivery note</p>
            <Image
              src={ADDICON}
              alt=""
              width={24}
              height={24}
              className="ml-[2px]"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center position-relative bg-gradient-to-r from-violet-600 to-indigo-600 p-3 rounded-md mt-3">
        <div className="flex flex-col items-center">
          <Image
            src={CUSTOMERIMG}
            alt=""
            width={400}
            height={400}
            className={styles.customer__img}
          />
          <Popover>
            <PopoverTrigger>
              <div className="-mt-5 h-[45px] w-[45px] bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src={MOREICON}
                  alt=""
                  width={4}
                  height={4}
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
              <Link
                href="#"
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
        <div className="ml-6">
          <p className="text-white text-5xl font-bold mb-4">Joshua Kimani</p>
          <p className="text-white ">Id: CMP467344 </p>
          <p className="text-white ">Location: Nairobi Kenya</p>
          <p className="text-white ">Phone: 0786785786</p>
          <p className="text-white ">Email: joshua@gmail.com</p>
        </div>
      </section>
    </main>
  );
};

export default page;
