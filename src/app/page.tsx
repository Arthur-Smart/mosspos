import Image from "next/image";

export default function Home() {
  return (
    <main className="px-2 py-4">
      <div className="cards__wrapper">
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
      </div>
    </main>
  );
}
