import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useGetInfo } from "@/redux/profile";
import { makeStyles } from "@material-ui/styles";
import { useLocation } from "react-router";
import Route from "@/router";
import clsx from "clsx";
import Navbar from "@/components/navbar";
import Appbar from '@/components/appbar'
const drawerWidth = 200;

const useStyle = makeStyles((theme) => {
  console.log(theme, 'theme')
  return ({

    backdrop: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
      },
    },
    toolbar: theme.mixins.toolbar,

  })
});
function App() {
  const { pathname } = useLocation();
  const classes = useStyle();
  const [rootPage, setRootPage] = useState("");

  const { info } = useSelector((state) => state.profile);
  const ddd = useGetInfo([]);
  console.log(info, pathname, classes, "info");
  useEffect(() => {
    setRootPage(pathname.split("/")[1]);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <React.Suspense fallback={null}>
      <div className={clsx(classes.backdrop, classes.a)}>
        <Appbar />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Route />
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
