import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLayoutCardOpen } from "../../store/selectors/layout.selector";
import { setIsCardOpen, updateOpenCardNote } from "../../store/reducers/layout.store";
import { useOnClickOutside } from "../../core/hooks/useOnClickOutside";
import { IBoardNote } from "../../core/interfaces/IBoardState";
import { updateNote } from "../../store/reducers/board.store";

const MAX_LENGTH_CHAR_CONTENT = '';

export const useOpenCard = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);
  const dispatch = useDispatch();
  const bodyHeaderInputRef = React.useRef<HTMLDivElement>(null);
  const bodyHeaderInputTitleRef = React.useRef<HTMLDivElement>(null);
  const cardOpenState = useSelector(getLayoutCardOpen)

  React.useEffect(() => {
    if (bodyHeaderInputTitleRef.current && cardOpenState.note && cardOpenState.note.title !== undefined)
      bodyHeaderInputTitleRef.current.innerText = cardOpenState.note.title;

    if (bodyHeaderInputRef.current)
      bodyHeaderInputRef.current.innerText = cardOpenState.note.content;
  }, [cardOpenState.note])

  const onCloseHandler = () => {
    const title_text = bodyHeaderInputTitleRef.current ? bodyHeaderInputTitleRef.current.innerText.trim() : undefined;
    const content_text = bodyHeaderInputRef.current ? bodyHeaderInputRef.current.innerText.trim() : '';

    const noteUpdated: IBoardNote = {title: title_text, content: content_text, id: cardOpenState.note.id}
    dispatch(updateNote(noteUpdated))
    dispatch(setIsCardOpen(false))
  }

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    setIsContentEditableFocus(value);
    if (!value)
      onCloseHandler();

    if (bodyHeaderInputRef?.current?.innerText.trim() && !value) {
      bodyHeaderInputRef.current.innerText = "";
      if (bodyHeaderInputTitleRef.current)
        bodyHeaderInputTitleRef.current.innerText = "";
    }
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
  }, [dispatch]);

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
  }, [dispatch]);

  const onFocusBodyHeaderInputHandler = (e: any) => {
    setIsContentEditableFocusHandler(true)
  }

  return {
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
  }
}
