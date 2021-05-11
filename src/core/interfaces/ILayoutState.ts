import { IMark } from "./IMarks";
import { IBoardNote } from "./IBoardState";

export interface ILayoutStoreProps {
  sidenav: ISideNavProps;
  navbar: INavbarProps;
  openCard: IOpenCardProps;
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

export interface IOpenCardProps {
  isCardOpen: boolean;
  note: IBoardNote;
}
