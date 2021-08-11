import React from 'react'

import { Chip, Container, Grid, Typography } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookIcon from '@material-ui/icons/Book';

const Links = () => {
  return (
    <React.Fragment>
      <Container id='links'>
        <Typography
          paragraph
          variant='h5'
          align='center'
          >
          links
        </Typography>
        <Grid
          container
          alignItems='center'
          spacing={3}
          justify='space-around'
          >
          <Grid item>
            <a href='https://github.com/y-ohgi'>
              <Chip
                icon={<GitHubIcon />}
                label='GitHub'
                />
            </a>
          </Grid>
          <Grid item>
            <a href='https://github.com/y-ohgi/resume'>
              <Chip
                icon={<GitHubIcon />}
                label='resume'
                />
            </a>
          </Grid>
          <Grid item>
            <a href='https://twitter.com/_y_ohgi'>
              <Chip
                icon={<TwitterIcon />}
                label='@_y_ohgi'
                />
            </a>
          </Grid>
          <Grid item>
            <a href='https://www.facebook.com/ohgi.yuusuke'>
              <Chip
                icon={<FacebookIcon />}
                label='ohgi.yuusuke'
                />
            </a>
          </Grid>
          <Grid item>
            <a href='https://y-ohgi.blog'>
              <Chip
                icon={<BookIcon />}
                label='y-ohgi.blog'
                />
            </a>
          </Grid>
        </Grid>
        
      </Container>
    </React.Fragment>
  )
}

export default Links