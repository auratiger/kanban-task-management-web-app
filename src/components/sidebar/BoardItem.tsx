import { ReactNode } from "react";

import classNames from "classnames";

import NoSsr from "../NoSsr";

interface BoardsItemProps {
  active?: boolean;
  secondary?: boolean;
  renderIcon?: () => ReactNode;
  children?: any;
  className?: string;
}

const BoardItem = ({
  active = false,
  secondary = false,
  renderIcon,
  className,
  children,
}: BoardsItemProps) => {
  return (
    <NoSsr>
      <div
        className={classNames(
          "flex w-[80%] items-center gap-2 rounded-r-full fill-[#828FA3] py-2 pl-8",
          active && "bg-purple fill-white text-white",
          "hover:bg-purple/10 hover:fill-purple hover:text-purple hover:dark:bg-white",
          secondary && "fill-purple text-purple",
          `${className}`
        )}
      >
        {renderIcon?.()}
        {children}
      </div>
    </NoSsr>
  );
};

export default BoardItem;
