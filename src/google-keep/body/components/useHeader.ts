import React from "react";
import { useDispatch } from "react-redux";
import { IBoardNote } from "../../../core/interfaces/IBoardState";
import { addNote } from "../../../store/reducers/board.store";
import { useOnClickOutside } from "../../../core/hooks/useOnClickOutside";

const MAX_LENGTH_CHAR_CONTENT = 999;

export const useHeader = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);
  const dispatch = useDispatch();
  const bodyHeaderInputRef = React.useRef<HTMLDivElement>(null);
  const bodyHeaderInputTitleRef = React.useRef<HTMLDivElement>(null);

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    if (bodyHeaderInputRef?.current?.innerText.trim() && !value) {
      const noteToAdd: IBoardNote = {
        id: new Date().toISOString(),
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

  const onCloseHandler = React.useCallback(() => {
    setIsContentEditableFocusHandler(false);
  }, [setIsContentEditableFocusHandler])

  return {
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
  }
}
