import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutStoreProps, ISideNavActiveElement } from "../../core/interfaces/ILayoutState";
import { marks } from "../../core/mock/marks";

const initialStateValue: ILayoutStoreProps = {
  sidenav: {
    marks: marks,
    activeElement: {key: 'note', value: true}
  },
  navbar: {
    title: 'Keep',
    isBodyAtTop: true
  }
}

export const layoutStore = createSlice({
  name: 'layoutStore',
  initialState: {...initialStateValue},
  reducers: {
    setSidenavActiveElement(state, action: PayloadAction<ISideNavActiveElement>): ILayoutStoreProps {
      return {...state, sidenav: {...state.sidenav, activeElement: action.payload}}
    },
    setNavbarIsBodyAtTop(state, action: PayloadAction<boolean>): ILayoutStoreProps {
      return {...state, navbar: {...state.navbar, isBodyAtTop: action.payload}}
    }
  }
});


export const {
  setSidenavActiveElement,
  setNavbarIsBodyAtTop
} = layoutStore.actions;
