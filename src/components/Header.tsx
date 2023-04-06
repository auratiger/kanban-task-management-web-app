import React from "react";

import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box px-4">
        <LogoIcon />
      </div>
      <div className="flex flex-1 items-center gap-4 px-4">
        <span>Patform Launch</span>
        <Button className="ml-auto" text="+Add New Task" />
        <VerticalEllipsis />
      </div>
    </header>
  );
};

export default Header;
