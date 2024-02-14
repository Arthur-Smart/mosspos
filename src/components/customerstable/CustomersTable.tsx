import React from "react";
import styles from "./customerstable.module.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const CustomersTable = () => {
  return (
    <>
      <thead className="bg-[#E4E4E4]">
        <tr>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Customer Id
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Name</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Phone</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Location
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Email</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            No of Orders
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Debit</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Balance
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">(314)279-0801</td>
          <td className="text-left p-[3px]">York</td>
          <td className="text-left p-[3px]">patricia@mail.com</td>
          <td className="text-left p-[3px]">6785</td>
          <td className="text-left p-[3px]">4642</td>
          <td className="text-left p-[3px]">2471</td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Link
                  href="/customer/123"
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
      </tbody>
    </>
  );
};

export default CustomersTable;
