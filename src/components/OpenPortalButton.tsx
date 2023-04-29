"use client";

import Button, { Size } from "./Button/Button";
import AddTaskPortal from "./portal/AddTaskPortal";
import BoardPortal from "./portal/BoardPortal";
import DeleteBoardPortal from "./portal/DeleteBoardPortal";

import { PORTALS } from "@/enums/portals";
import usePortal from "@/hooks/usePortal";

interface OpenPortalWrapperProps {
  unstyled?: boolean;
  text: string;
  portal: PORTALS;
  className?: string;
}

const choosePortal = (portal: PORTALS, portalContext: any) => {
  switch (portal) {
    case PORTALS.ADD_TASK:
      return <AddTaskPortal portalContext={portalContext} />;

    case PORTALS.CREATE_BOARD:
      return <BoardPortal portalContext={portalContext} />;

    case PORTALS.DELETE_BOARD:
      return <DeleteBoardPortal portalContext={portalContext} />;
  }
};

const OpenPortalButton = ({
  unstyled,
  text,
  portal,
  className,
}: OpenPortalWrapperProps) => {
  const portalContext = usePortal();
  const { openPortal, Portal } = portalContext;

  return (
    <>
      {unstyled ? (
        <button className={className} onClick={openPortal}>
          {text}
        </button>
      ) : (
        <Button
          className={`ml-auto ${className}`}
          text={text}
          onClick={openPortal}
          size={Size.LARGE}
        />
      )}

      <Portal>{choosePortal(portal, portalContext)}</Portal>
    </>
  );
};

export default OpenPortalButton;
