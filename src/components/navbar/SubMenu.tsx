import { useEffect, useState, useRef, useMemo } from "react";
import { useDemoContext } from "../../contexts/DemoContext";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Navbar.css";
import ThumbnailsGeneralImg from "../../assets/imgs/views/menu_general_imgs/thumbnails.webp";
interface subItem {
  title: string;
  description: string;
  imgUrl: string;
  path: string;
}
const SubMenu = ({ title, items, version, onClick }: any) => {
  const { setSelecteIdFromMenu } = useDemoContext();
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const [hoveredElement, setHoveredElement] = useState<subItem>({
    title: "Thumbnails",
    description: `The Thumbnails template in Re Gallery allows you to show your images in a clean, organized grid of clickable preview images.
Ideal for portfolio sites, product galleries, and image-heavy blogs.`,
    imgUrl: ThumbnailsGeneralImg,
    path: "#thumbnails",
  });
  const [isDemoScrolling, setIsDemoScrolling] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const demoRef = useRef<HTMLDivElement | null>(null);

  const handleListScroll = () => {
    if (listRef.current) {
      const isAtBottom =
        listRef.current.scrollHeight ===
        listRef.current.scrollTop + listRef.current.clientHeight;

      if (isAtBottom && !isDemoScrolling) {
        setIsDemoScrolling(true);
      }
    }
  };

  const handleDemoScroll = (event: WheelEvent) => {
    if (demoRef.current && isDemoScrolling) {
      demoRef.current.scrollTop += event.deltaY;
      event.preventDefault();
    }
  };

  const handleBackToListScroll = () => {
    if (demoRef.current && isDemoScrolling) {
      if (demoRef.current.scrollTop === 0) {
        setIsDemoScrolling(false);
      }
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener("wheel", handleListScroll, {
        passive: true,
      });
    }

    if (isDemoScrolling) {
      document.addEventListener("wheel", handleDemoScroll, { passive: false });
      document.addEventListener("wheel", handleBackToListScroll, {
        passive: false,
      });
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("wheel", handleListScroll);
      }
      document.removeEventListener("wheel", handleDemoScroll);
      document.removeEventListener("wheel", handleBackToListScroll);
    };
  }, [isDemoScrolling]);

  const handleOpen = () => {
    setOpenSubMenu(true);
  };
  const handleClose = () => {
    setOpenSubMenu(false);
  };

  const handleToggle = () => {
    setOpenSubMenu(!openSubMenu);
  };
  const handleHoverElement = (item: subItem) => {
    setHoveredElement(item);
  };

  useEffect(() => {
    const navElement = document.querySelector(".nav-open");
    if (openSubMenu) {
      navElement?.classList.add("show-scroll");
    }
  }, [openSubMenu]);

  const hoverAnimation = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0 0 0 0)",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.1, 0, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.1, 0, 0.3, 1],
      },
    },
  };

  const splitItems = (items: any[]) => [
    [items[0], items[items.length - 1]],
    [items[1], items[3], items[5]],
    [items[2], items[4], items[6], items[7]],
  ];

  const itemGroups = useMemo(() => splitItems(items), [items]);
  const bannerHeight = (document.querySelector(".nav-banner") as HTMLElement)
    ?.offsetHeight;

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className="subMenu-nav-link"
    >
      <a
        href={"#gallery_views"}
        id="fade-button"
        onClick={handleToggle}
        className={"nav-link"}
      >
        <div className={"nav-link__text"}>
          {title}
          <svg
            className={`fi-rs-angle-small-down${
              openSubMenu ? " arrow-rotate" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill={"#fcfcfc"}
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </div>
        <div className={`nav-link__background ${openSubMenu ? "open" : ""}`} />
      </a>
      {
        <div
          className={`dropdown-menu ${openSubMenu ? "open" : ""}`}
          style={{
            maxHeight: `calc(100vh - ${bannerHeight}px - 80px)`,
          }}
        >
          <div
            className="dropdown-menu_child"
            style={{
              maxHeight: `calc(100vh -  ${bannerHeight}px - 80px)`,
            }}
          >
            {version !== "mobile" && (
              <div
                className="submenu_demo"
                ref={demoRef}
                style={{
                  maxHeight: `calc(100vh - ${bannerHeight}px - 80px)`,
                }}
              >
                <LazyLoadComponent>
                  {openSubMenu && (
                    <motion.div
                      key={hoveredElement.title}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={hoverAnimation}
                      className="submenu_demo_content"
                    >
                      <a href={hoveredElement.path} target="_blank">
                        <img
                          width={300}
                          height={221}
                          src={hoveredElement.imgUrl}
                          alt="aas"
                        />
                      </a>

                      <h3>{hoveredElement.title}</h3>
                      <p>{hoveredElement.description}</p>
                    </motion.div>
                  )}
                </LazyLoadComponent>
              </div>
            )}

            <div
              className="submenu_lists"
              ref={listRef}
              style={{
                maxHeight: `calc(100vh -  ${bannerHeight}px - 80px)`,
              }}
            >
              {itemGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="submenu_column">
                  {group.map((val: any, i: number) => (
                    <ul key={val.id || i}>
                      <li className="sub-menu__categori-name">
                        <svg
                          height={16}
                          width={20}
                          style={{ marginRight: "10px" }}
                          id="Outline"
                          viewBox="0 0 24 24"
                        >
                          {val.svgPath}
                        </svg>
                        <a
                          {...(version === "mobile"
                            ? {
                                onClick: () => {
                                  onClick();
                                  handleToggle();
                                  setSelecteIdFromMenu(val.idView);
                                },
                              }
                            : {
                                onMouseEnter: () =>
                                  handleHoverElement({
                                    title: val.title,
                                    description: val.description,
                                    imgUrl: val.imgUrl,
                                    path: val.path,
                                  }),
                                onClick: () => {
                                  handleToggle();
                                  setSelecteIdFromMenu(val.idView);
                                },
                              })}
                          href="#gallery_views"
                        >
                          {val.title}
                        </a>
                      </li>

                      {val.subItems.map((sutiItem: subItem, index: number) => (
                        <li
                          key={index}
                          {...(version !== "mobile" && {
                            onMouseEnter: () => handleHoverElement(sutiItem),
                          })}
                          className="sub-menu__item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Bold"
                            viewBox="0 0 24 24"
                            height={16}
                            width={20}
                          >
                            <path
                              fill="#ffffff"
                              d="M19.122,18.394l3.919-3.919a3.585,3.585,0,0,0,0-4.95L19.122,5.606A1.5,1.5,0,0,0,17,7.727l2.78,2.781-18.25.023a1.5,1.5,0,0,0-1.5,1.5v0a1.5,1.5,0,0,0,1.5,1.5l18.231-.023L17,16.273a1.5,1.5,0,0,0,2.121,2.121Z"
                            />
                          </svg>
                          <a href={sutiItem.path} target="_blank">
                            {sutiItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SubMenu;
