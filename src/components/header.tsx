import React from 'react'

import { Grid, AppBar, Toolbar, Typography, makeStyles, Theme, Button } from "@material-ui/core"

import { Link as Scroll, animateScroll } from 'react-scroll'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    height: theme.spacing(7),
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
  }
}))

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid
            container
            spacing={3}
            alignItems='center'
          >
            <Grid item style={{ flexGrow: 1 }}>
              <Button
                className={classes.button}
                onClick={() => animateScroll.scrollToTop()}
                >
                <Typography
                  variant='h5'
                  component='h1'
                >
                  y-ohgi
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Scroll
                to='links'
                spy={true}
                smooth={true}>
                <Typography
                  variant='subtitle1'
                  style={{ cursor: 'pointer' }}
                >
                  links
                </Typography>
              </Scroll>
            </Grid>
            <Grid item>
              <Scroll
                to='price'
                spy={true}
                smooth={true}>
                <Typography
                  variant='subtitle1'
                  style={{ cursor: 'pointer' }}
                >
                  price
                </Typography>
              </Scroll>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header