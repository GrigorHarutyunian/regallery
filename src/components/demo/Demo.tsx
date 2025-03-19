import { useState, useRef, useEffect } from "react";
import { useDemoContext } from "../../contexts/DemoContext";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";
import { motion } from "framer-motion";
const Demo: React.FC = () => {
  const { selecteIdFromMenu } = useDemoContext();
  const [selectedIdView, setSelectedIdView] = useState<number>(420);

  const sectionRef = useRef<HTMLOptionElement | null>(null);
  const scriptsAddedRef = useRef<boolean>(false);
  const selectedViewDesrciption = dataDemo.find(
    (val) => val.idView === selectedIdView
  )?.description;
  const selectedValueDemoPath = dataDemo.find(
    (val) => val.idView === selectedIdView
  )?.demoPath;

  const handleButtonClick = (idView: number) => {
    if (idView === selectedIdView) return;

    setSelectedIdView(idView);
  };

  useEffect(() => {
    if (!selecteIdFromMenu) return;

    setSelectedIdView(selecteIdFromMenu);
  }, [selecteIdFromMenu]);

  // useEffect(() => {
  //   const addScriptsToBody = () => {
  //     const script1 = document.createElement("script");
  //     script1.id = "reacg_thumbnails-js-extra";
  //     script1.innerHTML = `
  //       var reacg_global = {
  //         rest_root: "https://regallery.team/core/wp-json/reacg/v1/",
  //         rest_nonce: "1c55173374",
  //         plugin_url: "https://regallery.team/core/wp-content/plugins/regallery",
  //         text: { load_more: "Load more", no_data: "There is not data." }
  //       };
  //     `;
  //     document.body.appendChild(script1);

  //     const script2 = document.createElement("script");
  //     script2.id = "reacg_thumbnails-js";
  //     script2.src =
  //       "https://regallery.team/core/wp-content/plugins/regallery/assets/js/wp-gallery.js?ver=1.10.0";
  //     script2.async = true;
  //     document.body.appendChild(script2);

  //     scriptsAddedRef.current = true;
  //   };

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (!scriptsAddedRef.current) {
  //             addScriptsToBody();
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const handleInitialInteraction = () => {
      if (!scriptsAddedRef.current) {
        // Add your scripts on the first interaction
        const addScriptsToBody = () => {
          const script1 = document.createElement("script");
          script1.id = "reacg_thumbnails-js-extra";
          script1.innerHTML = `
            var reacg_global = {
              rest_root: "https://regallery.team/core/wp-json/reacg/v1/",
              rest_nonce: "1c55173374",
              plugin_url: "https://regallery.team/core/wp-content/plugins/regallery",
              text: { load_more: "Load more", no_data: "There is not data." }
            };
          `;
          document.body.appendChild(script1);

          const script2 = document.createElement("script");
          script2.id = "reacg_thumbnails-js";
          script2.src =
            "https://regallery.team/core/wp-content/plugins/regallery/assets/js/wp-gallery.js?ver=1.10.0";
          script2.async = true;
          document.body.appendChild(script2);

          scriptsAddedRef.current = true;
        };

        addScriptsToBody();
      }

      // Remove all event listeners after the first interaction
      eventTypes.forEach((event) => {
        window.removeEventListener(event, handleInitialInteraction);
      });
    };

    const eventTypes = [
      "scroll",
      "mousemove",
      "click",
      "keydown",
      "wheel",
      "touchmove",
      "touchend",
    ];

    // Attach event listeners
    eventTypes.forEach((event) => {
      window.addEventListener(event, handleInitialInteraction, {
        passive: true,
      });
    });

    // Cleanup function to remove the listeners when the component unmounts
    return () => {
      eventTypes.forEach((event) => {
        window.removeEventListener(event, handleInitialInteraction);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="demo">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h1 className="section-text__title-centered ">Gallery views</h1>
            <div className="demo_buttons_rows ">
              {dataDemo.map((val, index) => {
                return (
                  <button
                    onClick={() => handleButtonClick(val.idView)}
                    className={`demo_button${
                      selectedIdView === val.idView
                        ? " demo_selectedButton"
                        : ""
                    }`}
                    key={index}
                  >
                    <svg
                      height={70}
                      width={70}
                      id="Outline"
                      viewBox="0 0 24 24"
                    >
                      {val.path}
                    </svg>
                    <span>{val.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="demo_description">
              <motion.p>
                <span>{selectedViewDesrciption}</span>
                <a
                  href={selectedValueDemoPath}
                  target="_blank"
                  title="View more"
                  aria-label="View more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="40"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <g fill="#292d32">
                      <path
                        fill="#2540cc"
                        d="m12 22.75c-5.93 0-10.75-4.82-10.75-10.75s4.82-10.75 10.75-10.75 10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
                      />
                      <path
                        fill="#2540cc"
                        d="m10.7397 16.2802c-.19 0-.38-.07-.53-.22-.29001-.29-.29001-.77 0-1.06l3-3-3-3.00004c-.29001-.29-.29001-.77 0-1.06.29-.29.77-.29 1.06 0l3.53 3.53004c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
                      />
                    </g>
                  </svg>
                </a>
              </motion.p>
            </div>
            <div className={`demo_live_conteiner`}>
              {dataDemo.map((val) => (
                <div
                  key={val.idView} // Ensure each div has a unique key
                  id={`reacg-root${val.idView}`}
                  className={`reacg-gallery reacg-preview ${
                    selectedIdView === val.idView ? "active" : "hidden"
                  }`} // Add "active" class to the selected div
                  data-options-section="0"
                  data-plugin-version="1.10.0"
                  data-gallery-timestamp=""
                  data-options-timestamp=""
                  data-gallery-id={`${val.idView}`}
                ></div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
