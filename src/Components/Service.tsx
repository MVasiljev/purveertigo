import classes from "./Service.module.scss";
import Card from "./ui/Card";

interface cardProps {
  title: string;
  image_url: string;
  description: string;
  subtitle:string;
}

function Service(props: cardProps) {
  return (
    <Card >
      <li className={classes.item}>
      <h3>{props.title}</h3>
        <div className={classes.image}>
          <img src={props.image_url} alt={props.title} />
        </div>
        <div className={classes.content}>

          <p>{props.description}</p>
        </div>
        
      </li>
      </Card>
    
  );
}

export default Service;
