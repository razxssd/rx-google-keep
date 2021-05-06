import { IMark } from "./IMarks";

export interface ILayoutStoreProps {
  sidenav: ISideNavProps;
  navbar: INavbarProps;
}

export interface ISideNavProps {
  marks: IMark[];
  activeElement: ISideNavActiveElement;
}

export interface ISideNavActiveElement {
  key: string;
  value: boolean;
  label: string;
}

export interface INavbarProps {
  icon?: string;
  title: string;
  isBodyAtTop: boolean;
}
