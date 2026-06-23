const allTemplatesCount = formatCountByStep(allTemplates.length);
import { allTemplates } from "../components/views/views-data-subMenu";
import { formatCountByStep } from "../utils/formatCountByStep";
import CheckIcon from "@mui/icons-material/Check";

export const featuresData1 = {
  id: "features",
  title: "What Makes Re&nbsp;Gallery Different From Other Gallery Plugins",
  items: [
    {
      id: 1,
      title: "Al alt text, titles & descriptions",
      description:
        "Every image gets accurate, SEO-ready alt text, a title, and a description the moment you upload it. No competitor's gallery plugin generates these natively — you'd normally need a separate plugin.",
      path: (
        <path d="m19.026,12v6c0,.552-.448,1-1,1s-1-.448-1-1v-6c0-.552.448-1,1-1s1,.448,1,1Zm-7.42-5.283l3.071,11.029c.175.63-.298,1.254-.953,1.254-.443,0-.831-.294-.952-.72l-.643-2.28h-5.206l-.643,2.28c-.12.426-.509.72-.952.72h0c-.654,0-1.128-.624-.953-1.254l3.091-11.108c.141-.608.541-1.12,1.098-1.405.568-.292,1.22-.31,1.839-.05.587.246,1.037.817,1.204,1.535Zm-.041,7.283l-1.929-6.835c-.029-.114-.191-.114-.219,0l-1.929,6.835h4.077Zm11.462-4c-.552,0-1,.448-1,1v8c0,1.654-1.346,3-3,3H5.026c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h8c.552,0,1-.448,1-1S13.578,0,13.026,0H5.026C2.269,0,.026,2.243.026,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-.552-.448-1-1-1Zm-6.85-4.82l1.868.787.745,1.865c.161.404.552.668.987.668s.825-.265.987-.668l.741-1.854,1.854-.741c.404-.161.668-.552.668-.987s-.265-.825-.668-.987l-1.854-.741-.741-1.854C20.601.265,20.21,0,19.776,0s-.825.265-.987.668l-.737,1.843-1.84.697c-.406.154-.678.54-.686.974-.008.435.25.83.65.999Z" />
      ),
    },
    {
      id: 2,
      title: "Multilingual Al output",
      description:
        "Metadata generates in each language automatically, instead of you rewriting alt text by hand for every translation.",
      path: (
        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z" />
      ),
    },
    {
      id: 3,
      title: "WooCommerce Products Gallery",
      description:
        "Re&nbsp;Gallery automatically pulls product images, titles, and prices, so you can create visually stunning galleries that attract visitors, highlight your products, and boost sales without any extra work.",
      path: (
        <path d="M23.621,6.836l-1.352-2.826c-.349-.73-.99-1.296-1.758-1.552L14.214,.359c-1.428-.476-3-.476-4.428,0L3.49,2.458c-.769,.256-1.41,.823-1.759,1.554L.445,6.719c-.477,.792-.567,1.742-.247,2.609,.309,.84,.964,1.49,1.802,1.796l-.005,6.314c-.002,2.158,1.372,4.066,3.418,4.748l4.365,1.455c.714,.238,1.464,.357,2.214,.357s1.5-.119,2.214-.357l4.369-1.457c2.043-.681,3.417-2.585,3.419-4.739l.005-6.32c.846-.297,1.508-.946,1.819-1.79,.317-.858,.228-1.799-.198-2.499ZM10.419,2.257c1.02-.34,2.143-.34,3.162,0l4.248,1.416-5.822,1.95-5.834-1.95,4.246-1.415ZM2.204,7.666l1.327-2.782c.048,.025,7.057,2.373,7.057,2.373l-1.621,3.258c-.239,.398-.735,.582-1.173,.434l-5.081-1.693c-.297-.099-.53-.325-.639-.619-.109-.294-.078-.616,.129-.97Zm3.841,12.623c-1.228-.409-2.052-1.554-2.051-2.848l.005-5.648,3.162,1.054c1.344,.448,2.792-.087,3.559-1.371l.278-.557-.005,10.981c-.197-.04-.391-.091-.581-.155l-4.366-1.455Zm11.897-.001l-4.37,1.457c-.19,.063-.384,.115-.581,.155l.005-10.995,.319,.64c.556,.928,1.532,1.459,2.561,1.459,.319,0,.643-.051,.96-.157l3.161-1.053-.005,5.651c0,1.292-.826,2.435-2.052,2.844Zm4-11.644c-.105,.285-.331,.504-.619,.6l-5.118,1.706c-.438,.147-.934-.035-1.136-.365l-1.655-3.323s7.006-2.351,7.054-2.377l1.393,2.901c.157,.261,.186,.574,.081,.859Z" />
      ),
    },
    {
      id: 4,
      title: `${allTemplatesCount} Templates`,
      description:
        "Create eye-catching galleries in seconds. Choose from professionally designed templates that adapt to your content, style, and layout needs - no design skills required.",
      path: (
        <>
          <path d="M17.115,8.05A1.5,1.5,0,1,0,18.95,9.115,1.5,1.5,0,0,0,17.115,8.05Z" />
          <path d="M12.115,5.05A1.5,1.5,0,1,0,13.95,6.115,1.5,1.5,0,0,0,12.115,5.05Z" />
          <path d="M7.115,8.05A1.5,1.5,0,1,0,8.95,9.115,1.5,1.5,0,0,0,7.115,8.05Z" />
          <path d="M7.115,14.05A1.5,1.5,0,1,0,8.95,15.115,1.5,1.5,0,0,0,7.115,14.05Z" />
          <path d="M12.5.007A12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007Zm8.982,15.4-.014-.014a5.567,5.567,0,0,0-9.5,3.985L11.992,22a10,10,0,0,1,.09-20c.117,0,.235,0,.353.006a10.127,10.127,0,0,1,9.645,9.743A9.892,9.892,0,0,1,21.485,15.4Z" />
        </>
      ),
    },
    {
      id: 5,
      title: "Built light, stays fast",
      description:
        "Lazy loading and minimal dependencies keep load times down, even on galleries with hundreds of images.",
      path: (
        <path d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24ZM10,2a1,1,0,0,0-.958.71l-3.024,10A1,1,0,0,0,6.975,14H12a1,1,0,0,1,.957,1.29L11.01,21.732a.183.183,0,0,0,.121.241A.188.188,0,0,0,11.4,21.9l6.4-10.3a1,1,0,0,0,.078-1.063A.979.979,0,0,0,17,10H13a1,1,0,0,1-.937-1.351l2.19-5.84A.6.6,0,0,0,13.693,2Z" />
      ),
    },
    {
      id: 6,
      title: "Watermark Protection",
      description:
        "Add logo or any image based watermark to your galleries directly in WordPress to safeguard your photos while keeping them looking professional.",
      path: (
        <path d="M23.12,11.88c-1.13-1.13-3.11-1.13-4.24,0l-7,7c-.57,.57-.88,1.32-.88,2.12v2c0,.55,.45,1,1,1h2c.8,0,1.55-.31,2.12-.88l7-7c.57-.57,.88-1.32,.88-2.12s-.31-1.55-.88-2.12Zm-1.41,2.83l-7,7c-.19,.19-.44,.29-.71,.29h-1v-1c0-.26,.11-.52,.29-.71l7-7c.38-.38,1.04-.38,1.41,0,.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71Zm-7.71-1.21c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5c0,.32,.1,.67,.29,.99-.32,.28-.74,.51-1.29,.51-.44,0-.88-.13-1.3-.34,.81-1.16,1.3-2.55,1.3-3.66,0-1.65-1.35-3-3-3s-3,1.35-3,3c0,1.22,.68,2.65,1.71,3.8-.24,.13-.48,.2-.71,.2-.55,0-1,.45-1,1s.45,1,1,1c.83,0,1.61-.33,2.3-.85,.84,.53,1.76,.85,2.7,.85,2.6,0,4-2.48,4-3.5Zm-6.87-.1c-.68-.79-1.13-1.72-1.13-2.4,0-.55,.45-1,1-1s1,.45,1,1c0,.72-.35,1.63-.87,2.4Zm1.87,7.6c0,.55-.45,1-1,1h-3c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h5.76c1.07,0,2.07,.42,2.83,1.17l3.24,3.24c.76,.76,1.17,1.76,1.17,2.83v1.76c0,.55-.45,1-1,1s-1-.45-1-1v-1.76c0-.08,0-.16-.02-.24h-2.98c-1.1,0-2-.9-2-2V2.02c-.08,0-.16-.02-.24-.02H5c-1.65,0-3,1.35-3,3v12c0,1.65,1.35,3,3,3h3c.55,0,1,.45,1,1Z" />
      ),
    },
    {
      id: 7,
      title: "Works with your page builder",
      description:
        "Native blocks for Elementor, Gutenberg, Divi, Beaver, Bricks, and Beaver Builder. Drop a gallery into any layout without fighting compatibility issues.",
      path: (
        <path d="M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h7c.55,0,1-.45,1-1s-.45-1-1-1H5c-1.65,0-3-1.35-3-3V9H22v5c0,.55,.45,1,1,1s1-.45,1-1V7c0-2.76-2.24-5-5-5ZM2,7c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3H2Zm14.41,5.17c-.76-.76-1.76-1.17-2.83-1.17h-1.59c-.55,0-1,.45-1,1v1.59c0,1.07,.42,2.07,1.17,2.83l6.71,6.71c.57,.57,1.32,.88,2.12,.88s1.55-.31,2.12-.88,.88-1.32,.88-2.12-.31-1.55-.88-2.12l-6.71-6.71Zm5.29,9.54c-.38,.38-1.04,.38-1.41,0l-6.71-6.71c-.38-.38-.59-.88-.59-1.41v-.59h.59c.53,0,1.04,.21,1.41,.59l6.71,6.71c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71Z" />
      ),
    },
    {
      id: 8,
      title: "Dynamic Galleries From Posts",
      description:
        "Create a gallery that automatically updates every time you publish a new post — ideal for portfolios and blogs that need to stay current without manual maintenance.",
      path: (
        <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z" />
      ),
    },
    {
      id: 9,
      title: "A user-friendly interface",
      description:
        "The plugin’s UX/UI design closely aligns with WordPress, making it incredibly intuitive and easy to use. Enjoy a user-friendly dashboard within the WordPress admin interface.",
      path: (
        <path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm14.122,9.879c-1.134-1.134-3.11-1.134-4.243,0l-7.879,7.878v4.243h4.243l7.878-7.878c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-7.292,7.293h-1.415v-1.415l7.293-7.292c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Zm-9.778,1.293H5c-1.654,0-3,1.346-3,3v5H0v-5c0-2.757,2.243-5,5-5H13c.289,0,.568,.038,.844,.085l-1.915,1.915Z" />
      ),
    },
  ],
};
export const featuresData2 = {
  id: "benefits",
  title: "Built for Real WordPress Workflows",
  items: [
    {
      id: 1,
      title: "Photography Portfolios",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Masonry layouts that respect portrait and landscape mixes
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Lightbox with captions for full-resolution viewing
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            AI alt text turns every image into a discoverable search result
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Mobile-first design for the majority of portfolio traffic
          </div>
        </div>
      ),
      path: (
        <>
          <path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z" />
          <path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z" />
        </>
      ),
    },

    {
      id: 2,
      title: "WooCommerce Product Pages",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Zoom and lightbox for detailed product inspection
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Faster load times protect conversion-critical product pages
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            AI captions add searchable product detail automatically
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Works seamlessly with product variation images
          </div>
        </div>
      ),
      path: (
        <>
          <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
          <circle cx="7" cy="22" r="2" />
          <circle cx="17" cy="22" r="2" />
        </>
      ),
    },
    {
      id: 3,
      title: "Freelance & Agency Client Sites",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Set default gallery settings once, reuse on every client project
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Works identically across Bricks, Elementor, and Divi builds
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Clients get SEO-optimised images without extra billable hours
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            One plugin license covers gallery, SEO, and performance needs
          </div>
        </div>
      ),
      path: (
        <path d="M22,15.184V8a5.006,5.006,0,0,0-5-5H7A5.006,5.006,0,0,0,2,8v7.184A2.993,2.993,0,0,0,3,21H21a2.993,2.993,0,0,0,1-5.816ZM7,5H17a3,3,0,0,1,3,3v7H15.849a2,2,0,0,0-1.528.708L14.074,16H9.925l-.246-.292A2,2,0,0,0,8.151,15H4V8A3,3,0,0,1,7,5ZM21,19H3a1,1,0,0,1,0-2H8.152l.246.292A2,2,0,0,0,9.925,18h4.149a2,2,0,0,0,1.528-.708L15.849,17H21a1,1,0,0,1,0,2Z" />
      ),
    },
    {
      id: 4,
      title: "Blogs and Content Sites",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Dynamic galleries that auto-update from new posts
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            AI alt text improves Google Images discoverability
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Lightweight footprint keeps page speed scores high
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Works inside any Gutenberg-based content workflow
          </div>
        </div>
      ),
      path: (
        <path d="m23.005,19l-.375-.002h-.011c-.998,0-1.994-.121-2.961-.36l-.901-.224c-1.125-.278-2.284-.419-3.443-.419h-.013l-4.66.005h-.003c-.8,0-1.494-.535-1.614-1.245-.07-.415.024-.826.267-1.158.23-.316.565-.526.947-.597h5.763c.552,0,1-.447,1-1s-.448-1-1-1h-1.002l4.932-5.487,2.747,1.211c.623.275,1.323-.181,1.323-.862,0-.368-.214-.703-.549-.856l-2.18-1.002c1.009-1.2.962-2.991-.166-4.12-1.192-1.192-3.131-1.192-4.368.047l-1.591,1.812-7.189,2.8c-1.61.627-3.03,1.661-4.122,3L.513,13.618c-.75.937-.669,2.289.186,3.131.005.005.011.004.016.008.183.201.44.332.734.332.552,0,1-.448,1-1,0-.307-.147-.572-.365-.756.006-.003.019-.009.018-.01-.125-.123-.137-.32-.039-.443l3.695-4.532c.638-.782,1.462-1.391,2.398-1.77l4.259-1.726L3.242,17.299c-.801.913-1.242,2.085-1.242,3.299v1.402c0,.553.448,1,1,1h1.054c1.474,0,2.865-.646,3.816-1.77l1.305-1.542c.452.194.944.311,1.461.311h.006l4.66-.005c1.012,0,2.002.12,2.973.36l.901.224c1.125.278,2.283.419,3.436.419h.013l.369.002h.005c.55,0,.997-.444,1-.995.003-.552-.442-1.002-.995-1.005Zm-4.81-15.702c.412-.412,1.083-.412,1.495,0s.412,1.083-.037,1.534l-7.345,8.168s-2.246.003-2.293.01c-.152.022-.296.068-.442.109L18.195,3.298ZM6.344,19.938c-.57.675-1.405,1.062-2.29,1.062h-.054v-.402c0-.729.265-1.432.746-1.979l2.306-2.626c-.051.36-.063.727,0,1.097.083.494.289.944.568,1.343l-1.275,1.507Z" />
      ),
    },
    {
      id: 5,
      title: "Marketing Agencies",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Build case study and portfolio galleries for client presentations
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Consistent visual quality across every campaign asset gallery
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            AI-generated metadata speeds up campaign page production
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Manage multiple client sites under one plugin workflow
          </div>
        </div>
      ),
      path: (
        <path d="m4 13h3v2h-3zm5 2h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-5-12h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm15-3v16h-24v-21a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3zm-10-5a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v19h12zm8 5a1 1 0 0 0 -1-1h-5v15h6zm-4 7h2v-2h-2zm0 4h2v-2h-2zm0-8h2v-2h-2z" />
      ),
    },
    {
      id: 6,
      title: "Creative & Design Portfolios",
      description: (
        <div className="feature-box__list">
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Justified and masonry layouts built for visual-first presentation
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Video support sits natively alongside photo galleries
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Hover caption overlays add context without cluttering the grid
          </div>
          <div className="feature-box__item">
            <span className="feature-box__check" aria-hidden="true">
              <CheckIcon />
            </span>
            Fast load times keep visual-heavy portfolios performant
          </div>
        </div>
      ),
      path: (
        <path d="m23.1.9a3.139 3.139 0 0 0 -4.33 0l-11.207 11.2a5.548 5.548 0 0 0 -1.058-.1 5.457 5.457 0 0 0 -3.885 1.609c-1.352 1.353-2.306 4.983-2.589 6.954a3 3 0 0 0 2.969 3.437 3.1 3.1 0 0 0 .439-.031c1.971-.283 5.6-1.237 6.954-2.589a5.494 5.494 0 0 0 1.5-4.941l11.207-11.209a3.068 3.068 0 0 0 0-4.33zm-14.123 19.066c-.725.725-3.5 1.689-5.824 2.023a1.015 1.015 0 0 1 -.859-.283 1 1 0 0 1 -.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 0 1 4.943 4.943zm12.711-16.15-10.621 10.622a5.378 5.378 0 0 0 -1.5-1.508l10.617-10.618a1.086 1.086 0 0 1 1.5 0 1.062 1.062 0 0 1 .004 1.504z" />
      ),
    },
  ],
};
