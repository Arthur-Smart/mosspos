import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import COSTICON from "../../../../public/assets/cost.svg";
import VOLUMEICON from "../../../../public/assets/volume.svg";
import STOCKICON from "../../../../public/assets/stock.svg";
import EDITICON from "../../../../public/assets/edit.svg";
import DELETEICON from "../../../../public/assets/delete.svg";
import PRODUCT from "../../../../public/assets/product2.svg";

const page = () => {
  return (
    <main className="flex items-center justify-between w-full p-3 mt-4">
      <div className="w-[50%] flex items-center justify-center">
        <Image
          src={PRODUCT}
          alt=""
          width={700}
          height={800}
        />
      </div>
      <div className="w-[50%] flex flex-col">
        <section className="flex items-center justify-between">
          <div>
            <h1 className="font-medium">Supermatt Plus Emulsion</h1>
            <p className="bg-sky-700 py-[2px] px-2 rounded-full w-[fit-content] text-white">
              Interior
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">Product instock</p>
            <span className="relative flex h-3 w-3 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
            </span>
          </div>
        </section>
        <section className="mt-5">
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="flex items-center">
                <Image
                  src={COSTICON}
                  alt=""
                  width={17}
                  height={17}
                />
                <p>Cost</p>
              </div>
              <p className="font-semibold">Kes /= 4,500</p>
            </div>

            <div>
              <div className="flex items-center">
                <Image
                  src={VOLUMEICON}
                  alt=""
                  width={15}
                  height={15}
                />
                <p>Volume</p>
              </div>
              <p className="font-semibold">20Lts</p>
            </div>
            <div>
              <div className="flex items-center">
                <Image
                  src={STOCKICON}
                  alt=""
                  width={15}
                  height={15}
                />
                <p>Remaining</p>
              </div>
              <p className="font-semibold">5 in number</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
        </section>
        <section className="py-2">
          <p className="text-gray-600">
            Super Matt Plus interior paint is a high-quality, premium paint
            designed to elevate your interior spaces. Its ultra-matte finish
            provides a smooth and velvety appearance, reducing light reflection
            for a sophisticated, modern look. Formulated with advanced
            technology, this paint offers exceptional coverage, hiding
            imperfections on walls while delivering a rich, deep color that
            lasts. Its durable nature makes it easy to clean and maintain,
            ensuring your walls retain their pristine finish for years to come
          </p>
        </section>
        <section>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p>Allowed discount</p>
              <h3 className="font-semibold text-gray-500">13% off</h3>
            </div>
            <div>
              <p>Income from product</p>
              <h3 className="font-semibold text-gray-500">(kes) 250,000</h3>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
        </section>
        <section className="flex items-center justify-between py-2 ">
          <button className="py-2 px-4 rounded-full bg-sky-700 text-white">
            View brochure
          </button>
          <div className="flex items-center">
            <Image
              src={EDITICON}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={DELETEICON}
              alt=""
              width={21}
              height={21}
              className="ml-[2px] cursor-pointer"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
