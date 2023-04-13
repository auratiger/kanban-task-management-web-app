import React, { useState } from "react";

import ChevronDownIcon from "./icons/ChevronDownIcon";
import ChevronUpIcon from "./icons/ChevronUpIcon";
import SearchIcon from "./icons/SearchIcon";

export interface DropdownItem {
  name: string;
}

export interface DropdownProps {
  items?: Array<DropdownItem>;
  filter?: boolean;
}

const Dropdown = ({ items: initialItems, filter }: DropdownProps) => {
  const [items, setItems] = useState<Array<DropdownItem>>(initialItems || []);

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-lg border border-lines-dark bg-transparent bg-white p-4 ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      <ul
        className={`mt-2 overflow-y-auto bg-white ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {filter && (
          <div className="sticky top-0 mx-4 flex items-center border-b bg-white">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Enter name"
              className="p-2 outline-none placeholder:text-gray-700"
            />
          </div>
        )}
        {items?.map((item) => (
          <li
            key={item?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              item?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              filter &&
              (item?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden")
            }`}
            onClick={() => {
              if (item?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
