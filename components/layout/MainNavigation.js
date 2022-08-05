import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Satswap</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Whatever</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
