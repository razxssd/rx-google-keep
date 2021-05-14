import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardNote, IBoardStoreProps } from "../../core/interfaces/IBoardState";

const initialStateValue: IBoardStoreProps = {
  notes: [
    {
      id: '1',
      title: 'Welcome to RX Google Keep Clone',
      content: 'Feel free to contribute by adding features or fixing bugs :)'
    },
    {
      id: '2',
      content: 'You can use only content without title'
    },
    {
      id: '3',
      title: 'Or only title without content',
      content: ''
    },
    {
      id: '4',
      title: 'Grid layout',
      content: 'The grid was made with the masonry grid layout. \n\nGive it a shot here: https://masonry.desandro.com/'
    },
    {
      id: '5',
      title: 'Other repos',
      content: 'If you like this project, take a look at my Github: \n\n@razxssd'
    }
  ]
}

export const boardStore = createSlice({
  name: 'boardStore',
  initialState: {...initialStateValue},
  reducers: {
    addNote(state, action: PayloadAction<IBoardNote>): IBoardStoreProps {
      return {...state, notes: [{...action.payload}, ...state.notes]};
    },
    updateNote(state, action: PayloadAction<IBoardNote>): IBoardStoreProps {
      const notesUpd = state.notes.map((note: IBoardNote) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      })
      return {...state, notes: [...notesUpd]};
    },
    deleteNote(state, action: PayloadAction<string>): IBoardStoreProps {
      const notesUpd = state.notes.filter((note: IBoardNote) => note.id !== action.payload);
      return {...state, notes: [...notesUpd]};
    }
  }
});


export const {
  addNote,
  updateNote,
  deleteNote
} = boardStore.actions;
