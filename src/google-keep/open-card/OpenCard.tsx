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

const MAX_LENGTH_CHAR_CONTENT = '';

export const OpenCard: React.FC = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);
  const dispatch = useDispatch();
  const bodyHeaderInputRef = React.useRef<HTMLDivElement>(null);
  const bodyHeaderInputTitleRef = React.useRef<HTMLDivElement>(null);
  const cardOpenState = useSelector(getLayoutCardOpen)

  const onCloseHandler = React.useCallback(() => {
    dispatch(setIsCardOpen(false))
  }, [dispatch])

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    if (bodyHeaderInputRef?.current?.innerText.trim() && !value) {
      bodyHeaderInputRef.current.innerText = "";
      if (bodyHeaderInputTitleRef.current)
        bodyHeaderInputTitleRef.current.innerText = "";
    }

    setIsContentEditableFocus(value);
    if (!value)
      onCloseHandler();
  }, [onCloseHandler]);

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
                placeholder="Titolo"
                onFocus={() => setIsContentEditableFocusHandler(true)}
                // onBlur={() => setIsContentEditableFocusHandler(false)}
                ref={bodyHeaderInputTitleRef}
                onKeyDown={onKeyDownBodyHeaderInputTitleHandler}
              >{cardOpenState.note.title}</div>
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
            placeholder="Scrivi una nota..."
            onFocus={onFocusBodyHeaderInputHandler}
            ref={bodyHeaderInputRef}
            onKeyDown={onKeyDownHandler}

          >
            {cardOpenState.note.content}
          </div>
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
            <div className="rx-button-transparent">Chiudi</div>
          </div>
        </div>
      </div>}
    </div>
  </React.Fragment>
}
