export const hoverDemo = {
  title: "Hover effects",
  textHtml: `Choose a hover style and see instantly how each image can
    <b>reveal captions, create focus, and add motion.</b>
    Match the interaction to your brand in just a few clicks — no custom code.`,
  img: "./assets/hover/hover-1280x735.webp",
  imgSrcSet: `
    ./assets/hover/hover-480x276.webp 480w,
    ./assets/hover/hover-640x368.webp 640w,
    ./assets/hover/hover-768x441.webp 768w,
    ./assets/hover/hover-1024x588.webp 1024w,
    ./assets/hover/hover-1280x735.webp 1280w
  `.replace(/\s+/g, " ").trim(),
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: "Preview selectable image hover effects in Re Gallery",
  effects: [
    {
      value: "zoom-in",
      label: "Zoom In",
      previewTitle: "Closer Look",
      previewText:
        "The title stays visible while the image gently zooms in on hover.",
      captionDisplay: "hover",
      captionPosition: "top",
    },
    {
      value: "zoom-out",
      label: "Zoom Out",
      previewTitle: "Wide Reveal",
      previewText:
        "Start slightly cropped and settle back smoothly with the title always in view.",
      captionDisplay: "hover",
      captionPosition: "bottom",
    },
    {
      value: "slide",
      label: "Slide",
      previewTitle: "Side Motion",
      previewText:
        "Add a subtle sideways movement while keeping the caption visible like a gallery label.",
      captionDisplay: "always",
      captionPosition: "bottom",
    },
    {
      value: "push",
      label: "Push",
      previewTitle: "Downward Reveal",
      previewText:
        "Slide the image down on hover to reveal the caption above a solid black background.",
      captionDisplay: "hover",
      captionPosition: "center",
    },
    {
      value: "rotate",
      label: "Rotate",
      previewTitle: "Dynamic Tilt",
      previewText:
        "Use a soft rotation effect with a persistent caption for a playful featured item.",
      captionDisplay: "hover",
      captionPosition: "center",
    },
    {
      value: "blur",
      label: "Blur",
      previewTitle: "Focused Detail",
      previewText:
        "Blur the image slightly until hover while the title remains readable.",
      captionDisplay: "hidden",
      captionPosition: "bottom",
    },
    {
      value: "scale",
      label: "Gray Scale",
      previewTitle: "Color Return",
      previewText:
        "Start in grayscale and restore the color on hover with a static caption bar.",
      captionDisplay: "always",
      captionPosition: "bottom",
    },
    {
      value: "sepia",
      label: "Sepia",
      previewTitle: "Vintage Touch",
      previewText:
        "Apply a warm sepia mood that fades back to natural color while the title stays shown.",
      captionDisplay: "always",
      captionPosition: "top",
    },
    {
      value: "overlay",
      label: "Overlay",
      previewTitle: "Centered Caption",
      previewText:
        "Dim the image and reveal the title and caption only on hover, closer to the plugin overlay style.",
      captionDisplay: "hover",
      captionPosition: "center",
    },
    {
      value: "soft-light",
      label: "Soft Light",
      previewTitle: "Glassmorphism",
      previewText:
        "Layer in a subtle glassmorphism-style caption while the image gently darkens and zooms on hover.",
      captionDisplay: "always",
      captionPosition: "bottom",
    },
    {
      value: "overlay-icon-zoom",
      label: "Overlay Zoom Icon",
      previewTitle: "Zoom Preview",
      previewText:
        "Use only the hover icon here without showing any title or caption on the image.",
      captionDisplay: "hidden",
      captionPosition: "center",
    },
    {
      value: "overlay-icon-cart",
      label: "Overlay Cart Icon",
      previewTitle: "Shop This Look",
      previewText:
        "Keep the preview clean and icon-focused without a visible image caption.",
      captionDisplay: "hidden",
      captionPosition: "center",
    },
    {
      value: "overlay-icon-plus",
      label: "Overlay Plus Icon",
      previewTitle: "More Details",
      previewText:
        "Show only the plus icon on hover, without a title block inside the image.",
      captionDisplay: "hidden",
      captionPosition: "center",
    },
    {
      value: "overlay-icon-fullscreen",
      label: "Overlay Fullscreen Icon",
      previewTitle: "Open Full View",
      previewText:
        "Use the fullscreen icon alone to mimic a lightbox-style hover preview.",
      captionDisplay: "hidden",
      captionPosition: "center",
    },
    {
      value: "flash",
      label: "Flash",
      previewTitle: "Quick Highlight",
      previewText:
        "A brief flash animation helps featured images stand out while the title remains visible.",
      captionDisplay: "always",
      captionPosition: "center",
    },
    {
      value: "shine",
      label: "Shine",
      previewTitle: "Gloss Sweep",
      previewText:
        "Add a sleek shine pass across the image with the title shown all the time.",
      captionDisplay: "always",
      captionPosition: "bottom",
    },
  ],
};
