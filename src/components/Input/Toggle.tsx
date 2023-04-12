"use client";

import React, { AriaAttributes, useState } from "react";

interface Props extends AriaAttributes {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: any, state: boolean) => void;
  onActive?: (e: any) => void;
  onInactive?: (e: any) => void;
}

const Toggle = ({
  checked = false,
  disabled = false,
  onChange,
  onActive,
  onInactive,
  ...rest
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleOnChange = (e: any) => {
    if (disabled) return;

    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(e, newChecked);

    if (newChecked) {
      onActive?.(e);
    } else {
      onInactive?.(e);
    }
  };

  return (
    <label className="inline-flex h-[1.76rem] cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        aria-checked={isChecked}
        checked={isChecked}
        onClick={handleOnChange}
        {...rest}
        readOnly
      />
      <div
        className={`toggle toggle-dark toggle-ball peer ${
          disabled ? "bg-red-200" : "bg-purple"
        }`}
      ></div>
    </label>
  );
};

export default Toggle;
