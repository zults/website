import React from "react"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import * as S from './styled'

const Hero = () => {
  return (
    <S.Hero>
      <Container>
        <Grid container justify='center' alignItems="center" spacing={2}>
          <Grid item xs={12} md={10}>
            <S.HeroTitle>
              Resultados que a sua empresa merece.
            </S.HeroTitle>
            <S.HeroDescription>
              Nós somos uma agência digital especializada em desenvolvimento de sites e redes sociais. Aqui na Zults, desenvolvemos nosso trabalho com foco nas pessoas, utilizando criatividade e tecnologia para proporcionar experiências digitais surpreendentes.
            </S.HeroDescription>
          </Grid>
        </Grid>
      </Container>
    </S.Hero>
  )
}

export default Hero