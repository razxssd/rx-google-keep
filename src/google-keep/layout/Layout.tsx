import React from 'react';
import {Navbar, Sidenav} from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getLayoutNavbarIsBodyAtTop } from "../../store/selectors/layout.selector";
import { setNavbarIsBodyAtTop } from "../../store/reducers/layout.store";
import { OpenCard } from "../open-card/OpenCard";

export const Layout: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const isBodyAtTop = useSelector(getLayoutNavbarIsBodyAtTop);
  const contentRef = React.useRef(null);

  const setNavbarIsBodyAtTopHandler = React.useCallback((value) => {
    dispatch(setNavbarIsBodyAtTop(value));
  }, [dispatch]);

  const onScrollBodyHandler = (e: any) => {
    const st = e.currentTarget.scrollTop;

    if (st === 0) {
      setNavbarIsBodyAtTopHandler(true)
    } else if (isBodyAtTop) {
      setNavbarIsBodyAtTopHandler(false)
    }
  }

  return <div className="rx-google-keep-wrapper scrollbar" ref={contentRef} onScroll={onScrollBodyHandler}>
    <Navbar />
    <div className="rx-google-keep-content">
      <div className="rx-google-keep-content-left">
        <div className="rx-google-keep-content-left-placeholder"/><Sidenav /></div>
      {children}
    </div>

    <OpenCard />
  </div>
};
