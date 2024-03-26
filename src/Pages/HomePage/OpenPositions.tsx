import PositionCard from "./PositionCard";
import classes from "./Careers.module.scss";


const POSITIONS = [
  {
    title: "Medior/Senior ReactJS developer",
    text: "We are looking for medior/senior React developers. Must be sober and of good appearance. Bon ton (not obligatory). Salary is a secondary object.",
    img_url: "./images/cat-gloves.jpg",
    
  },
  {
    title: "Medior/Senior NodeJS developer",
    text: "Looking for a NodeJS development position? Join our lively team of indivudals of questionable morals but good spirit.",
    img_url: "./images/two-dancers.jpg",
  },
  {
    title: "Senior Golang developer",
    text: "Looking for Golang developer. Women preferred. Unmarried. Must be sober at least 50% of working hours.",
    img_url: "./images/trans.jpg",
    
  },
  {
    title: "Medior/Senior iOS developer",
    text: "Love iOS, hazardous journeys, bitter cold, constant danger and months of darkness? Join our team of enthusiastic developers. Honor and recognition in case of success.",
    img_url: "./images/kicking.jpg",
    
  },
  {
    title: "Medior/Senior Android developer",
    text: "Do you love Android development and days filed with joy and laughter? Send us your CV and join are team of Android enthusiasts. Sobriety mandatory.",
    img_url: "./images/grandville.jpg",
    show_top:true,
  },
  {
    title: "Medior/Senior devOps engineer",
    text: "We are looking for devOps engineers. Dancing skills are a plus.",
    img_url: "./images/balls-planets.jpg",
  },
];

export interface positionProps {
  title: string;
  text: string;
  img_url: string;
  show_top?:boolean;
}

function OpenPositions() {
  return (
    <div className={classes.container}>
      {POSITIONS.map((position: positionProps) => (
        <PositionCard
          text={position.text}
          img_url={position.img_url}
          title={position.title} show_top={position.show_top}
        />
      ))}
    </div>
  );
}

export default OpenPositions;
