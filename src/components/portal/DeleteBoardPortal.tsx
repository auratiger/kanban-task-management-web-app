"use client";

import Button, { Style } from "../Button/Button";

import { useAppSelector } from "@/app/redirect";

const DeleteBoardPortal = ({ portalContext: { closePortal } }) => {
  const { name } = useAppSelector((state) => state.board.currentBoard);

  return (
    <div className="flex w-[400px] flex-col gap-8">
      <span className="text-head-lg text-red">Delete this board?</span>

      <p className="text-body-lg font-medium text-grey-medium">{`Are you sure you want to delete the '${name}' board? This action will remove all columns and tasks and cannot be reversed.`}</p>

      <div className="flex gap-6">
        <Button text="Delete" btnStyle={Style.DESCTRUCTIVE} expand />
        <Button
          text="Cancel"
          btnStyle={Style.SECONDARY}
          expand
          onClick={closePortal}
        />
      </div>
    </div>
  );
};

export default DeleteBoardPortal;
