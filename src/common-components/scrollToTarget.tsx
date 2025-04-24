const scrollToTarget = (path: string) => {
  const targetElement = document.querySelector(`${path}`);
  const offset = -70; // Negative to leave 70px space from top
  const bannerHeight = (document.querySelector(".nav-banner") as HTMLElement)
    ?.offsetHeight;

  const top =
    targetElement!.getBoundingClientRect().top +
    window.pageYOffset +
    offset -
    bannerHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
export default scrollToTarget;
