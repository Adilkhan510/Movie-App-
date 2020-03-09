import { createMuiTheme } from '@material-ui/core/styles'

const yellow = "#FFFF00";
const red = "#FF0000"
const blue = "rgba(31, 58, 147, 1)"


export default createMuiTheme({
    palette : {
        primary : {
            main :`${yellow}`
        },
        secondary : {
            main : `${blue}`
        }
    },
    typography : {
        tab:{
            fontWeight : 100,
            textTransform: "none",
            fontWeight: 800,
            fontSize : '1rem'
        }
    },
    containers : {
        background : "yellow",
        justifyContent : "center",
        textAlign : "center",
        fontSize : "80px",
        margin: "30px",
        fontWeight : "600",
        height : '300px',
        width : "300px",
        marginBottom : "20px"
    }
})

