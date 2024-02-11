import React from "react";
import styles from "./newexpense.module.css";
import Header from "@/components/Header";

const page = () => {
  return (
    <main className="w-full p-3 mt-4">
      <Header
        title="Expense"
        subtitle="Create new expense"
      />
      <section className="w-full flex flex-col mt-7">
        <div className="w-full flex items-center justify-between">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Expense category*</label>
            <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
              <option value="manufacturing">Manufacturing</option>
              <option value="marketing">Marketing</option>
              <option value="salary">Salary</option>
            </select>
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Expense Amount*</label>
            <input
              placeholder="Enter expense amount"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Vendor*</label>
            <input
              placeholder="Enter vendor name"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Payment method *</label>
            <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
              <option value="cash">Cash</option>
              <option value="mpesa">M-pesa transfer</option>
              <option value="bank">Bank transfer</option>
            </select>
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Department *</label>
            <select className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md">
              <option value="sale">Sale</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="markeing">Marketing</option>
            </select>
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Date*</label>
            <input
              placeholder="Enter vendor name"
              type="date"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Prepared by*</label>
            <input
              placeholder="Enter participant name"
              type="text"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex flex-col`}>
            <label className="font-semibold">Attachment</label>
            <input
              placeholder="Enter vendor name"
              type="file"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
          </div>
          <div className={`${styles.input} flex ml-2`}>
            <input
              placeholder="Enter vendor name"
              type="checkbox"
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            />
            <p className="ml-2">Automatic approval request</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6">
          <div className={`${styles.textarea} flex flex-col`}>
            <label className="font-semibold">Instruction</label>
            <textarea
              placeholder="Add some expense note ..."
              className="border-[1px] border-gray-200 outline-0 py-2 px-3 rounded-md"
            ></textarea>
          </div>
        </div>
        <button className="bg-[#0E1935] px-5 py-2 self-end mt-3 rounded-md text-white">
          Create
        </button>
      </section>
    </main>
  );
};

export default page;
