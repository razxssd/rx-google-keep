import { RootState } from "../Store";

export const getLayoutSidenavActiveElement = (state: RootState) => state.layoutStore.sidenav.activeElement;
export const getLayoutNavbarIsBodyAtTop = (state: RootState) => state.layoutStore.navbar.isBodyAtTop;
export const getLayoutNavbar= (state: RootState) => state.layoutStore.navbar;
export const getLayoutCardOpen = (state: RootState) => state.layoutStore.openCard;
