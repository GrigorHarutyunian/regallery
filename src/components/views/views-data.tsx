import thumbnailsImg from "../../assets/imgs/views/Thumbnails_card_img.png";
import mosaicImg from "../../assets/imgs/views/mosaic_card_img.png";
import masonaryImg from "../../assets/imgs/views/Masonary_card_img.png";
import slideShowImg from "../../assets/imgs/views/slideShow_card_img.png";
import cubeImg from "../../assets/imgs/views/Cube_card_img.png";
import carouselImg from "../../assets/imgs/views/Carousel_card_img.png";
import cardsImg from "../../assets/imgs/views/Cards_card_img.png";
export const viewsData = [
  {
    id: 1,
    title: "Thumbnails",
    demoLink: "https://regallery.team/core/thumbnails/",
    img: thumbnailsImg,
    description:
      "Organize photos in a grid for easy browsing. Users can quickly find and view specific images in your photo gallery.",
    path: (
      <>
        <path
          d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"
          fill={"#2540CC"}
        />
        <path
          d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
          fill={"#2540CC"}
        />
        <path
          d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"
          fill={"#2540CC"}
        />
        <path
          d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
          fill={"#2540CC"}
        />
      </>
    ),
  },
  {
    id: 2,
    title: "Mosaic",
    demoLink: "https://regallery.team/core/mosaic/",
    img: mosaicImg,
    description:
      "Create a collage-like presentation by mixing different sizes and shapes.",
    path: (
      <path
        fill={"#2540CC"}
        d="m9,0h-4C2.243,0,0,2.243,0,5v2c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2ZM2,7v-2c0-1.654,1.346-3,3-3h4l.002,5H2Zm20,8h-7c-1.103,0-2,.897-2,2v5c0,1.103.897,2,2,2h4c2.757,0,5-2.243,5-5v-2c0-1.103-.897-2-2-2Zm0,4c0,1.654-1.346,3-3,3h-4v-5h7v2ZM19,0h-4c-1.103,0-2,.897-2,2v9c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-6c0-2.757-2.243-5-5-5Zm-4,11V2h4c1.654,0,3,1.346,3,3l.002,6h-7.002Zm-6,0H2c-1.103,0-2,.897-2,2v6c0,2.757,2.243,5,5,5h4c1.103,0,2-.897,2-2v-9c0-1.103-.897-2-2-2Zm-4,11c-1.654,0-3-1.346-3-3v-6h7l.002,9h-4.002Z"
      />
    ),
  },
  {
    id: 3,
    title: "Masonry",
    demoLink: "https://regallery.team/core/masonry/",
    img: masonaryImg,
    description:
      "Arrange items in a back-and-forth pattern with our customization options. This will create a smooth, organic look.",
    path: (
      <path
        fill={"#2540CC"}
        d="m0,4v7h13V1H3C1.346,1,0,2.346,0,4Zm11,5H2v-5c0-.552.449-1,1-1h8v6Zm10-6h-6v17h6c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm1,14c0,.552-.449,1-1,1h-4V5h4c.551,0,1,.448,1,1v11Zm-20,3c0,1.654,1.346,3,3,3h8v-10H2v7Zm2-5h7v6h-6c-.551,0-1-.448-1-1v-5Z"
      />
    ),
  },
  {
    id: 4,
    title: "Slideshow",
    demoLink: "https://regallery.team/core/slideshow/",
    img: slideShowImg,
    description:
      "Display images or videos in a sequential, animated format. This layout displays one item at a time. This makes it simple for the viewer to concentrate on the content. The layout is clean and organized.",
    path: (
      <>
        <path
          fill={"#2540CC"}
          d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"
        />
        <path
          fill={"#2540CC"}
          d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"
        />
        <path
          fill={"#2540CC"}
          d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"
        />
      </>
    ),
  },
  {
    id: 5,
    title: "Cube",
    demoLink: "https://regallery.team/core/cube/",
    img: cubeImg,
    description:
      "A 3D photo gallery with an interactive, rotating cube design. Great for displaying images in a unique way.",
    path: (
      <path
        fill={"#2540CC"}
        d="M20.527,4.217,14.5.737a5.015,5.015,0,0,0-5,0L3.473,4.217a5.014,5.014,0,0,0-2.5,4.33v6.96a5.016,5.016,0,0,0,2.5,4.331L9.5,23.317a5.012,5.012,0,0,0,5,0l6.027-3.479a5.016,5.016,0,0,0,2.5-4.331V8.547A5.014,5.014,0,0,0,20.527,4.217ZM10.5,2.47a3,3,0,0,1,3,0l6.027,3.479a2.945,2.945,0,0,1,.429.33L13.763,9.854a3.53,3.53,0,0,1-3.526,0L4.044,6.279a2.945,2.945,0,0,1,.429-.33ZM4.473,18.105a3.008,3.008,0,0,1-1.5-2.6V8.547a2.893,2.893,0,0,1,.071-.535l6.193,3.575A5.491,5.491,0,0,0,11,12.222v9.569a2.892,2.892,0,0,1-.5-.206Zm16.554-2.6a3.008,3.008,0,0,1-1.5,2.6L13.5,21.585a2.892,2.892,0,0,1-.5.206V12.222a5.491,5.491,0,0,0,1.763-.635l6.193-3.575a2.893,2.893,0,0,1,.071.535Z"
      />
    ),
  },

  {
    id: 6,
    title: "Carousel",
    demoLink: "https://regallery.team/core/carousel/",
    img: carouselImg,
    description:
      "Show multiple images in a horizontal scroll, perfect for displaying related photos in a compact space. Great for highlighting products, portfolios, or collections.",
    path: (
      <path
        fill={"#2540CC"}
        d="m21,0h-8c-1.654,0-3,1.346-3,3v21h14V3c0-1.654-1.346-3-3-3Zm1,22h-10V3c0-.551.449-1,1-1h8c.551,0,1,.449,1,1v19ZM5,3h2v18h-2V3ZM0,6h2v12H0V6Z"
      />
    ),
  },
  {
    id: 0,
    title: "none",
    description: "",
    path: "",
  },
  {
    id: 7,
    title: "Cards",
    demoLink: "https://regallery.team/core/cards/",
    img: cardsImg,
    description:
      "Each item is placed in a distinct card, making it easy for users to scan through various media at a glance.",
    path: (
      <path
        fill={"#2540CC"}
        d="M20.466,1.967L14.78,.221c-2.614-.797-5.406,.664-6.225,3.24l-.188,.539h-3.368C2.243,4,0,6.243,0,9v10c0,2.757,2.243,5,5,5h6c1.596,0,3.004-.766,3.92-1.934,.231,.032,.461,.052,.688,.052,2.167,0,4.144-1.414,4.775-3.564l3.413-10.397c.767-2.613-.727-5.39-3.331-6.189ZM11,22H5c-1.654,0-3-1.346-3-3V9c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v10c0,1.654-1.346,3-3,3ZM21.887,7.562l-3.412,10.397c-.358,1.214-1.413,2.022-2.603,2.132,.079-.353,.128-.716,.128-1.092V9c0-2.757-2.243-5-5-5h-.507c.534-1.501,2.163-2.341,3.7-1.867l5.686,1.746c1.562,.479,2.459,2.146,2.008,3.684Z"
      />
    ),
  },
];
