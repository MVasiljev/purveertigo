/* eslint-disable jsx-a11y/alt-text */
import classes from "./VintageFrame.module.scss";
import lads from "./../Images/HomePage/sturdy_young.jpg";
import bicycle from "./../Images/HomePage/sturdy_young-removebg.png";
import corner_deco from "./../Images/corner-decoration.jpg"
import top_deco from "./../Images/top-deco.png"
function VintageFrame() {
  return (
    <div
      className={`${classes.body} ${classes.dark_background} ${classes.body2}`}
    >
      <div className={classes.outer_border}>
        <div className={classes.mid_border}>
          <div className={classes.inner_border}>
            <img
              className={`${classes.corner_decoration} ${classes.corner_left_top}`}
              src={corner_deco}
            ></img>
            <img
              className={`${classes.corner_decoration} ${classes.corner_right_top}`}
              src={corner_deco}
            ></img>
            <img
              className={`${classes.corner_decoration} ${classes.corner_right_bottom}`}
              src={corner_deco}
            ></img>
            <img
              className={`${classes.corner_decoration} ${classes.corner_left_bottom}`}
              src={corner_deco}
            ></img>
            <img
              className={`${classes.vertical_decoration} ${classes.top}`}
              src={top_deco}
            ></img>
            <img
              className={` ${classes.vertical_decoration} ${classes.bottom}`}
              src={top_deco}
            ></img>

            <div className={classes.container}>
              <div className={classes.row}>
                <div className={classes.text_center}>
                  <h1
                    className={`${classes.text_uppercase} ${classes.white_text} ${classes.countach}`}
                  >
                    Ko smo mi?
                  </h1>
                  <div className={classes.content}>
                    <img src={bicycle} className={classes.logo} />
                    <div className={classes.p_text}>
                      <p className={`${classes.lead} ${classes.skintone_text}`}>
                        <span
                          className={`${classes.name} ${classes.skintone_text} ${classes.countach}`}
                        >
                          Mi smo tim posvećenih profesionalaca koji su strastveni prema svom poslu i stavljaju akcenat na detalje, sigurnost i profesionalnost. Posvećeni smo primeni najboljih praksi i tehnika, što nam omogućava da efikasno i kvalitetno realizujemo projekte čišćenja, visinskih radova i sličnih usluga, čak i u okviru najstrožijih rokova. Naša predanost znači da bez kompromisa ostvarujemo visok standard usluga.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VintageFrame;
