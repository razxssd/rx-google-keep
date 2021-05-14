import React  from 'react';
import {
  add_alert,
  archive,
  brush,
  check_box,
  image,
  more_vert,
  palette,
  persona_add_alt,
  pin, redo
} from "../../../core/google-icons";
import { useOnClickOutside } from "../../../core/hooks/useOnClickOutside";
import {addNote} from "../../../store/reducers/board.store";
import { IBoardNote } from "../../../core/interfaces/IBoardState";
import { useDispatch } from "react-redux";
import { useHeader } from "./useHeader";


export const Header: React.FC = () => {

  const {
    isContentEditableFocus,
    headerBoxRef,
    isBodyAtTop,
    setIsContentEditableFocusHandler,
    bodyHeaderInputTitleRef,
    onKeyDownBodyHeaderInputTitleHandler,
    onScrollBodyHandler,
    bodyHeaderInputContainerRef,
    onFocusBodyHeaderInputHandler,
    bodyHeaderInputRef,
    onKeyDownHandler,
    isBodyAtBottom,
    onCloseHandler
  } = useHeader();

  return <div className="rx-body-header-container">
    <div className={`rx-body-header-box ${isContentEditableFocus ? 'open' : ''} mini-scrollbar`} ref={headerBoxRef}>

      {
        isContentEditableFocus &&
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
                // onBlur={() => setIsContentEditableFocusHandler(false)}
                ref={bodyHeaderInputTitleRef}
                onKeyDown={onKeyDownBodyHeaderInputTitleHandler}
              />
            </div>
          </div>
        </div>
      }

      <div className={`rx-body-header-input ${!isContentEditableFocus ? 'full-width' : ''}`}
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

      {
        !isContentEditableFocus &&
        <div className="rx-body-header-actions">
          <div className="icon-container">{check_box}</div>
          <div className="icon-container">{brush}</div>
          <div className="icon-container">{image}</div>
        </div>
      }

      {
        isContentEditableFocus &&
        <div className={`rx-body-header-footer ${!isBodyAtBottom ? 'shadow' : ''}`}>
          <div className="rx-body-header-footer-actions">
            <div className="icon-container small">{add_alert}</div>
            <div className="icon-container small">{persona_add_alt}</div>
            <div className="icon-container small">{palette}</div>
            <div className="icon-container small">{image}</div>
            <div className="icon-container small">{archive}</div>
            <div className="icon-container small">{more_vert}</div>
            <div className="icon-container small">{redo}</div>
            <div className="icon-container small scale-to-right">{redo}</div>
          </div>
          <div className="rx-body-header-footer-button" onClick={onCloseHandler}><div className="rx-button-transparent">Close</div></div>
        </div>
      }
    </div>
  </div>
}
