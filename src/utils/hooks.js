import { useState, useEffect, useRef } from 'react';
import throttle from '@utils/throttle';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => callbackRef.current(state), [state]);
  return [state, setState];
};

const useWindowEvent = (event, callback) => {
  // A ref that stores handler
  const listenerRef = useRef();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler without us needing to pass it in
  // effect deps array and potentially cause effect to re-run every render.
  useEffect(() => {
    listenerRef.current = callback;
  }, [callback]);
  useEffect(() => {
    // Create event listener that calls handler function stored in ref
    const eventListener = e => listenerRef.current(e);
    const isScrollOrResize = event === 'scroll' || event === 'resize';
    const listener = isScrollOrResize ? throttle(eventListener) : eventListener;
    // Add event listener
    window.addEventListener(event, listener);
    // Remove event listener on cleanup
    return () => window.removeEventListener(event, callback);
  }, [event]);
};

export { useStateWithCallback, useWindowEvent };
