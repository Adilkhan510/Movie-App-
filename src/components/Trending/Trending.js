import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles, Grid, Typography } from '@material-ui/core'
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
    image:{
        width: "300px",
        height : "300px"
    },
    containers :{
        ...theme.containers
    },
    mainContainer : {
        textAlign : "center",
        fontSize : "10px"
    }
}))
const Trending = () => {
    const [movieData, setMovieData] = useState([])
    const classes = useStyles()
    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=b899afbc3f53930ff5b7789533082450').then(response=>{
            console.log(response.data.results)
            setMovieData(response.data.results)
        })
    })
    return (
        <>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item container direction="row" style={{marginLeft : "5%"}} > 
                    {movieData.map((movie)=>{
                        return (
                        <Grid item className={classes.containers}>
                            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} className={classes.image} />
                            <Grid item container className={classes.mainContainer}>
                                <Typography variant="body1" style={{fontWeight : "900",border: "solid primary 1px", background : "primary"}}>   
                                {movie.title}
                                </Typography>
                            </Grid>
                        </Grid>)
                    })}
                </Grid>
            </Grid>
        </>
        
    )
}

export default Trending
