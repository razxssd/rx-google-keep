import React from 'react';
import { brush, check_box, image, pin } from "../../../core/google-icons";
import { useOnClickOutside } from "../../../core/hooks/useOnClickOutside";

export const Header: React.FC = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    setIsContentEditableFocus(value);
  }, []);

  const headerBoxRef = React.useRef<any | null>(null);
  useOnClickOutside(headerBoxRef, () => setIsContentEditableFocusHandler(false));

  return <div className="rx-body-header-container">
    <div className={`rx-body-header-box ${isContentEditableFocus ? 'open' : ''}`} ref={headerBoxRef}>

      {
        isContentEditableFocus &&
        <div className="rx-body-header-box-top-container">
          <div className="rx-body-header-action-pinned"><div className="icon-container small">{pin}</div></div>
          <div className="rx-body-header-icon-separator"/>

          <div className="rx-body-header-input-container">
            <div className="rx-body-header-input title">
              <div
                contentEditable="true"
                className="rx-text-box"
                placeholder="Titolo"
                onFocus={() => setIsContentEditableFocusHandler(true)}
                // onBlur={() => setIsContentEditableFocusHandler(false)}
              />
            </div>
          </div>



        </div>
      }

      <div className="rx-body-header-input">
        <div
          contentEditable="true"
          className="rx-text-box"
          placeholder="Scrivi una nota..."
          onFocus={() => setIsContentEditableFocusHandler(true)}
          //onBlur={() => setIsContentEditableFocusHandler(false)}
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
        <React.Fragment>
          <div>
            actions
          </div>
          <div>Chiudi</div>
        </React.Fragment>
      }
    </div>
  </div>
}
