import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer:{
    paddingTop: '12rem',
    paddingBottom: '10rem'
  },
  gridRoot:{

  },
  gridContactConversation:{
  },
  gridContactChanel:{
    fontSize:"20px",
    padding:'20px 0px',
  },
  conversationTypo:{
    fontSize:'1.5rem',
    fontWeight: '400',
    color: "#5A3C57",
  },
  link:{
    textDecoration:'none'
  },
  linkIcons:{
    margin:'0',
    padding:'0',
    transform: "translateY(5px)",
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.root}>
        <Grid className={classes.gridRoot} container spacing={0}>
          <Grid item xs={6}>
            <Grid className={classes.gridContactConversation} container>
              <Grid item xs={12} >
                <Typography className={classes.conversationTypo}>
                  The only reason this website exists is that I want<br/>
                  to practice my little experience with NextJs<br/>
                  and React. Contact me if you know some how to impove <br/>
                  it and I&apos;m glad to hear it. ( I knew it is not responsive :) )<br/>
                  <br/>
                  You can find the this repository at:<br/>
                  FrontEnd: <a className={classes.link} href="https://github.com/DangVTNhan/BlogFE">Github</a>  <br/>
                  BackEnd: <a className={classes.link} href="https://github.com/DangVTNhan/CleanArchitectureBlogBoilerplate">Github</a> <br/>
                </Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}  className={classes.gridContactChanel}>
                <a className={classes.link} href="https://github.com/DangVTNhan"> <GitHubIcon className={classes.linkIcons} fontSize="large"/>  DangVTNhan</a>
              </Grid>
              <Grid item xs={12}  className={classes.gridContactChanel}>
                <a className={classes.link} href="https://www.facebook.com/nhan.dang.79025/"> <FacebookIcon  className={classes.linkIcons} fontSize="large"/>  NhanDang</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
