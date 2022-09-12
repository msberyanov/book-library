import { useCallback, useLayoutEffect, useState } from "react";
import { tuple } from "../../utils/tuple";

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  const updateSize = useCallback(() =>
    setSize([window.innerWidth, window.innerHeight]), []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [updateSize]);

  return size;
}
