import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux'
import { getLangs } from '../../actions/user';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        ...theme.typography.fontF,
        fontWeight:500,
        fontSize:'1.2rem',
        color:theme.palette.primary.light
    },
    subfield:{
        ...theme.typography.fontF,
        fontSize:'0.9rem',
        color:theme.palette.secondary.main
    }
}));
const HomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    // getting language from the stre
    const userLang = useSelector(state => state.userLang)
    const { loading, success, language } = userLang
    useEffect(() => {
        dispatch(getLangs())
    }, [])
    return (
        <div className={classes.root} style={{ marginTop: '5em' }}>
            {language && language.map((val,i) => (
                <>
                    <Accordion key={i}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{val.name}</Typography>
                        </AccordionSummary>

                        {val.frameworks.map((value,i) => (
                            <AccordionDetails key={i}>
                               <Typography className={classes.subfield}>{value}</Typography>
                            </AccordionDetails>
                        ))}

                    </Accordion>
                </>
            ))}
        </div>
    )
}

export default HomePage
