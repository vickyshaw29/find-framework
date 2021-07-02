import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import { useTheme } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    toolbarMarginDrawer: {
        marginBottom: '4.7em'
    },
    tabContainer: {
        marginRight: 'auto',
        marginLeft: 6
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '3px'
    },
    tabAccount: {
        ...theme.typography.tab,
    },
    btn: {
        fontFamily: ' Arizonia',
        fontSize: '1.1rem',
        textTransform: 'none',
        borderRadius: '50px',
        marginRight: '10px',
        marginLeft: '5em',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '16px',
            marginRight: '30px',
            fontSize: '1rem'
        }
    },
    // auth btn
    btnContainer: {
        marginLeft:'auto',
        marginRight:16,
        [theme.breakpoints.down('sm')]:{
            marginRight:5
        }
    },
    authBtn1: {
        ...theme.typography.authBtn,
        backgroundColor: '#E7F1F2',
        color: theme.palette.primary.main,
        marginRight: '23px',
        // padding:13
        "&:hover": {
            backgroundColor: '#E7F1F2'
        },
        [theme.breakpoints.down('xs')]:{
            marginRight: '-10px',
            width:40
        }
    },
    authBtn2: {
        ...theme.typography.authBtn,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 500,
        // marginRight:'1em',
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        [theme.breakpoints.down('xs')]:{
            width:40,
            marginLeft:16
        }
    },

    appbar: {
        zIndex: theme.zIndex.modal + 1,
        boxShadow: ' 0px 0.7px 0px #E5E9F2',
        // testing
        backgroundColor: theme.palette.common.white,
    }
}))
const Header = ({ history }) => {
    const classes = useStyles()
    const theme = useTheme()
return (
        <>
        <AppBar position="fixed" color='inherit' elevation={0}
            className={classes.appbar}
        >
            <Toolbar disableGutters style={{ minHeight: 52.5 }} >
                <Button variant='contained'
                    className={classes.btn} component={Link} to='/'
                    // onClick={mainTextClick}
                    disableElevation
                >Find Framework</Button>
                <div className={classes.btnContainer}>

                    <Button
                        variant="contained"
                        className={classes.authBtn1}
                        component={Link} to=''
                        disableElevation
                    >
                        Login</Button>
                    <Button variant='contained' color='primary' className={classes.authBtn2}
                        component={Link} to=''
                        disableElevation
                    >Register</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
    </>
        )
}

export default Header
