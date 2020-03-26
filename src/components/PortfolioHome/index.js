import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { IoIosArrowRoundForward } from 'react-icons/io'

import * as S from './styled'

import image6 from '../../images/portfolio/sites/up-fuse.jpg'
import image5 from '../../images/portfolio/sites/next.jpg'
import image4 from '../../images/portfolio/sites/fechaepuxa.jpg'
import image3 from '../../images/portfolio/sites/lena.jpg'
import image2 from '../../images/portfolio/sites/eu-escolhi-amar.jpg'

const works = [
  {
    title: 'Site Ass. Eu Escolhi Amar',
    image: image2,
    url: 'https://euescolhiamar.org/'
  },
  {
    title: 'Site Lena Salgados',
    image: image3,
    url: 'https://lenasalgados.com.br/'
  },
  {
    title: 'Site Fecha e Puxa',
    image: image4,
    url: 'https://www.fechaepuxa.net.br/'
  },
  {
    title: 'Rede Social Andreya\'s Coifeeur',
    image: image5,
    url: 'https://www.behance.net/gallery/91163485/Social-Media'
  },
  {
    title: 'Rede Social Sião',
    image: image6,
    url: 'https://www.behance.net/gallery/91163485/Social-Media'
  },
]

const useStyles = makeStyles({
  portfolioHCard: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5
  },
  cardActions: {
    justifyContent: 'center',
  },
  PortfolioHButton: {
    paddingTop: '8em',
    paddingBottom: '8em',
  }
});

const PortfolioHome = () => {
  const classes = useStyles();
  return (
    <S.PortfolioHome id="portfolio">
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <S.PortfolioHTitle>
              Portfólio
          </S.PortfolioHTitle>
            <S.PortfolioHDescription>
              Projetos que brilham nossos olhos
          </S.PortfolioHDescription>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={4}>
          {
            works.map(work => (
              <Grid item key={work.title} xs={12} md={4}>
                <S.Card className={classes.portfolioHCard} title={work.title}>
                    <S.CardImg src={work.image} alt={work.title} height="140"/>
                    <S.CardTitle>{work.title}</S.CardTitle>
                    <S.CardLink href={work.url} target="_blank">Acessar o site <IoIosArrowRoundForward /></S.CardLink>
                </S.Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </S.PortfolioHome>
  )
}


export default PortfolioHome