import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardNote, IBoardStoreProps } from "../../core/interfaces/IBoardState";

const initialStateValue: IBoardStoreProps = {
  notes: []
}

export const boardStore = createSlice({
  name: 'boardStore',
  initialState: {...initialStateValue},
  reducers: {
    addNote (state, action: PayloadAction<IBoardNote>) {
      return {...state, notes: [{...action.payload}, ...state.notes]};
    }
  }
});


export const {
  addNote
} = boardStore.actions;
