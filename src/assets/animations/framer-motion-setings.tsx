const animation = {
  variants: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  },
  initial: ["hidden", "slideStart"],
  whileInView: ["visible", "slideEnd"],
  exit: ["hidden", "slideStart"],
};

export default animation;
