import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function getWindowDimensions() {
      // browser code
      if (window !== undefined) {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height,
        };
      }
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
