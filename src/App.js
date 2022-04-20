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

const useStyle = makeStyles((theme) => {
  console.log(theme,'theme')
  return ({
 
    backdrop: {
      display: 'flex'
    },
  content: {
    flexGrow: 1,
    marginTop: 73,
    paddingBottom:50,
    padding: '24px',
    margin: theme.spacing(2)
  }
})});
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
        <Navbar />
        <div className={classes.content}>
        <Route />

        </div>
        {/* <div>2212</div> */}
       
      </div>
    </React.Suspense>
  );
}

export default App;
