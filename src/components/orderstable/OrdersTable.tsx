import React from "react";
import styles from "./orderstable.module.css";

const OrdersTable = () => {
  return (
    <>
      <thead className="bg-[#E4E4E4]">
        <tr>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Order Id
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Product
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Customer
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Cost(kes)
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Quantity
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Total</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Status
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left p-[3px]  ">2324</td>
          <td className="text-left p-[3px]  ">Eros nulla </td>
          <td className="text-left p-[3px]  ">Benson Ndwati</td>
          <td className="text-left p-[3px]  ">4675</td>
          <td className="text-left p-[3px]  ">2875</td>
          <td className="text-left p-[3px]  ">2911</td>
          <td className="flex items-center  text-left p-[3px]  ">
            <div className={styles.on__way}></div>
            <p className="ml-2">On way</p>
          </td>
          <td className="text-left p-[3px]  ">...</td>
        </tr>
        <tr>
          <td className="text-left p-[3px]  ">2324</td>
          <td className="text-left p-[3px]  ">Eros nulla </td>
          <td className="text-left p-[3px]  ">Benson Ndwati</td>
          <td className="text-left p-[3px]  ">4675</td>
          <td className="text-left p-[3px]  ">2875</td>
          <td className="text-left p-[3px]  ">2911</td>
          <td className="flex items-center  text-left p-[3px]  ">
            <div className={styles.on__way}></div>
            <p className="ml-2">On way</p>
          </td>
          <td className="text-left p-[3px]  ">...</td>
        </tr>
        <tr>
          <td className="text-left p-[3px]  ">2324</td>
          <td className="text-left p-[3px]  ">Eros nulla </td>
          <td className="text-left p-[3px]  ">Benson Ndwati</td>
          <td className="text-left p-[3px]  ">4675</td>
          <td className="text-left p-[3px]  ">2875</td>
          <td className="text-left p-[3px]  ">2911</td>
          <td className="flex items-center  text-left p-[3px]  ">
            <div className={styles.on__way}></div>
            <p className="ml-2">On way</p>
          </td>
          <td className="text-left p-[3px]  ">...</td>
        </tr>
        <tr>
          <td className="text-left p-[3px]  ">2324</td>
          <td className="text-left p-[3px]  ">Eros nulla </td>
          <td className="text-left p-[3px]  ">Benson Ndwati</td>
          <td className="text-left p-[3px]  ">4675</td>
          <td className="text-left p-[3px]  ">2875</td>
          <td className="text-left p-[3px]  ">2911</td>
          <td className="flex items-center  text-left p-[3px]  ">
            <div className={styles.on__way}></div>
            <p className="ml-2">On way</p>
          </td>
          <td className="text-left p-[3px]  ">...</td>
        </tr>
        <tr>
          <td className="text-left p-[3px]  ">2324</td>
          <td className="text-left p-[3px]  ">Eros nulla </td>
          <td className="text-left p-[3px]  ">Benson Ndwati</td>
          <td className="text-left p-[3px]  ">4675</td>
          <td className="text-left p-[3px]  ">2875</td>
          <td className="text-left p-[3px]  ">2911</td>
          <td className="flex items-center  text-left p-[3px]  ">
            <div className={styles.on__way}></div>
            <p className="ml-2">On way</p>
          </td>
          <td className="text-left p-[3px]  ">...</td>
        </tr>
      </tbody>
    </>
  );
};

export default OrdersTable;
