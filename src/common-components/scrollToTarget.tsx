const scrollToTarget = (path: string) => {
  const targetElement = document.querySelector(`${path}`);
  const offset = -70; // Negative to leave 70px space from top
  const bannerHeight = (document.querySelector(".nav-banner") as HTMLElement)
    ?.offsetHeight;
  const s = !localStorage.getItem("bannerOpen") ? bannerHeight : 0;
  const top =
    targetElement!.getBoundingClientRect().top +
    window.pageYOffset +
    offset -
    s;

  console.log(
    s,
    targetElement!.getBoundingClientRect().top,
    window.pageYOffset
  );
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
export default scrollToTarget;
// 47 6638.859375 0
