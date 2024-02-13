"use client";

import React, { useState } from "react";
import styles from "./newinvoice.module.css";
import Image from "next/image";
import Order from "@/components/order/Order";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <main className="w-full p-3 mt-4">
      <section className="w-full flex flex-col">
        <div className="flex flex-col">
          <label className="font-semibold ">Customer name*</label>
          <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-[2px] px-3 rounded-md">
            <input
              type="text"
              placeholder="Enter customer name "
              className="w-[80%] outline-0"
            />
            <Popover>
              <PopoverTrigger>
                {/* <Image
                  src="./assets/search.svg"
                  width={25}
                  height={25}
                  alt=""
                /> */}
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Search customer..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-semibold ">Prepared By*</label>
          <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-[2px] px-3 rounded-md">
            <input
              type="text"
              placeholder="Enter person's name "
              className="w-[80%] outline-0"
            />
            <Popover>
              <PopoverTrigger>
                {/* <Image
                  src="./assets/search.svg"
                  width={25}
                  height={25}
                  alt=""
                /> */}
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Search product..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div className="w-full flex items-center gap-2">
            <div className="w-[40%]">
              <label className="font-semibold ">Product</label>
              <div className="flex items-center justify-between  border-[1px] border-gray-200 outline-0 py-[2px] px-3 rounded-md">
                <input
                  type="text"
                  placeholder="Enter product name "
                  className=" outline-0 w-[80%]"
                />
                <Popover>
                  <PopoverTrigger>
                    {/* <Image
                  src="./assets/search.svg"
                  width={25}
                  height={25}
                  alt=""
                /> */}
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        : "Search person..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-[40%] ">
              <label className="font-semibold ">Quantity</label>
              <div className="flex items-center justify-between border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
                <input
                  type="text"
                  placeholder="Quantity purchased"
                  className=" outline-0 w-[100%]"
                />
              </div>
            </div>
            <button className="w-[18%] bg-[#283593] py-2 px-3 rounded-md text-white mt-5">
              Add
            </button>
          </div>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md mt-4">
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
          </div>
        </div>
        <h1 className="mt-4 font-semibold">Total: (Kes) 250, 000</h1>
      </section>
    </main>
  );
};

export default page;
