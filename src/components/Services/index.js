import React from "react"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { IoIosRocket, IoLogoWordpress, IoIosPeople} from 'react-icons/io'

import * as S from './styled'

const landingPages = <IoIosRocket fontSize={80}/>
const wordpress = <IoLogoWordpress fontSize={80}/>
const social = <IoIosPeople fontSize={80}/>

const services = [
  {
    title: 'Criação de Landing Pages',
    description: 'Sites responsivos e otimizados para o usuário, desenvolvidos com HTML, CSS e JavaScript.',
    icon: landingPages,
  },
  {
    title: 'Desenvolvimento WordPress',
    description: 'Páginas dinâmicas, institucionais ou blogs, além de atualização e manutenção de sites.',
    icon: wordpress,
  },
  {
    title: 'Gestão de Redes Sociais',
    description: 'Design/criação de artes, conteúdos, postagem, Facebook Ads e Instagram Ads.',
    icon: social,
  },
]

const Services = () => {
  return (
    <S.Services id="servicos">
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <S.ServicesTitle>
              O que fazemos
          </S.ServicesTitle>
            <S.ServicesDescription>
              Soluções completas
          </S.ServicesDescription>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          {
            services.map(service => (
              <Grid item key={service.title} xs={12} md={4}>
                <S.ServicesCard>
                  <S.CardIcon>{service.icon}</S.CardIcon>
                  <S.CardTitle>{service.title}</S.CardTitle>
                  <S.CardDescription>{service.description}</S.CardDescription>
                </S.ServicesCard>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </S.Services>
  )
}


export default Services