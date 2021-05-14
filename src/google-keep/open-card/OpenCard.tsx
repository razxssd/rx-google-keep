import React from 'react';
import {
  add_alert,
  archive,
  image,
  more_vert,
  palette,
  persona_add_alt,
  pin,
  redo
} from "../../core/google-icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsCardOpen } from "../../store/reducers/layout.store";
import { useOnClickOutside } from "../../core/hooks/useOnClickOutside";
import { getLayoutCardOpen } from "../../store/selectors/layout.selector";
import { useOpenCard } from "./useOpenCard";



export const OpenCard: React.FC = () => {

  const {
    cardOpenState,
    isBodyAtTop,
    headerBoxRef,
    setIsContentEditableFocusHandler,
    bodyHeaderInputContainerRef,
    onScrollBodyHandler,
    bodyHeaderInputTitleRef,
    onKeyDownBodyHeaderInputTitleHandler,
    onFocusBodyHeaderInputHandler,
    onKeyDownHandler,
    bodyHeaderInputRef,
    onCloseHandler,
    isBodyAtBottom
  } = useOpenCard();

  return <React.Fragment>
    <div className={`rx-open-card-wrapper ${cardOpenState.isCardOpen ? 'open' : ''}`}/>

    <div className={`rx-open-card-container rx-body-header-container ${cardOpenState.isCardOpen ? 'open' : ''}`}>
      {cardOpenState.isCardOpen && <div className='rx-body-header-box open mini-scrollbar' ref={headerBoxRef}>


        <div className={`rx-body-header-box-top-container ${!isBodyAtTop ? 'shadow' : ''}`}>
          <div className="rx-body-header-action-pinned">
            <div className="icon-container small">{pin}</div>
          </div>
          <div className="rx-body-header-icon-separator"/>
          <div className="rx-body-header-input-container">
            <div className="rx-body-header-input title">
              <div
                contentEditable="true"
                className="rx-text-box"
                placeholder="Title"
                onFocus={() => setIsContentEditableFocusHandler(true)}
                ref={bodyHeaderInputTitleRef}
                onKeyDown={onKeyDownBodyHeaderInputTitleHandler}
               />
            </div>
          </div>
        </div>

        <div className={`rx-body-header-input`}
             onScroll={onScrollBodyHandler}
             ref={bodyHeaderInputContainerRef}
        >
          <div
            id="editable"
            contentEditable="true"
            className="rx-text-box"
            placeholder="Write a note..."
            onFocus={onFocusBodyHeaderInputHandler}
            ref={bodyHeaderInputRef}
            onKeyDown={onKeyDownHandler}
           />
        </div>


        <div className={`rx-body-header-footer ${!isBodyAtBottom ? 'shadow' : ''}`}>
          <div className="rx-body-header-footer-actions">
            <div className="icon-container xs-small">{add_alert}</div>
            <div className="icon-container xs-small">{persona_add_alt}</div>
            <div className="icon-container xs-small">{palette}</div>
            <div className="icon-container xs-small">{image}</div>
            <div className="icon-container xs-small">{archive}</div>
            <div className="icon-container xs-small">{more_vert}</div>
            <div className="icon-container xs-small">{redo}</div>
            <div className="icon-container xs-small scale-to-right">{redo}</div>
          </div>
          <div className="rx-body-header-footer-button" onClick={onCloseHandler}>
            <div className="rx-button-transparent">Close</div>
          </div>
        </div>
      </div>}
    </div>
  </React.Fragment>
}
