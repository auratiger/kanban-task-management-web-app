import { SVGAttributes } from "react";

export interface ChevronProps extends SVGAttributes<SVGElement> {
  up?: boolean;
}

const ChevronIcon = ({ up = false, ...rest }: ChevronProps) => {
  return (
    <>
      {up ? (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path
            stroke="#635FC7"
            stroke-width="2"
            fill="none"
            d="M9 6 5 2 1 6"
          />
        </svg>
      ) : (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path
            stroke="#635FC7"
            stroke-width="2"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      )}
    </>
  );
};

export default ChevronIcon;
