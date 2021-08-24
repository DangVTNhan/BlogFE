import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image';
import Link from '../Link';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  authenticationButton:{
    margin: theme.spacing(0, 1),
    color: '#000000',
    width:'100px',
    // padding: '0.5rem',
    '&:hover':{
      background: "#ff8ef0",
      height: '100%',
      color: '#000000'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navigationButtons: {
    margin: theme.spacing(0, 6),
    height:'100%'
  },
  navigationButton: {
    height:'100%',
    padding: '1rem 1.5rem',
    width:'125px',
    '&:hover': {
      background: "#ff8ef0",
      height: '100%',
    },
  },
  link:{
    textDecoration: 'none!important',
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Link className={classes.link}  href="/">
            <Image src="/images/TrasperentLogo.png" alt="logo" width="58px" height="58px" padding='0' margin='0'/>
          </Link>
          <div className={classes.navigationButtons}>
            <Link className={classes.link}  href="/">
              <Button className={classes.navigationButton}>
                Home
              </Button>
            </Link>
            <Link className={classes.link}  href="/posts">
              <Button className={classes.navigationButton}>
                Blog
              </Button>
            </Link>

            <Link className={classes.link}  href="/about">
              <Button className={classes.navigationButton}>About</Button>
            </Link>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for blog"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>            
            <Button className={classes.authenticationButton} variant="outlined" color="primary">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
