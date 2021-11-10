import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
 logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Thrivent
        </Typography>
          <div className={classes.navlinks}>
            <NavLink to="/" className={classes.link}>
              Accounts
            </NavLink>
            <NavLink to="/move-money" className={classes.link}>
              Move Money
            </NavLink>
            <NavLink to="/explore-options" className={classes.link}>
              Explore Options
            </NavLink>
            <NavLink to="/help-support" className={classes.link}>
              Help & Support
            </NavLink>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;