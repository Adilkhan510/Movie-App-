import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Grid, Typography, Button, TextField} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    container : {
        width: '100vw',
        height : "80vh",
    },
    text : {
        fontWeight : 800,
        textAlign : "center"
    },
    inputStyle : {
        width: "150%",
        textAlign : "center"
    },
    button : {
        width: "150%",
    }

}))

export const Register = () => {
    const classes = useStyles()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div>
            <Grid container direction="row" justify="center" className={classes.container} justify="center">
                <Grid item container direction="column" spacing="2" justify="center" alignContent="center">
                    <Grid item>
                        <Typography variant="h4" className={classes.text} style={{width : "150%"}}>
                            Register
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Name" value={name} onChange={(event)=>{
                            setName(event.target.value)
                        }} 
                        className={classes.inputStyle}
                        />
                    </Grid>
                    <Grid item>
                        <TextField label="Email" value={email} 
                        onChange={(event)=>{
                            setEmail(event.target.value)
                        }}
                        className={classes.inputStyle}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                        label="Password" 
                        value={password}
                        onChange={(event)=>{
                            setPassword(event.target.value)
                        }}
                        className={classes.inputStyle}
                         />
                    </Grid>
                    <Grid item>
                        <TextField label="Password"
                        className={classes.inputStyle}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.button} color="primary">
                            <Typography className={classes.text}> 
                                Submit
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
