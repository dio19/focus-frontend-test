import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
      md: 646,
      lg: 900,
      xl: 1366,
    },
  },
})

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    height: 249,
    width: 657
  },
  title: {
    color: '#fff',
    fontSize: 53,
    fontFamily: 'Mont',
    fontStyle: 'bold',
    textAlign: 'left',
    maxHeight: 249,
    maxWidth: 980,
    [theme.breakpoints.down('md')]: {
      fontSize: 41,
      marginBottom: 25
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 35
    }
  },
  subTitle: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'Mont',
    fontStyle: 'semibold',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      marginTop: 25
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 26
    }
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  content: {
    overflow: 'auto',
    marginTop: '10%',
    [theme.breakpoints.down('md')]: {
      marginTop: '20%',
      marginLeft: '5%',
      marginRight: '5%'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '35%',
      marginLeft: '10%',
      marginRight: '15%'
    },
  },
  buttonText: {
    textTransform: 'none',
    fontFamily: 'Mont',
    fontStyle: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    '&:hover': {
      color: '#C38B54 !important'
    }
  },
  button: {
    height: 57,
    width: 207.06,
    marginLeft: '45%',
    marginTop: 25,
    backgroundColor: '#C38B54',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: '#FFFFFF !important'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '30%',
      marginTop: 35,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '20%',
      marginTop: 50,
    },
  }
}));

export default function Header() {
  const classes = useStyles();
  
  return (
      <Grid       
        container
        justify='center'
        alignItems='center'
        className={classes.root}
      >
        <Grid item xs={12} sm={10} className={classes.content}>
          <Grid item xs={12} sm={10}>
            <h1 className={classes.title}>
            Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh.
            </h1>
          </Grid>
          <Grid item xs={12} sm={9}>
            <span className={classes.subTitle}>
            Lorem ipsum dolor sit amet elit diam nonummy nibh.
            </span>
          </Grid>
          <Button 
              classes={{
                root: classes.button,
                text: classes.buttonText
              }}
            >
                  Descubrir más
        </Button>
        </Grid>
      </Grid>
  );
}
