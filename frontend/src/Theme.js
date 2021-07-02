import { createMuiTheme } from '@material-ui/core/styles'
const arcGreen = '#37A794'
const arcBlue = '#01354B'
const arcGrey='#E7F1F2'
const arcBlack='#4B4B4B'
export default createMuiTheme({
    palette: {
        common: {
            green: `${arcGreen}`,
            blue: `${arcBlue}`,
            white: '#fff',
            black:  `${arcBlack}`,
            grey: `${arcGrey}`
        },
        primary: {
            main: `${arcGreen}`,
        },
        secondary: {
            main: `${arcBlue}`
        }
    },
    typography: {
        // fontFamily: `"Pacifico", "PT Serif", "Open Sans"`,
        // fontSize: 16,
        h4:{
            fontFamily: 'Roboto',
            fontWeight:500,
            fontSize:'1rem',
            color:arcBlack
        },
        h5: {
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1.2rem',
            color: '#4B4B4B'
        },
        subtitle2:{
            fontFamily:'Roboto',
            fontWeight:300,
            fontSize:'0.8em'

        },
        subtitle1:{
            fontFamily:'Roboto',
            fontWeight:600,
            fontSize:'1em',
            color:'#4B4B4B'

        },
        h6:{
            fontFamily:'Roboto',
            fontWeight:400,
            fontSize:'0.85em',
        },
        // landing auth
        authBtn: {
            fontFamily: 'Manrope',
            fontSize: '0.85rem',
            textTransform: 'none',
            fontWeight: 'bold',
            width: 92,
            height:'1.75rem',
            letterSpacing:0,
            borderRadius:5,
           
            // paddingTop: 5,
            // paddingBottom: 5,
        },
        
        title: {
            fontFamily: `'Manrope', sans-serif`,
            fontSize: '3.2rem',
            fontWeight: 900,
            color: '#18191F'
        },
        bodyText: {
            fontFamily: `'Manrope', sans-serif`,
            fontWeight: 400,
            fontSize: '0.82em',
            lineHeight:1.7,
            letterSpacing:0
        },
        fontF: {
            fontFamily: 'Roboto',
        },
        //  login text  
        logintxt: {
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.8rem',
            color: '#4B4B4B',
            marginBottom: '1.9rem'
        },
        // submitbtn
        submitBtn: {
            fontFamily: 'Roboto',
            textTransform: 'none',
            borderRadius:8
        },
    },
})