import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.main}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.title}>About Us</div>
          <a href="#" className={classes.link}>
            1
          </a>
          <a href="#" className={classes.link}>
            2
          </a>
          <a href="#" className={classes.link}>
            3
          </a>
        </div>
        <div className={classes.col}>
          <div className={classes.title}>Services</div>
          <a href="#" className={classes.link}>
            1
          </a>
          <a href="#" className={classes.link}>
            2
          </a>
          <a href="#" className={classes.link}>
            3
          </a>
        </div>
        <div className={classes.col}>
          <div className={classes.title}>Contact Us</div>
          <a href="#" className={classes.link}>
            1
          </a>
          <a href="#" className={classes.link}>
            2
          </a>
          <a href="#" className={classes.link}>
            3
          </a>
        </div>
        <div className={classes.col}>
          <div className={classes.title}>Social</div>
          <a href="#" className={classes.link}>
            Facebook
          </a>
          <a href="#" className={classes.link}>
            Instagram
          </a>
          <a href="#" className={classes.link}>
            Twitter
          </a>
        </div>
      </div>
      <hr />
      <div className={classes.row}>
        <p className={classes.small}>
          &copy;{new Date().getFullYear()} Satswap | All right reserved | Terms
          Of Service | Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
