import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import COSTICON from "../../../../public/assets/cost.svg";
import VOLUMEICON from "../../../../public/assets/volume.svg";
import STOCKICON from "../../../../public/assets/stock.svg";

const page = () => {
  return (
    <main className="flex items-center justify-between w-full p-3 mt-4">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex flex-col">
        <section>
          <h1>Supermatt Plus Emulsion</h1>
          <p className="bg-sky-700 py-[2px] px-2 rounded-lg w-[fit-content] text-white">
            Interior
          </p>
        </section>
        <section className="mt-3">
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
      </div>
    </main>
  );
};

export default page;
