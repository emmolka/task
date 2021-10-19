import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavigationDrawer from "../navigationDrawer";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sensyne Health Front End Test
          </Typography>
        </Toolbar>
      </AppBar>
      <NavigationDrawer open={open} toggleDrawer={toggleDrawer} />
    </Fragment>
  );
};

export default Header;
