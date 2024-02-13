import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const Table = () => {
  return (
    <table className="w-full mt-3 overflow-hidden rounded-md">
      <tr className="w-full bg-[#E4E4E4] rounded-md">
        <th className="text-[15px] font-semibold text-center p-2">
          Invoice Id
        </th>
        <th className="text-[15px] font-semibold text-center p-2">Customer</th>
        <th className="text-[15px] font-semibold text-center p-2">Product</th>
        <th className="text-[15px] font-semibold text-center p-2">Cash</th>
        <th className="text-[15px] font-semibold text-center p-2">
          Invoice Date
        </th>
        <th className="text-[15px] font-semibold text-left p-2">Prepared By</th>
        <th className="text-[15px] font-semibold text-left p-2">Action</th>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
              <Link
                href="/invoice/1344"
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
              <Link
                href="/invoice/1344"
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
              <Link
                href="/invoice/1344"
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
        </td>
      </tr>
      <tr className="w-full text-center">
        <td className="py-2 px-3 font-medium text-[15px]">2833</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kyle Ross</td>
        <td className="py-2 px-3 font-medium text-[15px]">Product</td>
        <td className="py-2 px-3 font-medium text-[15px]">522$</td>
        <td className="py-2 px-3 font-medium text-[15px]">30/09/2020</td>
        <td className="py-2 px-3 font-medium text-[15px]">Kelly Garrett</td>

        <td className=" py-2 px-3 font-medium text-[15px]">
          <Popover>
            <PopoverTrigger>
              <p className="action__btn">...</p>
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
        </td>
      </tr>
    </table>
  );
};

export default Table;
