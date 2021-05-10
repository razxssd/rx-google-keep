import React from 'react';
import {Header} from "./components/Header";
import Masonry from "masonry-layout";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { add_alert, archive, image, more_vert, palette, persona_add_alt, pin, pin_full } from "../../core/google-icons";
import { getBoardNotes } from "../../store/selectors/board.selector";
import { IBoardNote } from "../../core/interfaces/IBoardState";

export const Body: React.FC = () => {
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

  return <div className='rx-body-container'>
    <Header/>

    <div className="rx-body-content-container">

      <div className="rx-body-content-title">Appuntate</div>
      <div className="rx-masonry-grid">
        {
          notes.map((note: IBoardNote, i: number) => {
            return <div className="rx-masonry-grid-item rx-card" key={i}>
              <div className="rx-grid-content-header">
                <div className="rx-grid-content-header-title">{note.title}</div>
                <div className="rx-grid-content-header-icon"><div className="icon-container xs-small">{pin_full}</div></div>
              </div>

              <div className="rx-grid-content-body">
                <div
                  key={i}
                  id={i.toString()}
                  className="rx-text-box"
                  contentEditable={true}
                  onCut={noop}
                  onCopy={noop}
                  onPaste={noop}
                  onKeyDown={noop}
                >
                  {note.content}
                </div>
              </div>

              <div className="rx-grid-content-footer">
                <div className="icon-container xs-small">{add_alert}</div>
                <div className="icon-container xs-small">{persona_add_alt}</div>
                <div className="icon-container xs-small">{palette}</div>
                <div className="icon-container xs-small">{image}</div>
                <div className="icon-container xs-small">{archive}</div>
                <div className="icon-container xs-small">{more_vert}</div>
              </div>
            </div>
          })
        }
        <div className="rx-masonry-grid-item rx-card">
          <div className="rx-grid-content-header">
            <div className="rx-grid-content-header-title">Title</div>
            <div className="rx-grid-content-header-icon"><div className="icon-container xs-small">{pin_full}</div></div>
          </div>

          <div className="rx-grid-content-body">
            <div
              className="rx-text-box"
              contentEditable={true}
              onCut={noop}
              onCopy={noop}
              onPaste={noop}
              onKeyDown={noop}
              >
              Ciao, prima nota da Edu!
            </div>
          </div>

          <div className="rx-grid-content-footer">
            <div className="icon-container xs-small">{add_alert}</div>
            <div className="icon-container xs-small">{persona_add_alt}</div>
            <div className="icon-container xs-small">{palette}</div>
            <div className="icon-container xs-small">{image}</div>
            <div className="icon-container xs-small">{archive}</div>
            <div className="icon-container xs-small">{more_vert}</div>
          </div>
        </div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height3"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height3"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card"></div>
        <div className="rx-masonry-grid-item rx-card rx-masonry-grid-item--height2"></div>
      </div>

    </div>

  </div>
};
