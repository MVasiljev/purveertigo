import classes from "./PositionCard.module.scss";
import {positionProps} from "./OpenPositions"




function PositionCard(props: positionProps) {
    console.log(props.show_top);
    let classn = props.show_top?`${classes.alt}`: ``;
  return (
    <div className={classes.card}>
      <img src={props.img_url} alt="work" className ={classn}/>

      <h2>Job</h2>
      <h1>{props.title}</h1>

      <p>{props.text}</p>
    </div>
  );
}

export default PositionCard;
