import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { v4 as uuidv4 } from "uuid";

import Button, { Style } from "../Button/Button";
import CrossIcon from "../icons/CrossIcon";

import Input, { InputProps } from "./Input";

export interface GroupedInputProps {
  form: UseFormReturn;
  label?: string;
}

type Items = Pick<InputProps, "placeholder"> & {
  id: string;
};

const GroupedInput = ({ form, label }: GroupedInputProps) => {
  const { register, unregister } = form;

  const [items, setItems] = useState<Array<Items>>([]);

  const handleOnAddNewItem = (e: any) => {
    setItems((prev) => [
      ...prev,
      {
        id: uuidv4(),
        placeholder: "e.g Make Coffee",
      },
    ]);
  };

  const handleOnRemoveItem = (e: any, uid) => {
    setItems((prev) => prev.filter((item) => item.id !== uid));
    unregister(uid);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label id="groupLabel" className="input-label">
          {label}
        </label>
      )}
      <div className="scrollbar max-h-[200px] overflow-auto pr-4">
        {items.map((item) => {
          const { ref: inputRef, ...inputControl } = register(item.id, {
            required: true,
            maxLength: 30,
          });

          return (
            <div key={item.id} className="flex items-center gap-4">
              <Input
                innerRef={inputRef}
                {...item}
                aria-labelledby="groupLabel"
                {...inputControl}
              />

              <CrossIcon onClick={(e: any) => handleOnRemoveItem(e, item.id)} />
            </div>
          );
        })}
      </div>

      <Button
        text="+ Add New Subtask"
        onClick={handleOnAddNewItem}
        expand
        btnStyle={Style.SECONDARY}
        className="mt-4"
      />
    </div>
  );
};

export default GroupedInput;
