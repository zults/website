import React from "react"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import * as S from './styled'

const Contact = () => {
  return (
    <S.Contact id="contato">
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <S.ContactTitle>
              Contato
          </S.ContactTitle>
            <S.ContactDescription>
              Vamos conversar?
          </S.ContactDescription>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <S.ContactInfo href="mailto:atendimento@zults.com.br" target="_blank">
              atendimento@zults.com.br
            </S.ContactInfo>
          </Grid>
        </Grid>
      </Container>
    </S.Contact>
  )
}


export default Contact