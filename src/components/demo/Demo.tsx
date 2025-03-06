import { useState, useRef, useEffect } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";

const Demo: React.FC = () => {
  const [selectedIdView, setSelectedIdView] = useState<number>(420);
  const [isHeightReduced, setIsHeightReduced] = useState<boolean>(false);
  const [selectedIdForCLick, setSelectedIdForCLick] = useState<number>(420);
  const sectionRef = useRef<HTMLOptionElement | null>(null);
  const scriptsAddedRef = useRef<boolean>(false);

  const handleButtonClick = (idView: number) => {
    if (idView === selectedIdView) return;
    setIsHeightReduced(true);
    setSelectedIdForCLick(idView);
    setTimeout(() => {
      setIsHeightReduced(false);
      setSelectedIdView(idView);

      const button = document.getElementById("reacg-loadApp");
      if (button) {
        button.setAttribute("data-id", "reacg-root" + idView);
        button.click();
      }
    }, 1000);
  };

  useEffect(() => {
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!scriptsAddedRef.current) {
              addScriptsToBody();
              console.log("adding");
            } else {
              console.log("already have");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className={isHeightReduced ? "reduced-height" : "not-reduced-height"}
    >
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h1 className="section-text__title-centered ">Demo</h1>
            <div className="demo_buttons_rows ">
              {dataDemo.map((val, index) => {
                return (
                  <button
                    onClick={() => handleButtonClick(val.idView)}
                    className={`demo_button${
                      selectedIdForCLick === val.idView
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
