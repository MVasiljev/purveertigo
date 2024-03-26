import { Carousel } from "react-bootstrap";
import teladoc from "../Images/HomePage/Portfolio/teladoc.jpg";
import vtg from "../Images/HomePage/Portfolio/vtg.jpg";
import grape from "../Images/HomePage/Portfolio/grapeid.jpg";
import partnered from "../Images/HomePage/Portfolio/partnered.jpg";
import classes from "./Carousel.module.scss";
function PortfolioCarousel() {
  return (
    <Carousel className={classes.carousel} variant="dark">
      <Carousel.Item className={classes.item}>
        <a href="https://www.teladochealth.com/">
          <img className="d-block w-100" src={teladoc} alt="First slide" />
        </a>
      </Carousel.Item>
      
        <Carousel.Item className={classes.item}>
        <a href="https://www.virtualteamgame.com/">
          <img className="d-block w-100" src={vtg} alt="Second slide" />
          </a>
        </Carousel.Item>
      
      <Carousel.Item className={classes.item}>
        <a href="https://grapeid.com/home">
          <img className="d-block w-100" src={grape} alt="Third slide" />
        </a>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <a href="https://partnered.com/">
          <img className="d-block w-100" src={partnered} alt="Partnered" />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioCarousel;
