import { url } from "inspector";
import classes from "./About.module.scss";
import bicycle from "../../Images/HomePage/sturdy_young.jpg";
import logo from "../../Images/HomePage/Header/nve_logo.jpeg";

function About() {
  return (
    <div className={classes.about}>
      <h1>Who are NiViEm Interactive?</h1>

      <div className={classes.images}>
        <img src={bicycle} alt="Great team" />
        <div className={classes.text}>
          <p>
          We are a team of dedicated professionals who love their job and prioritize clean code, architecture, and best practices - 
          therefore, it’s easy for us to bring applications to life within a tight schedule without sacrificing the quality. 

            </p>
            
        </div>
      </div>
    </div>
  );
}

export default About;
