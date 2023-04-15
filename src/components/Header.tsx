"use client";

import React from "react";

import Button, { Size } from "./Button/Button";
import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import AddTaskPortal from "./portal/AddTaskPortal";
import usePortal from "../hooks/usePortal";

const Header = () => {
  const { openPortal, closePortal, Portal } = usePortal();

  return (
    <>
      <header className="header header-dark">
        <div className="logo-box px-4">
          <LogoIcon />
        </div>
        <div className="flex flex-1 items-center gap-8 px-8">
          <span className=" text-head-xl font-bold">Patform Launch</span>
          <Button
            className="ml-auto"
            text="+Add New Task"
            onClick={openPortal}
            size={Size.LARGE}
          />
          <VerticalEllipsis />
        </div>
      </header>

      <Portal onClose={closePortal}>
        <AddTaskPortal />
      </Portal>
    </>
  );
};

export default Header;
