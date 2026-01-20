const scrollToTarget = (path: string) => {
  const targetElement = document.querySelector(`${path}`) as HTMLElement;

  if (!targetElement) return;

  const offset = -70; // Negative to leave 70px space from top
  const bannerHeight = (document.querySelector(".nav-banner") as HTMLElement)
    ?.offsetHeight;

  // Temporarily show the element if it's hidden to get correct position
  const originalDisplay = window.getComputedStyle(targetElement).display;
  if (originalDisplay === "none") {
    targetElement.style.display = "block";
  }

  const top =
    targetElement.getBoundingClientRect().top +
    window.pageYOffset +
    offset -
    bannerHeight;

  // Restore original display state
  if (originalDisplay === "none") {
    targetElement.style.display = "none";
  }

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
export default scrollToTarget;
