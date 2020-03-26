import React from "react"
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import * as S from './styled'

const useStyles = makeStyles({
  social: {
    textAlign: 'center',
    marginTop: '1em'
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <S.Footer>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <S.SocialInfo>
              Estamos nas Redes Sociais como @agenciazults
          </S.SocialInfo>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={4} className={classes.social}>
            <S.Social href="https://www.facebook.com/agenciazults/" target="_blank">
              Facebook
            </S.Social>
          </Grid>
          <Grid item xs={12} md={4} className={classes.social}>
            <S.Social href="https://www.instagram.com/agenciazults/" target="_blank">
              Instagram
            </S.Social>
          </Grid>
          <Grid item xs={12} md={4} className={classes.social}>
            <S.Social href="https://www.linkedin.com/company/agenciazults" target="_blank">
              LinkedIn
            </S.Social>
          </Grid>
        </Grid>
      </Container>
    </S.Footer>
  )
}

export default Footer
