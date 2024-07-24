import "./Demo.css";
import { Container } from "react-bootstrap";
const demoData = ["Mosaic", "Thumbnails", "Cube"];
import prewImg from "../../assets/imgs/choose.webp";
const Demo: React.FC = () => {
  return (
    <section id="demo">
      <Container>
        <div className="demo_columns_content">
          <h1>Demo</h1>
          <img width={500} height={400} src={prewImg} />
          <div className="demo_buttons_rows">
            {demoData.map((val) => {
              return <div className="download-btn">{val}</div>;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demo;
