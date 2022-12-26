import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

function useWidth() {
  const [width, setWidth] = useState<number>(800);
  useEffect(() => {
    const debouncedWidth = debounce(() => setWidth(window.innerWidth), 300);

    window.addEventListener("resize", debouncedWidth);
    return () => {
      window.removeEventListener("resize", debouncedWidth);
    };
  }, []);
  return width;
}

export default useWidth;
