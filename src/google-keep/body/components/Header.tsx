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

const MAX_LENGTH_CHAR_CONTENT = 999;

export const Header: React.FC = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);
  const dispatch = useDispatch();
  const bodyHeaderInputRef = React.useRef<HTMLDivElement>(null);
  const bodyHeaderInputTitleRef = React.useRef<HTMLDivElement>(null);

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    if (bodyHeaderInputRef?.current?.innerText.trim() && !value) {
      const noteToAdd: IBoardNote = {
        title: bodyHeaderInputTitleRef?.current?.innerText.trim(),
        content: bodyHeaderInputRef?.current?.innerText.trim()
      }
      dispatch(addNote(noteToAdd))
      bodyHeaderInputRef.current.innerText = "";
      if (bodyHeaderInputTitleRef.current)
      bodyHeaderInputTitleRef.current.innerText = "";
    }

    setIsContentEditableFocus(value);
  }, [dispatch]);

  const headerBoxRef = React.useRef<any | null>(null);
  useOnClickOutside(headerBoxRef, () => setIsContentEditableFocusHandler(false));

  const [isBodyAtTop, setIsBodyAtTop] = React.useState(true);
  const [isBodyAtBottom, setIsBodyAtBottom] = React.useState(true);

  const setIsBodyAtTopHandler = React.useCallback((value) => {
    setIsBodyAtTop(value)
  }, []);
  const setIsBodyAtBottomHandler = React.useCallback((value) => {
    setIsBodyAtBottom(value)
  }, []);

  const onScrollBodyHandler = (e: any) => {
    const st = e.currentTarget.scrollTop;
    const sh = e.currentTarget.scrollHeight;
    const ht = e.currentTarget.offsetHeight;
    if (st === 0) {
      setIsBodyAtTopHandler(true)
    } else if ((ht === 0) || (Math.ceil(st) === (sh - ht)) || (Math.round(st) === (sh - ht)) || (Math.floor(st) === (sh - ht))) {
      setIsBodyAtBottomHandler(true)
    } else {
      if (isBodyAtTop)
        setIsBodyAtTopHandler(false)
      if (isBodyAtBottom)
        setIsBodyAtBottomHandler(false)
    }
  }

  const bodyHeaderInputContainerRef = React.useRef<HTMLDivElement>(null);
  const onKeyDownHandler = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const target = (event.target) as HTMLElement;

    if (event.code === "Backspace" && bodyHeaderInputContainerRef?.current?.scrollTop === 0) {
      setIsBodyAtBottom(true)
    }

    if (event.code === "Backspace" && target.innerText.trim() === "" && bodyHeaderInputContainerRef.current) {

    }
  }, []);

  const onKeyDownBodyHeaderInputTitleHandler = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const target = (event.target) as HTMLElement;

    if (MAX_LENGTH_CHAR_CONTENT && (target.innerText.trim().length > MAX_LENGTH_CHAR_CONTENT) && event.code !== "Backspace")
      event.preventDefault();

    if ((event.keyCode === 13 && !event.shiftKey) || (event.code === "Enter" && !event.shiftKey)) {
     bodyHeaderInputRef?.current?.focus({preventScroll: true})
    }

    if (event.code === "Backspace") {
      console.log("target.innerText.trim(): ", target.innerText.trim())
    }
  }, []);

  const onFocusBodyHeaderInputHandler = (e: any) => {
    setIsContentEditableFocusHandler(true)
  }

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
                placeholder="Titolo"
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
          placeholder="Scrivi una nota..."
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
          <div className="rx-body-header-footer-button"><div className="rx-button-transparent">Chiudi</div></div>
        </div>
      }
    </div>
  </div>
}
