import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, InputBase, Icon, Tabs, Tab, makeStyles, Button} from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import img from '../../Images/logo.png'

const useStyles = makeStyles(theme=>({
    tabContainer: {
        background : "primary",
        marginLeft : "auto",
    },
    tab : {
        ...theme.typography.tab,
    },
    button : {
        borderRadius : "10px",
    },
    logo : {
        width: "120px",
        height : "90px",
        marginTop : "0px",
        marginBottom : "0px"
    }

}))

function Header(){
    const [value, setValue] = useState(0)
    const classes = useStyles();
    const handleChange=(event, value)=>{
        setValue(value)
    }
    useEffect(()=>{
        if(window.location.pathname === "/" && value !==0){
            setValue(0)
        }
        else if(window.location.pathname === "/profile" && value !==1){
            setValue(1)
        }else if(window.location.pathname === "/favorites" && value !==2){
            setValue(2)
        }
    })
        return (
            <AppBar position="static" color = "primary">
                <Toolbar disableGutters>
                    <img src={img}  className={classes.logo} />
                    <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} component={Link} to="/profile"  label="My Account" />
                        <Tab className={classes.tab} component={Link} to="/favorites"  label="My Favorites" />
                    </Tabs>
                </Toolbar>
            </AppBar>
    )
}


export default Header
