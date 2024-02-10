import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 py-4 flex flex-col">
      <div className="cards__wrapper flex gap-2">
        <div className="shadow-lg card p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[17px]">Total Orders</p>
            <h1 className="font-bold text-[25px] text-[#283593]">2367</h1>
          </div>
          <Image
            src="./assets/cart.svg"
            alt=""
            width={25}
            height={25}
          />
        </div>
        <div className="shadow-lg card p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[17px]">Total Sales</p>
            <h1 className="font-bold text-[25px] text-[#4CAF50]">55,000</h1>
          </div>
          <Image
            src="./assets/arrowup.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="shadow-lg card p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[17px]">Expenses</p>
            <h1 className="font-bold text-[25px] text-[#FF9800]">12,500</h1>
          </div>
          <Image
            src="./assets/arrowdown.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="shadow-lg card p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[17px]">Current Inventory</p>
            <h1 className="font-bold text-[25px] text-[#BFD3DB]">12,000</h1>
          </div>
          <Image
            src="./assets/invent.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="invoice__payment mt-8">
        <div className="invoice w-[70%] flex items-center justify-between shadow-lg">
          <Link href="#">
            <h2 className="font-semibold">Create new invoice</h2>
          </Link>
          <div className=" py-2 px-3 rounded-full flex items-center">
            <input
              type="text"
              placeholder="Search by name"
              className="outline-0 search__invoice__input"
            />
            <Image
              src="./assets/search.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="payment w-[30%]"></div>
      </div>
    </main>
  );
}
