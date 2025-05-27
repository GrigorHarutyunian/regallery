import HiveLens from "../../assets/imgs/views/subViews/thumbnail/Hive_Lens.webp";
import PrismPattern from "../../assets/imgs/views/subViews/thumbnail/Prism_Pattern.webp";
import MediaCatalog from "../../assets/imgs/views/subViews/thumbnail/Media_Catalog.webp";
import Slanted from "../../assets/imgs/views/subViews/thumbnail/Dynamic_Slant.webp";
import Polygrid from "../../assets/imgs/views/subViews/thumbnail/Polygrid.webp";
import Harmonicchaosthumbnail from "../../assets/imgs/views/subViews/thumbnail/Harmonic_Chaos.webp";
import FlickerFrame from "../../assets/imgs/views/subViews/thumbnail/Flicker_Frame.webp";
import Collagethumbnail from "../../assets/imgs/views/subViews/thumbnail/Collage.webp";
import Circlegridthumbnail from "../../assets/imgs/views/subViews/thumbnail/Circle_Grid.webp";
import Photoalbumthumbnail from "../../assets/imgs/views/subViews/thumbnail/Photo_Album.webp";
import Modernpatternthumbnial from "../../assets/imgs/views/subViews/thumbnail/Modern_Pattern.webp";
import Polaroidgallerythumbnail from "../../assets/imgs/views/subViews/thumbnail/Polaroid_Gallery.webp";
import SimplePrisme from "../../assets/imgs/views/subViews/thumbnail/Simple_Prism.webp";
import Monochromethumbnail from "../../assets/imgs/views/subViews/mosaic/Monochrome_Collection.webp";
import Lattemosaicthumbnail from "../../assets/imgs/views/subViews/mosaic/Latte_Mosaic.webp";
import Displaycollectionhumbnail from "../../assets/imgs/views/subViews/mosaic/Display_Collection.webp";
import MemoryWall from "../../assets/imgs/views/subViews/masonry/Tide_Frame.webp";
import InfiniteScroll from "../../assets/imgs/views/subViews/masonry/Infinite_Scroll.webp";
import OverlaySlideshow from "../../assets/imgs/views/subViews/slideshow/Overlay_Slideshow.webp";
import FocusFrame1 from "../../assets/imgs/views/subViews/slideshow/Focus_Frame.webp";
import DigitalShop from "../../assets/imgs/views/subViews/cube/Digital_Shop.webp";
import TestimonialGallery from "../../assets/imgs/views/subViews/cube/Testimonial_Gallery.webp";
import TemplateBlindesSlider from "../../assets/imgs/views/subViews/carousel/Blinds_Slider.webp";
import Horizontalscrollthumbnail from "../../assets/imgs/views/subViews/carousel/Horizontal_Scroll.webp";
import Carouselshowcasethumbnail from "../../assets/imgs/views/subViews/carousel/Carousel_Showcase.webp";
import SpotlightAd from "../../assets/imgs/views/subViews/cards/Spotlight_Ad.webp";
import ThumbnailsGeneralImg from "../../assets/imgs/views/menu_general_imgs/thumbnails.webp";
import MosiacGeneralImg from "../../assets/imgs/views/menu_general_imgs/mosaic.webp";
import MasnrycGeneralImg from "../../assets/imgs/views/menu_general_imgs/masonry.webp";
import SlideShowGeneralImg from "../../assets/imgs/views/menu_general_imgs/slideshow.webp";
import CubelGeneralImg from "../../assets/imgs/views/menu_general_imgs/cube.webp";
import CarouselGeneralImg from "../../assets/imgs/views/menu_general_imgs/carousel.webp";
import CardslGeneralImg from "../../assets/imgs/views/menu_general_imgs/cards.webp";
import BlogGeneralImg from "../../assets/imgs/views/menu_general_imgs/blog.webp";
import AboutUsTemplate from "../../assets/imgs/views/subViews/blog/AboutUs.webp";
import TravelBlogTemplate from "../../assets/imgs/views/subViews/blog/TravelBlog.webp";
import SmartRows from "../../assets/imgs/views/subViews/justified/Smart_Rows.webp";
export const viewsDataSubMenu = [
  {
    id: 1,
    title: "Thumbnails",
    imgUrl: ThumbnailsGeneralImg,
    idView: 420,
    description: `The Thumbnails view in Re Gallery allows you to show your images in a clean, organized grid of clickable preview images.
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
    subItems: [
      {
        title: "Dynamic Slant",
        description:
          "The Dynamic Slant template in Re Gallery brings a modern, stylish twist to your WordPress photo gallery with its unique angled layout. Ideal for photographers, creative agencies, designers, and bloggers.",
        imgUrl: Slanted,
        path: "https://regallery.team/core/reacg/dynamic-slant/",
      },
      {
        title: "Hive Lens",
        description:
          "The Hive Lens template for Re Gallery offers a unique hexagonal grid layout, perfect for photographers, designers, artists, and e-commerce stores to showcase images creatively. ",
        imgUrl: HiveLens,
        path: "https://regallery.team/core/reacg/hive-lens/",
      },
      {
        title: "Prism Pattern",
        description:
          "The Prism Pattern template in Re Gallery creates a dynamic and stylish layout, perfect for photographers, bloggers, designers, and creative portfolios. ",
        imgUrl: PrismPattern,
        path: "https://regallery.team/core/reacg/prism-pattern/",
      },
      {
        title: "Media Catalog",
        description:
          "The Media Catalog template in Re Gallery is perfect for photographers, digital agencies, eCommerce stores, and content creators who need a structured and organized gallery.",
        imgUrl: MediaCatalog,
        path: "https://regallery.team/core/reacg/media-catalog/",
      },
      {
        title: "Flicker Frame",
        description:
          "The Flicker Frame template in Re Gallery adds a dynamic and engaging effect to your WordPress photo gallery, perfect for photographers, bloggers, designers, and artists looking to create an eye-catching display.",
        imgUrl: FlickerFrame,
        path: "https://regallery.team/core/reacg/flicker-frame/",
      },
      {
        title: "PolyGrid",
        description:
          "The PolyGrid template in Re Gallery offers a dynamic and structured WordPress photo gallery layout, perfect for photographers, artists, designers, and eCommerce stores. ",
        imgUrl: Polygrid,
        path: "https://regallery.team/core/reacg/polygrid/",
      },
      {
        title: "Harmonic Chaos",
        description:
          "The Harmonic Chaos template in Re Gallery is ideal for creative portfolios, fashion lookbooks, and abstract photography. ",
        imgUrl: Harmonicchaosthumbnail,
        path: "https://regallery.team/core/reacg/harmonic-chaos/",
      },
      {
        title: "Collage",
        description:
          "The Collage template in Re Gallery offers a stylish and dynamic way to display your WordPress photo gallery. Perfect for photographers, bloggers, designers, and lifestyle websites.",
        imgUrl: Collagethumbnail,
        path: "https://regallery.team/core/reacg/collage/",
      },
      {
        title: "Photo Album",
        description:
          "The Photo Album template in Re Gallery is perfect for organizing and showcasing images in a structured, album-style layout. Ideal for photographers, event planners, travel bloggers, and businesses.",
        imgUrl: Photoalbumthumbnail,
        path: "https://regallery.team/core/reacg/photo-album/",
      },
      {
        title: "Circle Grid",
        description:
          "The Circle Grid template in Re Gallery adds a unique, circular design to your WordPress photo gallery, perfect for photographers, artists, bloggers, and creatives. ",
        imgUrl: Circlegridthumbnail,
        path: "https://regallery.team/core/reacg/circle-grid/",
      },
      {
        title: "Modern Pattern",
        description:
          "The Modern Pattern template in Re Gallery is perfect for photographers, designers, eCommerce sites, and digital agencies. ",
        imgUrl: Modernpatternthumbnial,
        path: "https://regallery.team/core/reacg/modern-pattern/",
      },
      {
        title: "Polaroid Gallery",
        description:
          "The Polaroid Gallery template in Re Gallery offers a nostalgic and creative way to showcase your images in a unique, polaroid-style layout. Perfect for photographers, artists, bloggers, and event organizers.",
        imgUrl: Polaroidgallerythumbnail,
        path: "https://regallery.team/core/reacg/polaroid-gallery/",
      },
      {
        title: "Simple Prism",
        description:
          "The Simple Prism template in Re Gallery offers a clean and minimalist layout, ideal for showcasing your images with subtle elegance. Designed for photographers, bloggers, and creatives who prefer a straightforward presentation.",
        imgUrl: SimplePrisme,
        path: "https://regallery.team/core/reacg/simple-prism/",
      },
    ],
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
    subItems: [
      {
        title: "Monochrome Collection",
        description:
          "The Monochrome Collection template in Re Gallery provides a minimalist and elegant way to display images in a clean, black-and-white style. Ideal for photographers, artists, designers, and portfolio websites.",
        imgUrl: Monochromethumbnail,
        path: "https://regallery.team/core/reacg/monochrome-collection/",
      },
      {
        title: "Display Collection",
        description:
          "The Display Collection template in Re Gallery is perfect for photographers, online stores, portfolios, and galleries.",
        imgUrl: Lattemosaicthumbnail,
        path: "https://regallery.team/core/reacg/display-collection/",
      },
      {
        title: "Latte Mosaic",
        description:
          "The Latte Mosaic template in Re Gallery presents a warm and visually appealing way to display your images in a mosaic-style grid. Ideal for photographers, interior designers, bloggers, and creatives.",
        imgUrl: Displaycollectionhumbnail,
        path: "https://regallery.team/core/reacg/latte-mosaic/",
      },
    ],
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
        d="m0,4v7h13V1H3C1.346,1,0,2.346,0,4Zm11,5H2v-5c0-.552.449-1,1-1h8v6Zm10-6h-6v17h6c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm1,14c0,.552-.449,1-1,1h-4V5h4c.551,0,1,.448,1,1v11Zm-20,3c0,1.654,1.346,3,3,3h8v-10H2v7Zm2-5h7v6h-6c-.551,0-1-.448-1-1v-5Z"
      />
    ),
    subItems: [
      {
        title: "Infinite Scroll",
        description:
          "The Infinite Scroll template in Re Gallery allows for a continuous, smooth browsing experience by automatically loading more content as users scroll. Ideal for blogs, image galleries, and content-heavy websites",
        imgUrl: MemoryWall,
        path: "https://regallery.team/core/reacg/infinite-scroll/",
      },
      {
        title: "Tide Frame",
        description:
          "The Tide Frame template in Re Gallery offers a clean and elegant way to display your images within dynamic, fluid frames. Perfect for photographers, artists, and creatives",
        imgUrl: InfiniteScroll,
        path: "https://regallery.team/core/reacg/tide-frame/",
      },
    ],
  },
  {
    id: 4,
    title: "Slideshow",
    imgUrl: SlideShowGeneralImg,
    idView: 624,
    description:
      "The Slideshow view  provides a seamless, full-screen image viewing experience , perfect for displaying high-quality images. Ideal for photographers, artists, and businesses to show products.",
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
    subItems: [
      {
        title: "Overlay Slideshow",
        description:
          "The Overlay Slideshow template in Re Gallery offers an elegant way to display your images with a stylish overlay effect, allowing for a more immersive experience. Perfect for photographers, designers, and businesses.",
        imgUrl: OverlaySlideshow,
        path: "https://regallery.team/core/reacg/overlay-slideshow/",
      },
      {
        title: "Focus Frame",
        description:
          "The Focus Frame template highlights each image with a clean, cinematic framing effect, providing a distraction-free, immersive viewing experience. Ideal for photographers, artists, and businesses.",
        imgUrl: FocusFrame1,
        path: "https://regallery.team/core/reacg/focus-frame/",
      },
    ],
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
    subItems: [
      {
        title: "Digital Shop",
        description:
          "The Digital Shop template in Re Gallery is designed for showcasing products in a clean, organized layout, making it perfect for eCommerce websites, digital product sellers, and online stores. ",
        imgUrl: DigitalShop,
        path: "https://regallery.team/core/reacg/digital-shop/",
      },
      {
        title: "Testimonial Gallery",
        description:
          "​​The Testimonial Gallery template allows you to display customer reviews and testimonials in a visually appealing and organized grid layout. Perfect for businesses, service providers, freelancers, and agencies.",
        imgUrl: TestimonialGallery,
        path: "https://regallery.team/core/reacg/testimonial-gallery/",
      },
    ],
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
        fill={"#ffffffff"}
        d="m21,0h-8c-1.654,0-3,1.346-3,3v21h14V3c0-1.654-1.346-3-3-3Zm1,22h-10V3c0-.551.449-1,1-1h8c.551,0,1,.449,1,1v19ZM5,3h2v18h-2V3ZM0,6h2v12H0V6Z"
      />
    ),
    subItems: [
      {
        title: "Blinds Slider",
        description:
          "The Blinds Slider template in Re Gallery offers a unique and stylish way to showcase your images with a sliding effect. Ideal for photographers, portfolio owners, and creative professionals.",
        imgUrl: TemplateBlindesSlider,
        path: "https://regallery.team/core/reacg/blinds-slider/",
      },
      {
        title: "Carousel Showcase",
        description:
          "The Carousel Showcase template in Re Gallery allows you to display images in a dynamic, sliding carousel format. Perfect for portfolios, product displays, and creative agencies.",
        imgUrl: Carouselshowcasethumbnail,
        path: "https://regallery.team/core/reacg/carousel-showcase/",
      },
      {
        title: "Horizontal Scroll",
        description:
          "The Horizontal Scroll template in Re Gallery lets you display images in a smooth, horizontally scrolling layout. Ideal for photographers, designers, and businesses looking to present their content in an interactive way.",
        imgUrl: Horizontalscrollthumbnail,
        path: "https://regallery.team/core/reacg/horizontal-scroll/",
      },
    ],
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
    subItems: [
      {
        title: "Spotlight Ad",
        description:
          "The Spotlight Ad template in Re Gallery is designed to highlight key content or products with a bold, focused display. Perfect for businesses, eCommerce stores, and advertisers.",
        imgUrl: SpotlightAd,
        path: "https://regallery.team/core/reacg/spotlight-ad/",
      },
    ],
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
    subItems: [
      {
        title: "About Us",
        description:
          "The About Us template is perfect for introducing your team, sharing your brand journey, or highlighting your mission, this layout helps you connect with your audience visually and meaningfully.",
        imgUrl: AboutUsTemplate,
        path: "https://regallery.team/core/reacg/about-us/",
      },
      {
        title: "Travel Blog",
        description:
          "The Travel Blog template is ideal for sharing your adventures, travel tips, and stunning destinations. This layout helps you captivate your audience with immersive visuals and engaging stories that bring your journeys to life.",
        imgUrl: TravelBlogTemplate,
        path: "https://regallery.team/core/reacg/travel-blog/",
      },
    ],
  },
  {
    id: 9,
    title: "Justified",
    imgUrl: SmartRows,
    idView: 889,
    description:
      "The Justified gallery view displays images in full-width rows while preserving their original aspect ratios. This layout ensures a modern look without cropping, making it ideal for portfolios and eCommerce galleries.",
    svgPath: (
      <g
        fill={"#ffffffff"}
        xmlns="http://www.w3.org/2000/svg"
        id="_01_align_center"
        data-name="01 align center"
      >
        <path d="M13,2V9H2V3A1,1,0,0,1,3,2H13m2-2H3A3,3,0,0,0,0,3v8H15V0Z" />
        <path d="M21,2a1,1,0,0,1,1,1V9H19V2h2m0-2H17V11h7V3a3,3,0,0,0-3-3Z" />
        <path d="M5,15v7H3a1,1,0,0,1-1-1V15H5m2-2H0v8a3,3,0,0,0,3,3H7V13Z" />
        <path d="M22,15v6a1,1,0,0,1-1,1H11V15H22m2-2H9V24H21a3,3,0,0,0,3-3V13Z" />
      </g>
    ),
    subItems: [
      {
        title: "Smart Rows",
        description:
          "The Smart Rows template in Re Gallery arranges your images in evenly aligned horizontal rows, intelligently adjusting their dimensions for a balanced and seamless gallery display. Ideal for photographers, bloggers.",
        imgUrl: SmartRows,
        path: "https://regallery.team/core/reacg/smart-rows/",
      },
    ],
  },
];
