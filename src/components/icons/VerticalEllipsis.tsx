"use client";

import { useState } from "react";

import OpenPortalButton from "../OpenPortalButton";

import { PORTALS } from "@/enums/portals";

const VerticalEllipsis = ({ onClick, ...rest }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
    onClick?.();
  };

  return (
    <>
      <button type="button" {...rest} onClick={handleClick}>
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute right-8 top-[calc(var(--header-height)-5px)] flex w-[150px] flex-col items-start gap-4 rounded-xl border border-lines-dark bg-white p-4 text-body-lg font-light dark:bg-grey-dark">
          <OpenPortalButton
            unstyled
            className="hover:text-white/[.825]"
            portal={PORTALS.EDIT_BOARD}
            text="Edit Board"
          />

          <OpenPortalButton
            unstyled
            portal={PORTALS.DELETE_BOARD}
            className="text-red hover:text-red/[.825]"
            text="Delete Board"
          />
        </div>
      )}
    </>
  );
};

export default VerticalEllipsis;
