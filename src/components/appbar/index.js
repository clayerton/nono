import React, { useState } from 'react';
import cx from 'clsx';
import { useNavigate, useLocation } from "react-router-dom";
import { CssBaseline, makeStyles, useTheme, Drawer, Hidden, AppBar, List, ListItemText, Toolbar, useMediaQuery, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import ListItem from '@material-ui/core/ListItem';
import Images from '@/constant'
import SearchBar from './searchBar';

const routers = [
    { url: '/', exact: true, name: 'Home', logo: Images.home },
    { url: '/explore', name: 'Explore', logo: Images.explore },
    { url: '/stats', name: 'Stats', logo: Images.stats },
    { url: '/rewards', name: 'Rewards', logo: Images.reward },

]
const SideBar = props => {
    const menuId = "primary-search-account-menu";

    const { window, location } = props;
    const { pathname, state } = useLocation();
    const theme = useTheme();

    const classes = useStyles();
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isSearchShowingInMobile, setSearchShowing] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const goTo = (path) => {
        navigate(path);
    };
    console.log(pathname, 'pathname')
    const drawer = (
        <div>
            <div onClick={() => goTo('/')} className={classes.logo}>
                <img src={Images.logo} />
                <span>Nonfungibles</span>
            </div>
            <List>
                {routers.map((routeObj, index) => (
                    <ListItem onClick={() => goTo(routeObj.url)} className={cx(classes.menuList, (routeObj.exact && (pathname === '/') || (!routeObj.exact && pathname.includes(routeObj.url))) && classes.menuListActive)} key={index}>
                        <img src={routeObj.logo} />
                        <ListItemText primary={routeObj.name} />
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return (
        <div className={classes.mainPanel}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar classes={classes.toolBar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon htmlColor={theme.custom.palette.noteBackground.default} />
                    </IconButton>
                    {isMobile ? (
                        isSearchShowingInMobile ? (
                            <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                        ) : (
                            <div>logo</div>
                        )
                    ) : (
                        <SearchContainer onSearchClose={() => setSearchShowing(false)} />
                    )}
                    {isMobile && !isSearchShowingInMobile ? (
                        <div>
                            <IconButton
                                aria-label="search"
                                aria-controls={menuId}
                                onClick={() => setSearchShowing(true)}
                            >
                                <SearchIcon htmlColor={theme.custom.palette.noteBackground.default} />
                            </IconButton>
                        </div>
                    ) : null}
                    <div>
                        <Button disableRipple={true} startIcon={<img src={Images.asset} />} classes={{ root: classes.buttonAsset }}>0xc9b1a...e51822</Button>
                        <Button disableRipple={true} startIcon={<img src={Images.eth} />}>Ethereum</Button>

                    </div>
                </Toolbar>
            </AppBar>
            <nav aria-label='mailbox folders'>
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
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
        </div>
    )
}
export default SideBar;
function SearchContainer({ onSearchClose }) {
    const classes = useStyles();
    return (
        <div className={classes.searchbarContainer}>
            <SearchBar onSearchClose={onSearchClose} />
        </div>
    );
}
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    mainPanel: {
        display: 'flex',

    },
    appBar: {
        zIndex: 9999,
        background: '#fff',
        color: '#000',
        fontFamily: 'Archivo Black',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            zIndex: 88,
        },
    },
    toolBar: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#000000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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
            fontFamily: 'Archivo Black',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
        }

    },
    menuListActive: {
        background: '#fff',
        color: '#000',
    },
    searchbarContainer: {
        flexGrow: 1,
        [theme.breakpoints.up("md")]: {
            flexGrow: 0,
            width: '500px',
            marginLeft: '26px'
        }
    },
    buttonAsset: {
        background: '#000',
        color: '#fff',
        marginRight: '30px',
        '&:hover': {
            background: '#000',
        }
    }


}))