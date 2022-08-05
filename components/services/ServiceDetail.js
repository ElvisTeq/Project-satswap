import { Fragment } from "react";
import classes from "./ServiceDetail.module.css";

const ServiceDetails = (props) => {
  return (
    <Fragment>
      <div className={classes.box}>
        <div className={classes.title}>
          <h1>a Title</h1>
          <p>some description</p>
        </div>
        <div className={classes.img}>image here</div>
      </div>
    </Fragment>
  );
};

export default ServiceDetails;
