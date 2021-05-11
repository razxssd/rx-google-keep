import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardNote, IBoardStoreProps } from "../../core/interfaces/IBoardState";

const initialStateValue: IBoardStoreProps = {
  notes: [
    {
      title: 'Welcome to RX Google Keep Clone',
      content: 'Feel free to contribute by adding features or fixing bugs :)'
    },
    {
      content: 'You can use only content without title'
    },
    {
      title: 'Or only title without content',
      content: ''
    },
    {
      title: 'Grid layout',
      content: 'The grid was made with the masonry grid layout. \n\nGive it a shot here: https://masonry.desandro.com/'
    }
  ]
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
