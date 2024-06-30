const imageVariants = {
  hidden: { x: "10px", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

export default imageVariants;
