import React, {
  AriaAttributes,
  InputHTMLAttributes,
  useId,
  useState,
} from "react";

import classNames from "classnames";

import ChevronIcon from "./icons/ChevronIcon";
import SearchIcon from "./icons/SearchIcon";

export interface DropdownItem {
  name: string;
}

export interface DropdownProps
  extends AriaAttributes,
    InputHTMLAttributes<HTMLInputElement> {
  items?: Array<DropdownItem>;
  filter?: boolean;
  firstDefault?: boolean;
  label?: string;
  placeholder?: string;
}

const Dropdown = ({
  items: initialItems,
  label,
  placeholder = "",
  filter,
  firstDefault = true,
  className,
  onClick,
  ...rest
}: DropdownProps) => {
  const [items] = useState<Array<DropdownItem>>(initialItems || []);

  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState(firstDefault ? items[0]?.name : "");
  const [open, setOpen] = useState(false);

  const inputId = useId();

  const handleClick = (e) => {
    setOpen((prev) => !prev);

    onClick?.(e);
  };

  return (
    <div className="relative isolate">
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <button className="relative isolate flex w-full" onClick={handleClick}>
        <input
          value={selected}
          {...rest}
          placeholder={placeholder}
          id={inputId}
          type="text"
          readOnly
          className={classNames(
            "flex flex-1 items-center justify-between truncate rounded-lg border border-lines-dark bg-transparent py-4 pl-5 pr-[max(10%,1.5rem)] placeholder:text-white focus-within:border-purple",
            !selected && "text-gray-700",
            `${className}`
          )}
        />
        <ChevronIcon
          up={open}
          className="absolute right-[4%] top-1/2 -translate-y-1/2 scale-150"
        />
      </button>

      <ul
        className={classNames(
          "scrollbar absolute inset-x-0 mt-2 flex flex-col gap-1 overflow-y-auto rounded-lg border border-lines-light bg-white px-2 py-4 text-grey-medium dark:bg-grey-vdark",
          open ? "flex max-h-60" : "hidden max-h-0"
        )}
      >
        {filter && (
          <div className="mx-4 mb-2 flex items-center border-b bg-white dark:bg-grey-vdark dark:text-white">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              placeholder="Enter name"
              className="bg-transparent p-2 outline-none placeholder:text-grey-medium dark:placeholder:text-white"
            />
          </div>
        )}

        {items?.map(({ name }, index: number) => (
          <li
            key={`drop-${index}`}
            className={classNames(
              "flex rounded-sm text-sm hover:bg-purple/[.25] hover:text-black dark:hover:text-white",
              name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-purple/[.25] text-black dark:text-white",
              filter &&
                (name?.toLowerCase().startsWith(searchValue)
                  ? "block"
                  : "hidden")
            )}
          >
            <button
              className="flex-1 truncate p-2 text-left"
              onClick={() => {
                if (name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(name);
                  setOpen(false);
                  setSearchValue("");
                }
              }}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;