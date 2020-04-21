import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core/';
import Trending  from '../Trending/Trending'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    container: {
        width: "100vw",
        marginLeft : "auto",
        background : "yellow",
    }
}))
export const Main = () => {
    const classes = useStyles()
    const [value,setValue] = useState(0)
    const handleChange = (event, value)=>{
        setValue(value)
    }
    return (
            <Tabs value={value} onChange={handleChange} className={classes.container}> 
                <Tab label="Trending" value={()=><Trending />} /> 
                <Tab label="Coming Soon" value= {()=><div>HELLO</div>} /> 
                <Tab label="Favorites" value={<div>HELLO</div>} /> 
            </Tabs>
    )
}
