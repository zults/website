import styled from 'styled-components'
import media from 'styled-media-query'

import bgHero from '../../images/bg-zults.jpg'

export const Hero = styled.section`
  background-color: var(--dark);
  background-image: url(${bgHero});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
  padding-top: 10em;

  ${media.greaterThan("large")`
  align-items: center;
  `
  }
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--light);
  margin-bottom: 1.2rem;
  text-align: center;
  transition: all 2s;

  ${media.greaterThan("large")`
    font-size: 6rem;
  `
  }
`

export const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  color: var(--light);
  margin-bottom: 2.2rem;
  text-align: center;
  transition: all 2s;

  ${media.greaterThan("large")`
    font-size: 1.2rem;
    line-height: 1.6rem;
  `
  }
`

export const HeroImg = styled.div`
  display: flex;
  transition: all 2s;
`

export const HeroIllustration = styled.svg`
  width: 100%;
  height: auto;
`

export const HeroAction = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 2s;

  ${media.greaterThan("large")`
    flex-direction: row;
  `
  }  
`
