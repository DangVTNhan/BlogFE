import React from 'react'
import { Grid, Typography, Box  }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContainer: {
    height: '100vh',
    backgroundImage: `url(/images/back-ground-hero.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  heroContent:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  hookContent:{
    paddingTop:'9rem',
    color: '#5A3C57',
    fontWeight:"fontWeightBold",
  },
  describeHookContent:{
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className='root'>
      <Grid
        container
        className ={classes.heroContainer}
        >
        <Grid item xs={12} className={classes.heroContent}>
          <Typography variant="h1" className={classes.hookContent}>
            <Box fontWeight="fontWeightBold" m={1}>
              BLOG FOR NOOBS
            </Box>
          </Typography>
          <Typography variant="h4" className={classes.describeHookContent}>Express your experience for other noobs</Typography>
        </Grid>
      </Grid>
    </div>
  )
}
