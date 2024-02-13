import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import COSTICON from "../../../../public/assets/cost.svg";

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
          <div></div>
          <div>
            <div className="flex items-center">
              <Image
                src={COSTICON}
                alt=""
                width={15}
                height={15}
              />
              <p>Cost</p>
            </div>
            <p className="font-semibold">Kes /= 4,500</p>
          </div>
          <div></div>
        </section>
      </div>
    </main>
  );
};

export default page;
