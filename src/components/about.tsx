import React from 'react'

import { Avatar, Box, makeStyles, Theme, Typography } from "@material-ui/core"

import profile from '../images/prof.png'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}))

const About = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Avatar
          src={profile}
          className={
            classes.avatar}
          />
      </Box>
    </React.Fragment>
  )
}

export default About