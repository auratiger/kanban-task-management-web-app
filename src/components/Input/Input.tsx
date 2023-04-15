import React, { AriaAttributes, InputHTMLAttributes, Ref } from "react";

import classNames from "classnames";

import CrossIcon from "../icons/CrossIcon";

export interface InputProps
  extends AriaAttributes,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onRemove?: () => void;
  innerRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
}

const Input = ({
  label,
  type = "text",
  innerRef,
  onRemove,
  className,
  ...rest
}: InputProps) => {
  const Component: any = type === "textarea" ? "textarea" : "input";

  return (
    <label className="flex flex-col gap-2">
      <span className="input-label">{label}</span>
      <div className="flex items-center gap-6">
        <Component
          ref={innerRef}
          className={classNames(
            "flex-1 resize-none rounded-lg border border-lines-dark bg-transparent p-4",
            "placeholder:text-inherit/25 text-body-lg leading-md text-black placeholder:font-normal dark:text-white",
            "invalid:border-red invalid:text-red-200",
            `${className}`
          )}
          {...rest}
        />
        {onRemove && <CrossIcon onClick={onRemove} />}
      </div>
    </label>
  );
};

export interface GroupedInputProps {
  label?: string;
  items: Array<any>;
}

export const GroupedInput = ({ label, items }: GroupedInputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label id="groupLabel" className="input-label">
          {label}
        </label>
      )}
      {items.map((item, index: number) => (
        <Input key={`input-${index}`} {...item} aria-labelledby="groupLabel" />
      ))}
    </div>
  );
};

export default Input;
