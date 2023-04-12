"use client";

import React, { useState } from "react";

import Button from "./Button/Button";
import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import Input, { GroupedInput, InputProps } from "./Input/Input";
import AddTaskPortal from "./AddTaskPortal";

const items: Array<InputProps> = [
  {
    placeholder: "e.g Take coffee break",
    onRemove: () => {},
  },
  {
    placeholder: "e.g Take coffee break",
    onRemove: () => {},
  },
];

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
        />
        {showPortal && (
          <AddTaskPortal onClose={handleOnClose}>
            <span className="text-head-lg">Add New Task</span>

            <Input placeholder="e.g Take coffee break" label="Title" />
            <Input
              placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little."
              type="textarea"
              label="Description"
              rows={5}
            />

            <GroupedInput label="Subtasks" items={items} />
          </AddTaskPortal>
        )}
        <VerticalEllipsis />
      </div>
    </header>
  );
};

export default Header;
