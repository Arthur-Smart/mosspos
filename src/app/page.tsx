import Table from "@/components/table/Table";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 py-4 flex flex-col">
      <div className="cards__wrapper flex gap-2">
        <div className="shadow-lg card p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[17px]">Total Orders</p>
            <h1 className="font-bold text-[20px] text-[#283593]">2367</h1>
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
            <h1 className="font-bold text-[20px] text-[#4CAF50]">55,000</h1>
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
            <h1 className="font-bold text-[20px] text-[#FF9800]">12,500</h1>
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
            <h1 className="font-bold text-[20px] text-[#BFD3DB]">12,000</h1>
          </div>
          <Image
            src="./assets/invent.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="invoice__payment mt-8 gap-2 flex">
        <div className="invoice w-[70%] flex items-center shadow-lg flex flex-col p-2">
          <div className="w-full flex justify-between items-center">
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
          <table className="w-full">
            <Table />
          </table>
        </div>
        <div className="payment w-[30%] shadow-lg flex justify-between flex-col p-2">
          <div>
            <h2 className="font-semibold">Revenue Payment</h2>
            <div className="revenue__card bg-[#4CAF50]/50 rounded-md p-3 h-[130px] flex items-center mt-7">
              <div className="">
                <p className="text-black text-[15px] font-semibold">
                  M-pesa Transfers
                </p>
                <h1 className="font-black text-xl">Kes 55, 000</h1>
              </div>
            </div>
            <div className="revenue__card bg-[#FFEAC1] rounded-md p-3 h-[130px] flex items-center justify-between mt-4">
              <div className="">
                <p className="text-black text-[15px] font-semibold">
                  Bank - Transfers
                </p>
                <h1 className="text-black font-black text-xl">Kes 65, 000</h1>
              </div>
              <Image
                src="./assets/dropdown.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-7">
            <h2 className="font-bold text-lg">Total Kes 185,000</h2>
            <p className="text-[#4CAF50] font-semibold text-[14px]">
              Reset setting
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
