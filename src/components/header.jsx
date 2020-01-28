import React from "react";
import "./compStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className="header-wrapper">
      <div className={classes.root}>
        <div className="upper-header-wrapper">
          <div className="upper-header-button">
            <Button color="inherit" id="upper-header-button">
              {" "}
              <div className="phone-icon">
                <PhoneIcon
                  style={{ fontSize: 16, paddingTop: 10, color: "red" }}
                />
              </div>
              0302-7249009
            </Button>
          </div>
          <div className="upper-header-button">
            <h3>|</h3>
          </div>
          <div className="upper-header-button">
            <Button color="inherit" id="upper-header-button">
              {" "}
              <div className="phone-icon">
                <DraftsIcon
                  style={{
                    fontSize: "medium",
                    paddingTop: 10,
                    color: "red"
                  }}
                />
              </div>
              erainstitute512@gmail.com
            </Button>
          </div>
        </div>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Era Institute
            </Typography>
            <Button color="inherit"></Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
