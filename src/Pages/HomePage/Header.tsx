import classes from "./Header.module.scss";
import {scroller} from "react-scroll";



export const Header = () => {

  function scrollToSection ()  {
    scroller.scrollTo("services", {
      duration: 100,
      delay: 0,
      smooth: "easeInQuart",
    });
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          {/* <img src={require("../../Images/HomePage/Header/header1.png")} alt="" /> */}
          <div>
            <p>PurVertigo</p>
            {/* <p>INTERACTIVE</p> */}
          </div>
        </div>

        <div className={classes.nav}>
          <nav>
            <ul>
              <li>
                <a href="#">POČETNA</a>
              </li>
              <li>
                <a href="#services">USLUGE</a>
              </li>
             
              <li>
                <a href="mailto:sovas799@gmail.com">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`${classes.heading}`}>
        <p className={classes.headline}>Operacije na Nepristupačnim Lokacijama</p>
        
        <p className={classes.subtitle}> Kreiranje Efikasnih Rešenja za Sečenje Drva i Visinske Radove</p>

        <button className={classes.cta} onClick={scrollToSection}>
          <span>Naučite više </span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
};
