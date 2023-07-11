"use client";
import AccountInfo from "@/components/core/AccountInfo";
import AccountMenuLinks from "@/components/core/AccountMenuLinks";
import OrdersInfo from "@/components/core/OrdersInfo";
import { useState } from "react";
export default function page() {
  enum Status {
    "active",
    "not active",
  }
  interface Selected {
    id: string;
    name: string;
    status: Status;
  }

  const [selectedItem, setSelectedItem] = useState<Selected[]>([
    {
      id: "1",
      name: "orders",
      status: Status["not active"],
    },
    {
      id: "2",
      name: "profile",
      status: Status["not active"],
    },
  ]);

  const populateItems = () => {
    const item = selectedItem.find((item) => item.status === Status.active);

    if (item?.name === "orders") {
      return <OrdersInfo />;
    } else if (item?.name === "profile") {
      return <AccountInfo />;
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl ">Account Setting</h1>

      <div className="flex ">
        <div>
          <AccountMenuLinks
            selectedItems={selectedItem}
            setSelectedItems={setSelectedItem}
          />
        </div>

        <div>{populateItems()}</div>
      </div>
    </div>
  );
}
