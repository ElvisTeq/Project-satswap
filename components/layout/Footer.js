import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.row}>
          {/* {Col1} */}
          <div className={classes.col}>
            <h4>About Us</h4>
            <ul className={classes.list}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          {/* {Col2} */}
          <div className={classes.col}>
            <h4>Contact Us</h4>
            <ul className={classes.list}>
              <li>e-mail</li>
              <li>number</li>
            </ul>
          </div>
          {/* {Col3} */}
          <div className={classes.col}>
            <h4>Media</h4>
            <ul className={classes.list}>
              <li>Twitter</li>
              <li>FaceBook</li>
              <li>Instagram</li>
            </ul>
          </div>
          {/* {Col4} */}
          <div className={classes.col}>
            <h4>More Stuff</h4>
            <ul className={classes.list}>
              <li>More things</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <p className={classes.small}>
            &copy;{new Date().getFullYear()} Satswap | All right reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
