import styled from 'styled-components'

export const PortfolioHome = styled.section`
  background-color: var(--light);
  padding-top: 5rem;
`

export const PortfolioHTitle = styled.h2`
    font-size: 2rem;
  font-weight: bold;
  color: var(--dark);
  margin-bottom: .5rem;
  text-align: center;
`

export const PortfolioHDescription = styled.p`
  font-size: 1rem;
  color: var(--gray1);
  margin-bottom: 5rem;
  text-align: center;
`

export const Card = styled.div`
   height: 280px;
   text-align: center;
`

export const CardImg = styled.img`
  box-shadow: 0 15px 25px -1px rgba(0,0,0,.3);
  border-radius: 5px;
`

export const CardTitle = styled.h3`
  font-size: 1rem;
  color: var(--dark);
  text-align: center;
  margin-top: 1em;
  margin-bottom: .5em;
`

export const CardLink = styled.a`
  font-size: .9rem;
  color: var(--highlight);
  text-decoration: none;
  text-align: center;
  transition: all .2s;

  :hover {
    color: var(--highlight);
  }

  svg {
    vertical-align: middle;
  }
`

export const PortfolioHButton = styled.a`
  font-size: 1.6rem;
  border-bottom: var(--highlight) solid 4px;
  color: var(--dark);
  text-decoration: none;
  transition: all .2s;

  :hover {
    border-bottom-color: var(--dark)
  }
`