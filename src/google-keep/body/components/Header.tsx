import React from 'react';
import { brush, check_box, image } from "../../../core/google-icons";

export const Header: React.FC = () => {
  const [isContentEditableFocus, setIsContentEditableFocus] = React.useState(false);

  const setIsContentEditableFocusHandler = React.useCallback((value) => {
    setIsContentEditableFocus(value);
  }, [])

  console.log({isContentEditableFocus})

  return <div className="rx-body-header-container">
    <div className={`rx-body-header-box ${isContentEditableFocus ? 'open' : ''}`}>

      {
        isContentEditableFocus &&
        <div>
          <div className="rx-body-header-input">
            <div
              contentEditable="true"
              className="rx-text-box"
              placeholder="Scrivi una nota..."
              onFocus={() => setIsContentEditableFocusHandler(true)}
              onBlur={() => setIsContentEditableFocusHandler(false)}
            />
          </div>
          action
        </div>
      }

      <div className="rx-body-header-input">
        <div
          contentEditable="true"
          className="rx-text-box"
          placeholder="Scrivi una nota..."
          onFocus={() => setIsContentEditableFocusHandler(true)}
          onBlur={() => setIsContentEditableFocusHandler(false)}
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
        <div>
          actions
        </div>
      }
    </div>
  </div>
}
