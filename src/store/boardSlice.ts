import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Board } from "@/types";

export interface BoardState {
  boards: Array<Board>;
  currentBoard: Board;
}

const initialState: BoardState = {
  boards: [],
  currentBoard: {} as Board,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setCurrentBoard: (state, action: PayloadAction<Board>) => {
      state.currentBoard = action.payload;
    },

    setBoards: (state, action: PayloadAction<Array<Board>>) => {
      state.boards = action.payload;
    },
  },
});

export const { setCurrentBoard, setBoards } = boardSlice.actions;
export default boardSlice.reducer;
