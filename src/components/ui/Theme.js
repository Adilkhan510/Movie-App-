import { createMuiTheme } from '@material-ui/core/styles'

const yellow = "#FFFF00";
const red = "#FF0000"


export default createMuiTheme({
    palette : {
        primary : {
            main :`${yellow}`
        },
        secondary : {
            main : `${red}`
        }
    },
    typography : {
        tab:{
            fontWeight : 100,
            textTransform: "none",
            fontWeight: 800,
            fontSize : '1rem'
        }
    }
})

