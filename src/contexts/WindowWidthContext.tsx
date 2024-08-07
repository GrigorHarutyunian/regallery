import React, { createContext, useState, useEffect, ReactNode } from "react";

type WindowWidthVersion = "mobile" | "mid" | "other";

interface WindowWidthContextProps {
  version: WindowWidthVersion;
}

const WindowWidthContext = createContext<WindowWidthContextProps>({
  version: "other",
});

export const WindowWidthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [version, setVersion] = useState<WindowWidthVersion>(() => {
    const width = window.innerWidth;
    if (width < 701) return "mobile";
    if (width < 1100) return "mid";
    return "other";
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVersion((prevVersion) => {
        if (width < 700 && prevVersion !== "mobile") return "mobile";
        if (width >= 701 && width < 1100 && prevVersion !== "mid") return "mid";
        if (width >= 1100 && prevVersion !== "other") return "other";
        return prevVersion;
      });
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ version }}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export default WindowWidthContext;
