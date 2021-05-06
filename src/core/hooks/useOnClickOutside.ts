import {useEffect} from "react";

/**
 * Will run any time an element outside the ref is clicked
 * @param ref Ref of the container
 * @param handler When an outside click will be intercepted, a callback will fire
 * @param argumentToCheck If you need to fire the callback based on some parameter, insert the condition here
 * @param additionalRef You can decide to not fire the callback if click on another ref outside the initial one
 * @param classListThatCanBePressedOutsideRef A list that contains the class list that can be pressed outside ref
 */
export const useOnClickOutside = (ref: any, handler: (event: any) => void, argumentToCheck: any = true, additionalRef: any = undefined, classListThatCanBePressedOutsideRef: Array<string> = []) => {
  useEffect(() => {
      const listener = (event: any) => {

        if (argumentToCheck) {

          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || (ref.current && ref.current.contains && ref.current.contains(event.target)))
            return;

          // Do nothing if clicking ref's element or descendent elements
          if (additionalRef !== undefined && (additionalRef.current && additionalRef.current.contains && additionalRef.current.contains(event.target)))
            return;

          // Check if the target classList is containing in the list received with classes, if yes, return without do nothing
          let shouldCloseByClass = false;
          if (classListThatCanBePressedOutsideRef.length > 0) {
            classListThatCanBePressedOutsideRef.forEach(el => {
              if(event.target.classList.contains(el)) {
                shouldCloseByClass = true;
                return;
              }
            });
          }
          if(shouldCloseByClass)
            return;

          handler(event);

        }

      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler, additionalRef]
  );
};
