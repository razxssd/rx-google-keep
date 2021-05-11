import { useDispatch, useSelector } from "react-redux";
import { getBoardNotes } from "../../store/selectors/board.selector";
import React from "react";
import Masonry from "masonry-layout";
import { IBoardNote } from "../../core/interfaces/IBoardState";
import { openCard } from "../../store/reducers/layout.store";

export const useBody = () => {
  const dispatch = useDispatch();
  const notes = useSelector(getBoardNotes);

  React.useEffect(() => {
    var elem_2 = document.querySelector('.rx-masonry-grid');
    console.log("elem_2: ", elem_2)
    if (elem_2)
      new Masonry(elem_2, {
        // options
        itemSelector: '.rx-masonry-grid-item',
        columnWidth: 210
      });
  }, [notes])

  const noop = (e: any) => {
    e.preventDefault();
    return false;
  };

  const onCardOpenHandler = React.useCallback((note: IBoardNote) => {
    dispatch(openCard(note))
  }, [dispatch]);

  return {
    notes,
    noop,
    onCardOpenHandler
  }
}
