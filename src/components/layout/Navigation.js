import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              My Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              New Quote
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <Button>Project Info</Button>
      </nav>
    </header>
  );
};

export default Navigation;
