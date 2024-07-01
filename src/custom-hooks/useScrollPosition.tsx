import { useState, useEffect } from "react";

const useScrollPosition = (): boolean => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY);
  const [thresholdPassed, setThresholdPassed] = useState<boolean>(false);
  console.log(isSticky);
  // Threshold to activate sticky navbar (adjust as needed)
  const stickyThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we have scrolled down enough to enable sticky functionality
      if (currentScrollY > stickyThreshold) {
        setThresholdPassed(true);
      } else {
        setThresholdPassed(false);
        setIsSticky(false); // Remove sticky when scrolling back to the top
      }

      // Determine scroll direction
      if (currentScrollY < prevScrollY && thresholdPassed) {
        // Scrolling up
        setIsSticky(true);
      } else if (currentScrollY > prevScrollY) {
        // Scrolling down
        setIsSticky(false);
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, thresholdPassed]);

  return isSticky;
};

export default useScrollPosition;
