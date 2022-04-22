import React, { useState } from 'react';
import cx from 'clsx';
import { useNavigate, useLocation } from "react-router-dom";
import { CssBaseline, makeStyles, Drawer, Hidden, AppBar, List, ListItemText, Toolbar, Divider, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import Images from '@/constant'
import Route from "@/router";
const routers = [
    { url: '/', exact: true,  name: 'Home', logo: Images.home },
    { url: '/explore', name: 'Explore', logo: Images.explore },
    { url: '/stats', name: 'Stats', logo: Images.stats },
    { url: '/rewards', name: 'Rewards', logo: Images.reward },

]
const SideBar = props => {
    const { window, location } = props;
    const { pathname, state } = useLocation();

    const classes = useStyle();
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const goTo = (path) => {
        navigate(path);
      };
    console.log(pathname,'pathname')
    const drawer = (
        <div>
            <div onClick={()=>goTo('/')} className={classes.logo}>
                <img src={Images.logo} />
                <span>Nonfungibles</span>
            </div>
            <List>
                {routers.map((routeObj, index) => (
                    <ListItem onClick={()=>goTo(routeObj.url)} className={cx(classes.menuList, (routeObj.exact && (pathname === '/') || (!routeObj.exact && pathname.includes(routeObj.url))) && classes.menuListActive)}  key={index}>
                        <img src={routeObj.logo} />
                       <ListItemText primary={routeObj.name} />
                    </ListItem>
                ))}
            </List>

        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.mainPanel}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        3131
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav aria-label='mailbox folders'>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer style={{ border: 0 }} classes={{
                        paper: classes.drawerPaper,
                    }} variant="permanent" open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route />
            </main>
        </div>
    )
}
export default SideBar;
const drawerWidth = 200;

const useStyle = makeStyles((theme) => ({
    mainPanel: {
        display: 'flex',

    },
    drawer: {

        [theme.breakpoints.up('sm')]: {
            // backgroundColor: 'red'
        },
    },
    appBar: {
        zIndex: 9999,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            zIndex: 88,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#000000',
        color: '#fff',
        fontFamily: 'Archivo Black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
    },
    logo: {
        margin: '50px 0 100px 0',
        display: 'flex',
        cursor: 'pointer',
        '& img': {
            width: '24px',
            height: '24px',
            marginRight: '10px'
        },
        '& span': {
            fontFamily: 'Barlow',
            fontWeight: 900,
            fontSize: '18px',
        },
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
   
    menuList: {
        height: '40px',
        width: '150px',
        cursor: 'pointer',
        marginTop: '50px',
        borderRadius: '10px',
        '& img': {
            width: '18px',
            height: '18px',
            marginRight: '10px',
        },
        '& span': {
            fontFamily: 'ArchivoBlack',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
        }
        
    },
    menuListActive: {
        background: '#fff',
        color: '#000',
   

    }
   

}))