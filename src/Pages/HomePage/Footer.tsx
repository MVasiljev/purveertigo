// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footer_left}>
        <div className={classes.logo}>
          {/* <img src={require("../../Images/HomePage/Header/image.png")} alt="" /> */}
          <div>
            <p>PurVertigo</p>
            {/* <p>RADOVI</p> */}
          </div>
        </div>
        <div className={classes.contact_info}>
          <p>Novi Sad, Serbia</p>
          <p>Telefon: +381637246866</p>
          <p>Email: sovas799@gmail.com</p>
        </div>
      </div>
      <div className={classes.social_icons}>
        {/* <h2 className={classes.footer_heading}>Find us on social networks</h2> */}
        <div className={classes.icons}>
          {/*<FontAwesomeIcon className="social_icons" icon={brands("viber")} />*/}
          {/*<FontAwesomeIcon className="social_icons" icon={brands("linkedin")} />*/}
          {/*<FontAwesomeIcon className="social_icons" icon={brands("skype")} />*/}
          {/*<FontAwesomeIcon*/}
          {/*  className="social_icons"*/}
          {/*  icon={brands("facebook-square")}*/}
          {/*/>*/}
          {/*<FontAwesomeIcon className="social_icons" icon={brands("telegram")} />*/}
          {/*<FontAwesomeIcon*/}
          {/*  className="social_icons"*/}
          {/*  icon={brands("twitter-square")}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};
