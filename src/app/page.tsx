import Image from "next/image";

export default function Home() {
  return (
    <main className="px-2 py-4">
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
    </main>
  );
}
