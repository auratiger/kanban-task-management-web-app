import React, { AriaAttributes, InputHTMLAttributes } from "react";
import CrossIcon from "./icons/CrossIcon";

interface InputProps
  extends AriaAttributes,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onRemove?: () => void;
}

const Input = ({
  label,
  type = "text",
  onRemove,
  className,
  ...rest
}: InputProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="ml-4 text-body-lg text-grey-medium">{label}</span>
      <div className="flex items-center gap-6">
        <input
          className={`flex-1 rounded-lg border border-lines-dark bg-transparent p-6 text-body-lg text-grey-medium ${className}`}
          {...rest}
        />
        {onRemove && <CrossIcon onClick={onRemove} />}
      </div>
    </label>
  );
};

export default Input;
