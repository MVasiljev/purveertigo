import React, { useState } from "react";

import classes from "./Careers.module.scss";
import oil from "./../../Images/HomePage/Careers/oil.jpg";
import head from "./../../Images/HomePage/Careers/talking-head.jpg";
export const Careers = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.card}>
          <h1>Čišćenje nepristupačnih površina</h1>

          {/* <img src={oil} alt="work" /> */}

          <ul>
            <li>Otkrijte vrhunsko rešenje za čišćenje nepristupačnih površina koje zahtevaju posebnu pažnju i opremu.</li>
            <li>Naš tim stručnjaka koristi najnovije tehnike i alate za sigurno i efikasno uklanjanje nečistoća sa svih teško dostupnih mesta.</li>
            <li>Bez obzira da li je reč o visokim zgradama, uskim prostorima ili specifičnim materijalima, naše usluge garantuju temeljno čišćenje uz poštovanje najviših standarda bezbednosti.</li>
            <li>Kontaktirajte nas i omogućite vašem prostoru da zablista čistoćom, bez obzira na izazove koje pružaju nepristupačne površine.</li>
         </ul>

        </div>

        <div className={classes.card}>
          <h1>Farbanje i krečenje fasada</h1>
          <ul>
            <li>Transformišite izgled Vašeg doma ili poslovnog prostora uz naše stručne usluge farbanja i krečenja fasada.</li>
            <li>Obezbedite dugotrajan i estetski privlačan eksterijer koji će odražavati Vaš jedinstveni stil i poboljšati opšti izgled vaše okoline.</li>
            <li>Sa modernim tehnikama i kvalitetnim materijalima, Vaša fasada neće samo zasijati novim sjajem, već će biti i zaštićena od vremenskih uslova.</li>
            <li>Kontaktirajte nas danas i dopustite nam da oživimo Vašu viziju.</li>
          </ul>

          {/* <img src={head} alt="talking head" /> */}
        </div>

        <div className={classes.card}>
          <h1>Visinski radovi</h1>
          <ul>
            <li>Pružanje profesionalnih usluga na visinama uz korišćenje specijalizovane opreme.</li>
            <li>Sigurno i efikasno izvođenje radova na teško dostupnim visinama, uključujući zgrade, tornjeve i drugu infrastrukturu.</li>
            <li>Obavljanje svih vrsta visinskih radova, uključujući inspekciju, čišćenje, farbanje i popravke.</li>
            <li>Stručno savetovanje i planiranje za sve vaše potrebe vezane za radove na visini.</li>
          </ul>


          {/* <img src={head} alt="talking head" /> */}
        </div>

        <div className={classes.card}>
          <h1>Zaštita od golubova</h1>

          {/* <img src={oil} alt="work" /> */}

          <ul>
            <li>Instalacija naprednih sistema za zaštitu od golubova i drugih ptica.</li>
            <li>Korišćenje sigurnih i humanih rešenja poput iglica i mreža za odvraćanje ptica.</li>
            <li>Zaštita vaše imovine od štete koju uzrokuju golubovi, uključujući fasade, balkone i prozore.</li>
            <li>Prilagođeni pristup svakom objektu za najefikasniju zaštitu.</li>
          </ul> 


        </div>

        
      </div>

      <div className={classes.apply_container}>
        {/* <p>Think you are not good enough?</p> */}
        {/*<button onClick={() => setShowModal(!showModal)} className="apply_btn">Apply and be sure</button>*/}
        {/* <p>Send us your CV to</p> */}
        {/* <p style={{ color: "#282c34", fontWeight: 400 }}>careers@niviem.com</p> */}
      </div>

      {/*<Modal show={showModal} handleClose={() => setShowModal(!showModal)}>*/}
      {/*    <p>Modal</p>*/}
      {/*</Modal>*/}
    </div>
  );
};
