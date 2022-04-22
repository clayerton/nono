import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  CssBaseline,
  IconButton,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from "@material-ui/core";
import Images from "@/constant";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })
  const classes = useStyle();
  const theme = useTheme();
  const isMobel = useMediaQuery(theme.breakpoints.down('xs'))
  console.log(isMobel,'isMobelisMobel')
  const navigate = useNavigate();
  const [menuBar, setMenuBar] = useState(false)
  const goTo = (path) => {
    navigate(path);
  };
  const toggleNavBar = () => {
    setMenuBar(true)
  }
  return (
    <>
      <nav className={classes.grow}>
        <AppBar
          position={"fixed"}
          className={trigger ? null : classes.containerBorder}
      
          style={{
            background: "white",
          }}
        >
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              aria-label='open drawer'
              onClick={toggleNavBar}
            >
              <MenuIcon  htmlColor={'#fff'}  />
            </IconButton>
            <Typography variant="h6" noWrap>
              <a onClick={() => goTo("/")}>
                {/* <img
                  alt="Entrepot"
                  src={Images.dnftLogo}
                  style={{ height: 64, cursor: "pointer" }}
                /> */}
                111a哈哈哈哈
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
  containerBorder: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider
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
