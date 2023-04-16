import React, { AriaAttributes, InputHTMLAttributes, Ref } from "react";

import classNames from "classnames";

export interface InputProps
  extends AriaAttributes,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  innerRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
}

const Input = ({
  label,
  type = "text",
  innerRef,
  className,
  ...rest
}: InputProps) => {
  const Component: any = type === "textarea" ? "textarea" : "input";

  return (
    <label className="flex flex-1 flex-col gap-2">
      <span className="input-label">{label}</span>
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
    </label>
  );
};

export default Input;
