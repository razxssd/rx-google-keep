import React from 'react';
import { Header } from "./components/Header";
import { add_alert, archive, image, more_vert, palette, persona_add_alt, pin_full } from "../../core/google-icons";
import { IBoardNote } from "../../core/interfaces/IBoardState";
import { useBody } from "./useBody";
import { useOnClickOutside } from "../../core/hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/reducers/board.store";
import { ComingSoon } from "../../core/components";

export const Body: React.FC = () => {
  const {
    notes,
    noop,
    onCardOpenHandler,
    layoutActiveElement
  } = useBody();

  return <div className='rx-body-container'>
    {
      layoutActiveElement.key === 'note' ?
        <React.Fragment>
          <Header/>
          <div className="rx-body-content-container">

            <div className="rx-body-content-title">Pinned</div>
            <div className="rx-masonry-grid">
              {
                notes.map((note: IBoardNote, i: number) => {
                  return <div className="rx-masonry-grid-item rx-card" key={i}>
                    <div className="rx-grid-content-header" onClick={() => onCardOpenHandler(note)}>
                      <div className="rx-grid-content-header-title">{note.title}</div>
                      <div className="rx-grid-content-header-icon">
                        <div className="icon-container xs-small">{pin_full}</div>
                      </div>
                    </div>

                    <div className="rx-grid-content-body" onClick={() => onCardOpenHandler(note)}>
                      <div
                        key={i}
                        id={i.toString()}
                        className="rx-text-box rx-overflow"
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
                      <MoreActions noteId={note.id}/>
                    </div>
                  </div>
                })
              }

              {/*
         <div className="rx-masonry-grid-item rx-card">
          <div className="rx-grid-content-header">
            <div className="rx-grid-content-header-title">Title</div>
            <div className="rx-grid-content-header-icon">
              <div className="icon-container xs-small">{pin_full}</div>
            </div>
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
        */}

            </div>

          </div>
        </React.Fragment> :
        <ComingSoon />
    }


  </div>
};

interface IMoreActionsProps {
  noteId: string;
}

export const MoreActions: React.FC<IMoreActionsProps> = ({noteId}) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = React.useState(false);
  const dispatch = useDispatch();
  const boxRef = React.useRef<any | null>(null);
  useOnClickOutside(boxRef, () => setIsVisibleDropdown(false));

  const deleteNoteHandler = () => {
    dispatch(deleteNote(noteId))
  }

  return <div className="icon-container xs-small" onClick={(e) => {
    setIsVisibleDropdown(true)
  }}>{more_vert}
    {
      isVisibleDropdown &&
      <div ref={boxRef} className="dropdown-box">
        <div className="dropdown-box-item" onClick={deleteNoteHandler}>
          Elimina nota
        </div>
        <div className="dropdown-box-item">
          Aggiungi etichetta
        </div>
        <div className="dropdown-box-item">
          Aggiungi disegno
        </div>
        <div className="dropdown-box-item">
          Crea una copia
        </div>
        <div className="dropdown-box-item">
          Mostra caselle di controllo
        </div>
        <div className="dropdown-box-item">
          Copia in documenti Google
        </div>
      </div>
    }
  </div>
}
