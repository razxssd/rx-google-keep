import React from 'react';
import { archive, delete_svg, edit, lightbulb, mark, notifications } from "../../core/google-icons";
import { marks } from "../../core/mock/marks";
import { IMark } from "../../core/interfaces/IMarks";
import { useDispatch, useSelector } from "react-redux";
import { setSidenavActiveElement, setNavbarTitle } from '../../store/reducers/layout.store';
import { getLayoutSidenavActiveElement } from "../../store/selectors/layout.selector";
import { ISideNavActiveElement } from "../../core/interfaces/ILayoutState";
import { config } from "../../core/config";

export const Sidenav: React.FC = () => {
  const dispatch = useDispatch();
  const activeElement = useSelector(getLayoutSidenavActiveElement)

  const isActiveByKeyHandler = React.useCallback((key: string): boolean => {
    return activeElement.key === key && activeElement.value;
  }, [activeElement])

  const setIsActiveHandler = React.useCallback((elem: ISideNavActiveElement) => {
    dispatch(setSidenavActiveElement(elem))
    dispatch(setNavbarTitle({title: elem.label, icon: elem.key === 'note' ? config.Default_Keep_Img_URL : undefined}))
  }, [dispatch])

  return <div className='rx-sidenav-container'>
    <div className="rx-sidenav-content">
      <div
        className={`rx-sidenav-elem-container ${isActiveByKeyHandler('note') ? 'active' : ''}`}
        onClick={() => setIsActiveHandler({label: 'Keep', key: 'note', value: true})}
      >
        {lightbulb}
        <span className="rx-sidenav-elem-container-text">Note</span>
      </div>

      <div
        className={`rx-sidenav-elem-container ${isActiveByKeyHandler('notifications') ? 'active' : ''}`}
        onClick={() => setIsActiveHandler({label: 'Reminder', key: 'notifications', value: true})}>
        {notifications}
        <span className="rx-sidenav-elem-container-text">Reminder</span>
      </div>

      {
        marks.map((markElem: IMark) => {
          return <div
            className={`rx-sidenav-elem-container ${isActiveByKeyHandler(markElem.key) ? 'active' : ''}`}
            onClick={() => setIsActiveHandler({label: markElem.label, key: markElem.key, value: true})}
            key={markElem.key}
          >
            {mark}
            <span className="rx-sidenav-elem-container-text">{markElem.label}</span>
          </div>
        })
      }

      <div
        className={`rx-sidenav-elem-container ${isActiveByKeyHandler('edit_marks') ? 'active' : ''}`}
        onClick={() => setIsActiveHandler({label: 'Edit labels', key: 'edit_marks', value: true})}>
        {edit}
        <span className="rx-sidenav-elem-container-text">Edit labels</span>
      </div>

      <div
        className={`rx-sidenav-elem-container ${isActiveByKeyHandler('archive') ? 'active' : ''}`}
        onClick={() => setIsActiveHandler({label: 'Archive', key: 'archive', value: true})}>
        {archive}
        <span className="rx-sidenav-elem-container-text">Archive</span>
      </div>

      <div
        className={`rx-sidenav-elem-container ${isActiveByKeyHandler('trash') ? 'active' : ''}`}
        onClick={() => setIsActiveHandler({label: 'Trash', key: 'trash', value: true})}>
        {delete_svg}
        <span className="rx-sidenav-elem-container-text">Trash</span>
      </div>
    </div>

    <div className="rx-sidenav-footer">
      <a href="https://github.com/razxssd/rx-google-keep/blob/main/LICENSE" target="_blank" tabIndex={0}>Open-source license</a>
    </div>
  </div>
};
