import {useEffect, useRef} from 'react';

export const useDebounce = (cb, wait = 500, deps = []) => {
    const timerRef = useRef(null)
  
    useEffect(() => {
      clearTimeout(timerRef.current)
  
      timerRef.current = setTimeout(() => {
        cb.apply(this)
      }, wait)
  
      return () => clearTimeout(timerRef.current)
      /** used JSON.stringify(deps) instead of just deps
        * because passing an array as a dependency causes useEffect re-render infinitely
        * @see {@link https://github.com/facebook/react/issues/14324}
        */
      /* eslint-disable react-hooks/exhaustive-deps */
    }, [JSON.stringify(deps)])
}