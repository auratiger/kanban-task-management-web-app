"use client";

import React, { useState } from "react";

import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import Button from "./Button";
import AddTaskPortal from "./AddTaskPortal";
import Input from "./Input";

const Header = () => {
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
        <span className="text-head-xl font-bold">Patform Launch</span>
        <Button
          className="ml-auto"
          text="+Add New Task"
          onClick={handleNewTask}
        />
        {showPortal && (
          <AddTaskPortal onClose={handleOnClose}>
            <span className="text-head-lg">Add New Task</span>

            <Input placeholder="Enter Name" label="Title" />
            <Input
              placeholder="Enter Name"
              label="Title"
              onRemove={() => {
                console.log("click");
              }}
            />
          </AddTaskPortal>
        )}
        <VerticalEllipsis />
      </div>
    </header>
  );
};

export default Header;
