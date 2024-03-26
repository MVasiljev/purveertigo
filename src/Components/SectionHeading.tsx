import classes from "./SectionHeading.module.scss";
//import deco from "./../Images/HomePage/horizontally-centered-vertical-decoration.png";
import deco from "./../Images/HomePage/artdeco.png";

interface SectionHeadingProps {
  title: string;
  id: string;
  showOnMobile: boolean;
}

function SectionHeading(props: SectionHeadingProps) {
  let classn = props.showOnMobile
    ? `${classes.container} `
    : `${classes.container} ${classes.hide_mobile}`;
  return (
    
      <div className={classn}>
        <h2 className={classes.section_heading2} id={props.id}>
          {props.title}
        </h2>
        <div className={classes.divider}>
          <img src={deco} alt="decoration" />
        </div>
      </div>
  );
}

export default SectionHeading;
