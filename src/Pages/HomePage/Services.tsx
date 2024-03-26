import { ServicesCard } from "../../Components/ServicesCard";
import classes from "./Services.module.scss";
function Services() {
  return (
    <div className={classes.container}>
      <ServicesCard
        imagePath="./images/drvo2.png"
        isImageRight={false}
        cardTitle="Visinski radovi"
        cardSubtitle=""
        cardText="Orezivanje i sečenje grana i drveća"
      />

      <ServicesCard
        imagePath="./images/golub.png"
        isImageRight={false}
        cardTitle="Efikasna Zaštita"
        cardSubtitle=""
        cardText="Odbrana od Golubova pomoću Iglica i Mreža"
      />
       <ServicesCard
        imagePath="./images/fasada.png"
        isImageRight={false}
        cardTitle="Osvežite Vaš Prostor"
        cardSubtitle=""
        cardText="Profesionalno Farbanje i Krečenje Fasada"
      />
       <ServicesCard
        imagePath="./images/nepristupacno.png"
        isImageRight={false}
        cardTitle="Specijalizovano Čišćenje"
        cardSubtitle=""
        cardText="Rešenja za Nepristupačne Površine"
      />
    </div>
  );
}

export default Services;
