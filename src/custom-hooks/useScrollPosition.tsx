import { useState, useEffect } from "react";
const useScrollPosition = (): boolean => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const stickyTrigger = window.innerHeight / 2.75;
  useEffect(() => {
    const updatePosition = () => {
      if (window.scrollY > stickyTrigger && !isSticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return isSticky;
};

export default useScrollPosition;
