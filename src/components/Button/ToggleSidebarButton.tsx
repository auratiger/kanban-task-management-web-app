"use client";

import React, { useState } from "react";

import HideSidebarIcon from "../icons/HideSidebarIcon";
import ShowSidebarIcon from "../icons/ShowSidebarIcon";

const ToggleSidebarButton = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <button
        type="button"
        hide-sidebar={`${show}`}
        className="flex items-center gap-4"
        onClick={() => setShow(false)}
      >
        <HideSidebarIcon />
        <span>Hide Sidebar</span>
      </button>

      {/* TODO: add an animation from left to right when hiding the sidebar */}
      {!show && (
        <button
          type="button"
          show-sidebar={`${show}`}
          onClick={() => setShow(true)}
          className="absolute bottom-8 left-0 grid aspect-[4/3] w-[50px] place-content-center rounded-r-full bg-purple text-transparent"
        >
          <ShowSidebarIcon />
        </button>
      )}
    </>
  );
};

export default ToggleSidebarButton;
