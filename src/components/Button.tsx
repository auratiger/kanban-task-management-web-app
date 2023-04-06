import React, { AriaAttributes, ButtonHTMLAttributes } from "react";

interface Props
  extends AriaAttributes,
    ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, onClick, className, ...rest }: Props) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
