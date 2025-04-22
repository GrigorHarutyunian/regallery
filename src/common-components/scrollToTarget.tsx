const scrollToTarget = (path: string) => {
  const targetElement = document.querySelector(`${path}`);
  const offset = -70; // Negative to leave 70px space from top

  const top =
    targetElement!.getBoundingClientRect().top + window.pageYOffset + offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
export default scrollToTarget;
