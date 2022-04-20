import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  CssBaseline,
  IconButton,
} from "@material-ui/core";
import Images from "@/constant";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar(props) {
  const classes = useStyle();
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <nav className={classes.root}>
        <CssBaseline />
        <AppBar
          position={"fixed"}
          className={classes.appBar}
          // style={{
          //   background: "white",
          // }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              <a onClick={() => goTo("/")}>
                <img
                  alt="Entrepot"
                  src={Images.dnftLogo}
                  style={{ height: 64, cursor: "pointer" }}
                />
              </a>
            </Typography>
            <div className={classes.grow} />
            <Button onClick={() => goTo("/")} className={classes.button}>
              Home
            </Button>
            <Button onClick={() => goTo("/market")} className={classes.button}>
              market
            </Button>
            
          </Toolbar>
        </AppBar>
      </nav>
    </>
  );
}
const drawerWidth = 200;
const useStyle = makeStyles((theme) => ({

  root: {
    display: "flex",
    width: drawerWidth,
    minHeight: '100vh',
    background: 'black',
    [theme.breakpoints.down('sm')] : {
      // display: "none",
    }

  },
  appBar: {
    width: drawerWidth,

  },

  hidden: {
    color: "000",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  button: {
    marginLeft: 30,
    fontSize: "1.2em",
    fontWeight: "bold",
    borderBottom: "3px solid transparent",
    borderRadius: 0,
    height: 73,
    "&:hover, &.selected": {
      color: "#00d092 !important",
      backgroundColor: "#fff",
      borderBottom: "3px solid #00d092 !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBar: {
    
  }
}));
