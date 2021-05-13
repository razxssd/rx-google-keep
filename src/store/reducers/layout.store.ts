import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayoutStoreProps, INavbarProps, ISideNavActiveElement } from "../../core/interfaces/ILayoutState";
import { marks } from "../../core/mock/marks";
import { config } from "../../core/config";
import { IBoardNote } from "../../core/interfaces/IBoardState";

const initialStateValue: ILayoutStoreProps = {
  sidenav: {
    marks: marks,
    activeElement: {label: 'Keep', key: 'note', value: true}
  },
  navbar: {
    title: 'Keep',
    isBodyAtTop: true,
    icon: config.Default_Keep_Img_URL
  },
  openCard: {
    isCardOpen: false,
    note: {
      id: '',
      content: ''
    }
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
    },
    openCard(state, action: PayloadAction<IBoardNote>): ILayoutStoreProps {
      return {...state, openCard: {...state.openCard, isCardOpen: true, note: action.payload}}
    },
    setIsCardOpen(state, action: PayloadAction<boolean>): ILayoutStoreProps {
      return {...state, openCard: {...state.openCard, isCardOpen: action.payload}}
    },
    updateOpenCardNote(state, action: PayloadAction<IBoardNote>): ILayoutStoreProps {
     return {...state, openCard: {...state.openCard, note: {...action.payload}}};
    }
  }
});


export const {
  setSidenavActiveElement,
  setNavbarIsBodyAtTop,
  setNavbarTitle,
  openCard,
  setIsCardOpen,
  updateOpenCardNote
} = layoutStore.actions;
