import classNames from "classnames";
import React, { AriaAttributes, ButtonHTMLAttributes } from "react";

export enum Style {
  PRIMARY,
  SECONDARY,
  DESCTRUCTIVE,
}

export enum Size {
  LARGE,
  MEDIUM,
  SMALL,
}

interface Props
  extends AriaAttributes,
    ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  btnStyle?: Style;
  size?: Size;
  expand?: boolean;
}

const chooseSize = (style: Size) => {
  switch (style) {
    case Size.LARGE:
      return "px-12 py-4 text-head-md";

    case Size.MEDIUM:
      return "px-8 py-4 text-body-lg";

    case Size.SMALL:
      return "px-8 py-3 text-body-lg";
  }
};

const chooseStyle = (style: Style) => {
  switch (style) {
    case Style.SECONDARY:
      return "btn-secondary";

    case Style.DESCTRUCTIVE:
      return "btn-destructive";

    default:
      return "";
  }
};

const Button = ({
  text,
  onClick,
  className,
  btnStyle = Style.PRIMARY,
  size = Size.MEDIUM,
  expand = false,
  type = "button",
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      className={classNames(
        "btn",
        `${chooseStyle(btnStyle)}`,
        `${chooseSize(size)}`,
        `${className}`,
        expand && "w-auto"
      )}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
