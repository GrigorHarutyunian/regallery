import React from "react";
import "./PageBuilder.css";
import { Container, Row } from "react-bootstrap";
import SectionDTO from "../../types/SectionDTO";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

const PageBuilder: React.FC<SectionDTO> = ({ data }) => {
  return (
    <section id="page_builder" className="black-section">
      <Container>
        <Row>
          <div className="pagebuilder_content" id="builder">
            <h2 className="section-text__title-centered">{data.title}</h2>
            <p className="pagebuilder_description">{data.text}</p>
            <div className="buttons-container pagebuilder_buttons">
              <a href="#pricing" aria-label="Get started">
                <DownloadBtn className="download-btn" />
              </a>
              {data.additionalButtonLink && (
                <a
                  className="download-btn watch_video"
                  href={data.additionalButtonLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Landing Demo"
                >
                  Landing Demo
                </a>
              )}
            </div>
            <div className="pagebuilder_carousel">
              <div className="pagebuilder_row pagebuilder_row--right">
                <div className="pagebuilder_track">
                  {[...(data?.itemsTop || []), ...(data?.itemsTop || [])].map(
                    (item, index) => (
                      <article
                        className="pagebuilder_thumb"
                        key={`${item.title}-${index}`}
                      >
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <span className="pagebuilder_thumb_title">
                          {item.title}
                        </span>
                      </article>
                    ),
                  )}
                </div>
              </div>

              <div className="pagebuilder_row pagebuilder_row--left">
                <div className="pagebuilder_track">
                  {[
                    ...(data?.itemsBottom || []),
                    ...(data?.itemsBottom || []),
                  ].map((item, index) => (
                    <article
                      className="pagebuilder_thumb"
                      key={`${item.title}-${index}`}
                    >
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <span className="pagebuilder_thumb_title">
                        {item.title}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PageBuilder;
