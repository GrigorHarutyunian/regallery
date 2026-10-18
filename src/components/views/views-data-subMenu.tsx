import ThumbnailsGeneralImg from "../../assets/imgs/views/menu_general_imgs/thumbnails.webp";
import MosiacGeneralImg from "../../assets/imgs/views/menu_general_imgs/mosaic.webp";
import MasnrycGeneralImg from "../../assets/imgs/views/menu_general_imgs/masonry.webp";
import SlideShowGeneralImg from "../../assets/imgs/views/menu_general_imgs/slideshow.webp";
import CubelGeneralImg from "../../assets/imgs/views/menu_general_imgs/cube.webp";
import CarouselGeneralImg from "../../assets/imgs/views/menu_general_imgs/carousel.webp";
import CardslGeneralImg from "../../assets/imgs/views/menu_general_imgs/cards.webp";
import BlogGeneralImg from "../../assets/imgs/views/menu_general_imgs/blog.webp";
import SmartRows from "../../assets/imgs/views/subViews/justified/Smart_Rows.webp";
import Coverflow from "../../assets/imgs/views/menu_general_imgs/coverflow.webp";
import Scroller from "../../assets/imgs/views/menu_general_imgs/scroller.webp";

export const viewsDataSubMenu = [
  {
    id: 1,
    title: "Grid",
    imgUrl: ThumbnailsGeneralImg,
    idView: 420,
    description: `The Grid view in Re Gallery allows you to show your images in a clean, organized grid of clickable preview images.
Ideal for portfolio sites, product galleries, and image-heavy blogs.`,
    svgPath: (
      <>
        <path
          d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"
          fill={"#ffffffff"}
        />
        <path
          d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
          fill={"#ffffffff"}
        />
        <path
          d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"
          fill={"#ffffffff"}
        />
        <path
          d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
          fill={"#ffffffff"}
        />
      </>
    ),
  },
  {
    id: 2,
    title: "Mosaic",
    imgUrl: MosiacGeneralImg,
    idView: 300,
    description:
      "The Mosaic view in Re Gallery arranges your images in an artistic, non-uniform grid, creating a visually engaging and modern display. Ideal for photographers, designers, and creatives.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="m9,0h-4C2.243,0,0,2.243,0,5v2c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2ZM2,7v-2c0-1.654,1.346-3,3-3h4l.002,5H2Zm20,8h-7c-1.103,0-2,.897-2,2v5c0,1.103.897,2,2,2h4c2.757,0,5-2.243,5-5v-2c0-1.103-.897-2-2-2Zm0,4c0,1.654-1.346,3-3,3h-4v-5h7v2ZM19,0h-4c-1.103,0-2,.897-2,2v9c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-6c0-2.757-2.243-5-5-5Zm-4,11V2h4c1.654,0,3,1.346,3,3l.002,6h-7.002Zm-6,0H2c-1.103,0-2,.897-2,2v6c0,2.757,2.243,5,5,5h4c1.103,0,2-.897,2-2v-9c0-1.103-.897-2-2-2Zm-4,11c-1.654,0-3-1.346-3-3v-6h7l.002,9h-4.002Z"
      />
    ),
  },
  {
    id: 3,
    title: "Masonry",
    imgUrl: MasnrycGeneralImg,
    idView: 717,
    description:
      "The Masonry view in Re Gallery presents your images in a stylish, grid-based layout with varying column heights, creating a visually dynamic and organized display. Perfect for photographers, bloggers, and eCommerce websites.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="m11,1h-6.5C2.019,1,0,3.019,0,5.5v3.5c0,1.103.897,2,2,2h9c1.103,0,2-.897,2-2V3c0-1.103-.897-2-2-2ZM2,9v-3.5c0-1.379,1.122-2.5,2.5-2.5h6.5v6s-9,0-9,0ZM19.5,3h-2.5c-1.103,0-2,.897-2,2v13c0,1.103.897,2,2,2h2.5c2.481,0,4.5-2.019,4.5-4.5V7.5c0-2.481-2.019-4.5-4.5-4.5Zm2.5,12.5c0,1.379-1.122,2.5-2.5,2.5h-2.5V5h2.5c1.378,0,2.5,1.121,2.5,2.5v8Zm-11-2.5h-7c-1.103,0-2,.897-2,2v3.5c0,2.481,2.019,4.5,4.5,4.5h4.5c1.103,0,2-.897,2-2v-6c0-1.103-.897-2-2-2Zm0,8h-4.5c-1.378,0-2.5-1.121-2.5-2.5v-3.5s7,0,7,0v6Z"
      />
    ),
  },
  {
    id: 4,
    title: "Slider",
    imgUrl: SlideShowGeneralImg,
    idView: 624,
    description:
      "The Slider view  provides a seamless, full-screen image viewing experience, perfect for displaying high-quality images. Ideal for photographers, artists, and businesses to show products.",
    svgPath: (
      <>
        <path
          fill={"#ffffffff"}
          d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"
        />
        <path
          fill={"#ffffffff"}
          d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"
        />
        <path
          fill={"#ffffffff"}
          d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"
        />
      </>
    ),
  },
  {
    id: 5,
    title: "Cube",
    imgUrl: CubelGeneralImg,
    idView: 696,
    description:
      "The Cube view in Re Gallery offers a dynamic 3D cube effect that adds an interactive, engaging dimension to your image gallery. Perfect for creative professionals, eCommerce businesses, and photographers.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="M20.527,4.217,14.5.737a5.015,5.015,0,0,0-5,0L3.473,4.217a5.014,5.014,0,0,0-2.5,4.33v6.96a5.016,5.016,0,0,0,2.5,4.331L9.5,23.317a5.012,5.012,0,0,0,5,0l6.027-3.479a5.016,5.016,0,0,0,2.5-4.331V8.547A5.014,5.014,0,0,0,20.527,4.217ZM10.5,2.47a3,3,0,0,1,3,0l6.027,3.479a2.945,2.945,0,0,1,.429.33L13.763,9.854a3.53,3.53,0,0,1-3.526,0L4.044,6.279a2.945,2.945,0,0,1,.429-.33ZM4.473,18.105a3.008,3.008,0,0,1-1.5-2.6V8.547a2.893,2.893,0,0,1,.071-.535l6.193,3.575A5.491,5.491,0,0,0,11,12.222v9.569a2.892,2.892,0,0,1-.5-.206Zm16.554-2.6a3.008,3.008,0,0,1-1.5,2.6L13.5,21.585a2.892,2.892,0,0,1-.5.206V12.222a5.491,5.491,0,0,0,1.763-.635l6.193-3.575a2.893,2.893,0,0,1,.071.535Z"
      />
    ),
  },

  {
    id: 6,
    title: "Carousel",
    imgUrl: CarouselGeneralImg,
    idView: 664,
    description:
      "The Carousel view offers a sleek, rotating image slider, allowing you to display multiple images in a compact and elegant way. Ideal for e-commerce websites, portfolios, and businesses looking to show products, services, or visuals in an interactive format.",
    svgPath: (
      <path
        fill="#FFFFFFff"
        d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-4,2v16h-6V4h6ZM2,17V7c0-1.654,1.346-3,3-3h2v16h-2c-1.654,0-3-1.346-3-3Zm20,0c0,1.654-1.346,3-3,3h-2V4h2c1.654,0,3,1.346,3,3v10Z"
      />
    ),
  },

  {
    id: 7,
    title: "Cards",
    imgUrl: CardslGeneralImg,
    idView: 708,
    description:
      "The Cards view in Re Gallery presents images in a clean, organized grid layout with each image framed as a card, perfect for online stores, portfolios, and galleries.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="M20.466,1.967L14.78,.221c-2.614-.797-5.406,.664-6.225,3.24l-.188,.539h-3.368C2.243,4,0,6.243,0,9v10c0,2.757,2.243,5,5,5h6c1.596,0,3.004-.766,3.92-1.934,.231,.032,.461,.052,.688,.052,2.167,0,4.144-1.414,4.775-3.564l3.413-10.397c.767-2.613-.727-5.39-3.331-6.189ZM11,22H5c-1.654,0-3-1.346-3-3V9c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v10c0,1.654-1.346,3-3,3ZM21.887,7.562l-3.412,10.397c-.358,1.214-1.413,2.022-2.603,2.132,.079-.353,.128-.716,.128-1.092V9c0-2.757-2.243-5-5-5h-.507c.534-1.501,2.163-2.341,3.7-1.867l5.686,1.746c1.562,.479,2.459,2.146,2.008,3.684Z"
      />
    ),
  },
  {
    id: 8,
    title: "Blog",
    imgUrl: BlogGeneralImg,
    idView: 858,
    description:
      "The Blog View in Re Gallery lets you showcase images or videos with detailed descriptions and clickable buttons. Perfect for bloggers, eCommerce shop owners, content creators who want to tell a story, highlight products, or guide visitors to take the next step.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5ZM5,4h14c1.65,0,3,1.35,3,3H2c0-1.65,1.35-3,3-3Zm14,16H5c-1.65,0-3-1.35-3-3V9H22v8c0,1.65-1.35,3-3,3ZM10,12c0,.55-.45,1-1,1h-1v4c0,.55-.45,1-1,1s-1-.45-1-1v-4h-1c-.55,0-1-.45-1-1s.45-1,1-1h4c.55,0,1,.45,1,1Zm10,0c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1Zm0,4c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1Z"
      />
    ),
  },
  {
    id: 9,
    title: "Justified",
    imgUrl: SmartRows,
    idView: 889,
    description:
      "The Justified gallery view displays images in full-width rows while preserving their original aspect ratios. This layout ensures a modern look without cropping, making it ideal for portfolios and eCommerce galleries.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="m23 13h-11c-.553 0-1 .448-1 1v9c0 .552.447 1 1 1h7c2.757 0 5-2.243 5-5v-5c0-.552-.447-1-1-1zm-1 6c0 1.654-1.346 3-3 3h-6v-7h9zm-14-6h-7c-.553 0-1 .448-1 1v5c0 2.757 2.243 5 5 5h3c.553 0 1-.448 1-1v-9c0-.552-.447-1-1-1zm-1 9h-2c-1.654 0-3-1.346-3-3v-4h5zm12-22h-14c-2.757 0-5 2.243-5 5v5c0 .552.447 1 1 1h22c.553 0 1-.448 1-1v-5c0-2.757-2.243-5-5-5zm3 9h-20v-4c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3z"
      />
    ),
  },
  {
    id: 10,
    title: "Coverflow",
    imgUrl: Coverflow,
    idView: 2290,
    description:
      "The Coverflow view highlights a centered active slide with a sleek, layered carousel effect, making it ideal for portfolios, featured products, and visual storytelling.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="m19,0h-4c-2.757,0-5,2.243-5,5v14c0,2.757,2.243,5,5,5h4c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3h-4c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v14ZM7,4v17c0,.552-.448,1-1,1s-1-.448-1-1V4c0-.552.448-1,1-1s1,.448,1,1Zm-5,3v11c0,.552-.448,1-1,1s-1-.448-1-1V7c0-.552.448-1,1-1s1,.448,1,1Z"
      />
    ),
  },
  {
    id: 11,
    title: "Scroller",
    imgUrl: Scroller,
    idView: 2371,
    description:
      "The Scroller view provides a smooth horizontal scrolling experience, perfect for showcasing a large number of images in a compact space.",
    svgPath: (
      <path
        fill={"#ffffffff"}
        d="M23,4H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm1,17c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1Zm-4-8v-2c0-2.21-1.79-4-4-4H8c-2.21,0-4,1.79-4,4v2c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4Zm-4-4c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2H8c-1.1,0-2-.9-2-2v-2c0-1.1,.9-2,2-2h8Z"
      />
    ),
  },
];
