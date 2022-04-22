import { ItemType } from "./../../types/item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  list: ItemType[];
  currentText: string;
  focusNumber: number;
  completedNumber: number;
  wrongNumber: number;
  input: string;
  isGame: boolean;
  isFinish: boolean;
  time: number;
}

const initialState: GameState = {
  list: [],
  currentText: "",
  focusNumber: 0,
  completedNumber: 0,
  wrongNumber: 0,
  input: "",
  isGame: false,
  isFinish: false,
  time: 60,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ItemType[]>) => {
      state.list = action.payload;
    },
    gameControl: (state) => {
      const currentText: any = state.list[state.focusNumber];
      if (currentText.text === state.input) {
        currentText.completed = true;
        currentText.status = "ok";
        state.completedNumber += 1;
        state.focusNumber += 1;
        state.input = "";
      } else {
        currentText.completed = true;
        currentText.status = "error";
        state.wrongNumber += 1;
        state.focusNumber += 1;
        state.input = "";
      }
    },
    changeInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    gameReset: (state) => {
      state.list = [];
      state.completedNumber = 0;
    },
    gameStart: (state) => {
      state.isGame = true;
    },
    gameFinish: (state) => {
      state.isGame = false;
      state.isFinish = true;
    },
    changeTime: (state) => {
      state.time -= 1;
    }
  },
});

export const { setList, gameControl, gameReset, changeInput, gameStart, changeTime, gameFinish } =
  gameSlice.actions;
export default gameSlice.reducer;
