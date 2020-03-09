import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, InputBase, Icon, Tabs, Tab, makeStyles, Button} from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'

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
    }

}))

function Header(){
    const [value, setValue] = useState(0)
    const classes = useStyles();
    const handleChange=(event, value)=>{
        setValue(value)
    }
        return (
            <AppBar position="static" color = "primary">
                <Toolbar>
                    <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} component={Link} to="/profile"  label="My Account" />
                        <Tab className={classes.tab} component={Link} to="/favorites"  label="My Favorites" />
                    </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button} >
                        BUTTON
                    </Button>
                </Toolbar>
            </AppBar>
    )
}


export default Header
