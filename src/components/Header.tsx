import { PORTALS } from "@/enums/portals";
import React from "react";

import LogoIcon from "./icons/Logo";
import VerticalEllipsis from "./icons/VerticalEllipsis";
import OpenPortalButton from "./OpenPortalButton";

const Header = () => {
  return (
    <>
      <header className="header header-dark">
        <div className="logo-box px-4">
          <LogoIcon />
        </div>
        <div className="flex flex-1 items-center gap-8 px-8">
          <span className=" text-head-xl font-bold">Patform Launch</span>
          <OpenPortalButton text="+Add New Task" portal={PORTALS.ADD_TASK} />
          <VerticalEllipsis />
        </div>
      </header>
    </>
  );
};

export default Header;
