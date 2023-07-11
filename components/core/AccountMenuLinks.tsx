"use client";
import { CreditCard, User, Trash, Truck } from "lucide-react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { DeleteAccountAlertDialog } from "./DeleteAccountAlertDialog";
import { Dispatch, SetStateAction } from "react";

enum Status {
  "active",
  "not active",
}

interface Selected {
  id: string;
  name: string;
  status: Status;
}

interface selectedItems {
  selectedItems: Selected[];
  setSelectedItems: Dispatch<SetStateAction<Selected[]>>;
}
export default function AccountMenuLinks({
  selectedItems,
  setSelectedItems,
}: selectedItems) {
  const handleSelect = (id: number, name: string) => {
    setSelectedItems((prevItems) => {
      return prevItems.map((item) => {
        if (parseInt(item.id) === id && item.name === name) {
          return {
            ...item,
            status:
              item.status === Status["not active"]
                ? Status.active
                : Status["not active"],
          };
        }
        if (item.status === Status.active && parseInt(item.id) !== id) {
          item.status = Status["not active"];
        }
        return item;
      });
    });
  };

  console.log(selectedItems);
  return (
    <div className="w-52 mx-2 p-4">
      <Command className="rounded-lg border shadow-md">
        <CommandList>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            {selectedItems.map((value, index: number) => (
              <div onClick={() => handleSelect(parseInt(value.id), value.name)}>
                <CommandItem key={index}>
                  {value.name === "orders" ? (
                    <Truck className="mr-2 h-4 w-4" />
                  ) : value.name === "profile" ? (
                    <User className="mr-2 h-4 w-4" />
                  ) : null}
                  <span>{value.name}</span>
                </CommandItem>
              </div>
            ))}

            <CommandItem className="mt-4">
              <Trash className="mr-2 h-4 w-4" />
              <DeleteAccountAlertDialog />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
