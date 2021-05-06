import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutStoreProps, INavbarProps, ISideNavActiveElement } from "../../core/interfaces/ILayoutState";
import { marks } from "../../core/mock/marks";
import { config } from "../../core/config";

const initialStateValue: ILayoutStoreProps = {
  sidenav: {
    marks: marks,
    activeElement: {label: 'Keep', key: 'note', value: true}
  },
  navbar: {
    title: 'Keep',
    isBodyAtTop: true,
    icon: config.Default_Keep_Img_URL
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
    },
    setNavbarTitle(state, action: PayloadAction<Pick<INavbarProps, 'icon' | 'title'>>): ILayoutStoreProps {
      return {...state, navbar: {...state.navbar, icon: action.payload.icon, title: action.payload.title}}
    }
  }
});


export const {
  setSidenavActiveElement,
  setNavbarIsBodyAtTop,
  setNavbarTitle
} = layoutStore.actions;
