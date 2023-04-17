"use client";

import Button, { Size } from "./Button/Button";
import AddTaskPortal from "./portal/AddTaskPortal";
import BoardPortal from "./portal/BoardPortal";

import { PORTALS } from "@/enums/portals";
import usePortal from "@/hooks/usePortal";

interface OpenPortalWrapperProps {
  unstyled?: boolean;
  text: string;
  portal: PORTALS;
}

const choosePortal = (portal: PORTALS) => {
  switch (portal) {
    case PORTALS.ADD_TASK:
      return <AddTaskPortal />;

    case PORTALS.CREATE_BOARD:
      return <BoardPortal />;

    case PORTALS.DELETE_BOARD:
      return;
  }
};

const OpenPortalButton = ({
  unstyled,
  text,
  portal,
}: OpenPortalWrapperProps) => {
  const { openPortal, Portal } = usePortal();

  return (
    <>
      {unstyled ? (
        <button onClick={openPortal}>{text}</button>
      ) : (
        <Button
          className="ml-auto"
          text={text}
          onClick={openPortal}
          size={Size.LARGE}
        />
      )}

      <Portal>{choosePortal(portal)}</Portal>
    </>
  );
};

export default OpenPortalButton;
