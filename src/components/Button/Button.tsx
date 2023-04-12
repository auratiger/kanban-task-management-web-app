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
}

const chooseStyle = (style: Style) => {
  switch (style) {
    case Style.PRIMARY:
      return "btn-hover";

    case Style.SECONDARY:
      return "btn-secondary btn-secondary-hover";

    case Style.DESCTRUCTIVE:
      return "btn-destructive btn-destructive-hover";
  }
};

const Button = ({
  text,
  onClick,
  className,
  btnStyle = Style.PRIMARY,
  size = Size.MEDIUM,
  ...rest
}: Props) => {
  return (
    <button
      className={`btn btn-disabled ${chooseStyle(btnStyle)} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
