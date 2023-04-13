import React, { AriaAttributes, ButtonHTMLAttributes } from "react";

export enum Style {
  PRIMARY,
  SECONDARY,
  DESCTRUCTIVE,
}

export enum Size {
  LARGE,
  MEDIUM,
}

interface Props
  extends AriaAttributes,
    ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  btnStyle?: Style;
  size?: Size;
  expand?: boolean;
}

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
  ...rest
}: Props) => {
  return (
    <button
      className={`btn ${chooseStyle(btnStyle)} ${className} ${
        expand && "w-auto"
      }`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
