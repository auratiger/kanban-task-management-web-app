"use client";

import React, { useState } from "react";

import Button, { Size } from "./Button/Button";
import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import AddTaskPortal from "./portal/AddTaskPortal";
import Portal from "./portal/Portal";

const Header = () => {
  // TODO: make this a usePortal hook
  const [showPortal, setShowPortal] = useState<boolean>(false);
  const handleNewTask = () => {
    setShowPortal(true);
  };

  const handleOnClose = () => {
    setShowPortal(false);
  };

  return (
    <header className="header header-dark">
      <div className="logo-box px-4">
        <LogoIcon />
      </div>
      <div className="flex flex-1 items-center gap-8 px-8">
        <span className=" text-head-xl font-bold">Patform Launch</span>
        <Button
          className="ml-auto"
          text="+Add New Task"
          onClick={handleNewTask}
          size={Size.LARGE}
        />
        {showPortal && (
          <Portal onClose={handleOnClose}>
            <AddTaskPortal />
          </Portal>
        )}
        <VerticalEllipsis />
      </div>
    </header>
  );
};

export default Header;
