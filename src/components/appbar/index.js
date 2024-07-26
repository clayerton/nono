import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Images from '@/constant'
import { useNavigate, useLocation } from "react-router-dom";
import cx from 'clsx';


const routers = [
    { url: '/', exact: true, name: '北京大豪', logo: Images.home },
    { url: '/deploy', name: '刺绣机事业部', logo: Images.explore },
    { url: '/fameScan', name: '网络部', logo: Images.stats },
    { url: '/market', name: '前端组', logo: Images.reward },

]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        width: '100%',
        height: 96,
        displa: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#1890ff'
    }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('event,',event.target.value, newValue);
    setValue(newValue);
  };
  const goTo = (path) => {
    navigate(path);
};


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
            {routers.map((routeObj, index) => (
                <Tab
                    className={cx(classes.menuList, (routeObj.exact && (pathname === '/') ||
                        (!routeObj.exact && pathname.includes(routeObj.url))) && classes.menuListActive)}
                    key={index}
                    label={<div>
                        <img src={routeObj.logo} style={{marginRight: '20px'}}/>
                        <span>{routeObj.name}</span>
                    </div>}
                    onClick={() => goTo(routeObj.url)}
                />
            ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
