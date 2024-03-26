import classes from "./ServicesCard.module.scss";

interface Props {
  imagePath: string;
  isImageRight: boolean;
  cardTitle: string;
  cardSubtitle: string;
  cardText: string;
}

export const ServicesCard = ({
  imagePath,
  isImageRight,
  cardTitle,
  cardSubtitle,
  cardText,
}: Props) => {
  return (
    <div className={`${classes.card} ${classes.container_animated} `}>
      <div className={classes.effects}>

      <h1>{cardTitle}</h1>
      <img src={imagePath} alt="image" />

      <h2>{cardSubtitle}</h2>
      <p>{cardText}</p>
      </div>
    </div>
  );
};
