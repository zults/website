import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { IoIosStar } from 'react-icons/io'

import * as S from './styled'

import image1 from '../../images/logo-clients/zoe.png'
import image2 from '../../images/logo-clients/lena.png'
import image3 from '../../images/logo-clients/next.png'
import image4 from '../../images/logo-clients/eu-escolhi-amar.png'
import image5 from '../../images/logo-clients/fecha-e-puxa.png'
import image6 from '../../images/logo-clients/up-fuse.png'
import image7 from '../../images/logo-clients/andreyas.png'
import image8 from '../../images/logo-clients/calavera.png'

const logos = [
  {
    title: 'Agência Zoe',
    image: image1,
  },
  {
    title: 'Lena Salgados',
    image: image2,
  },
  {
    title: 'Next Negócios',
    image: image3,
  },
  {
    title: 'Associação Eu Escolhi Amar',
    image: image4,
  },
  {
    title: 'Fecha e Puxa Portas e Acessórios',
    image: image5,
  },
  {
    title: 'Up Fuse',
    image: image6,
  },
  {
    title: 'Andreya\'s Coiffeur',
    image: image7,
  },
  {
    title: 'Calavera Designs',
    image: image8,
  },
]

const useStyles = makeStyles({
  logosContainer: {
    paddingTop: '5em',
    maxWidth: '100%'
  },
  imgLogo: {
    maxHeight: 40,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const Clients = () => {
  const classes = useStyles();
  return (
    <S.Clients id="clientes">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <S.ClientsTitle>
              Clientes e Parceiros
          </S.ClientsTitle>
            <S.ClientsDescription>
              Pessoas incríveis que confiaram em nós
          </S.ClientsDescription>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-start" spacing={4}>
          <Grid item xs={11} md={6}>
            <S.TestimonialBlock>
              <S.Testimonial>
                “Visando alcançar mais pessoas que necessitam de assistência e também alavancar mais apoiadores para nossos projetos, buscamos pessoas competentes e com o coração voluntário, pois a Associação é sem fins lucrativos. Patrick logo foi lembrado por sua competência respaldada por vários amigos de conhecimento na área. Em contato com ele, nós podemos conhecer mais de perto seu coração e sua generosidade com as causas sociais. Com competência e muito carinho, de forma voluntária, ele abraçou nossa Associação, atendeu toda nossa demanda e o resultado foi extraordinário: Um site moderno e com um visual lindo!”
              </S.Testimonial>
              <S.TestimonialAuthor>
                Thiago Silva Porchat de Assis
              </S.TestimonialAuthor>
              <S.TestimonialAuthorOrg>
                Associação Eu Escolhi Amar/Varginha - MG
              </S.TestimonialAuthorOrg>
              <S.TestimonialStars>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </S.TestimonialStars>

            </S.TestimonialBlock>
          </Grid>
          <Grid item xs={11} md={6}>
            <S.TestimonialBlock>
              <S.Testimonial>
                "A Agência Zoe tem um prazer enorme em ser parceira da Zults, sempre entrega nossas demandas com antecedência, além de ser uma empresa séria e compromissada, o mercado precisa de mais parceiros sérios como vocês pessoal, que nossas folhas possam seguir em direção aos mares de vocês sempre."
              </S.Testimonial>
              <S.TestimonialAuthor>
                Miller e Alinne
              </S.TestimonialAuthor>
              <S.TestimonialAuthorOrg>
                Agência Zoe Creative
              </S.TestimonialAuthorOrg>
              <S.TestimonialStars>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </S.TestimonialStars>
            </S.TestimonialBlock>
          </Grid>
        </Grid>
        <Grid className={classes.logosContainer} container justify="center" alignItems="center" spacing={4}>
          {
            logos.map(logo => (
              <Grid item key={logo.title} xs={6} md="auto">
                <S.ImgLogo className={classes.imgLogo} src={logo.image} alt={logo.title} title={logo.title} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </S.Clients>
  )
}


export default Clients