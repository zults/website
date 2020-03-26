import styled from 'styled-components'

export const Services = styled.section`
  background-color: var(--light);
  padding-top: 5rem;
`

export const ServicesTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--dark);
  margin-bottom: .5rem;
  text-align: center;
`

export const ServicesDescription = styled.p`
  font-size: 1rem;
  color: var(--gray1);
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export const ServicesCard = styled.div`
  max-width: 360;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5em;
  padding-right: 1.5em;
  flex-wrap: wrap;
`

export const CardIcon = styled.span`
  color: var(--highlight);
  display: flex;
  justify-content: center;
  padding-top: 4em;
`

export const CardTitle = styled.h3`
  font-size: .9rem;
  font-weight: 400;
  color: var(--dark);
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1em;
  text-transform: uppercase;
`

export const CardDescription = styled.p`
  font-size: .9rem;
  line-height: 1.2rem;
  color: var(--dark);
  text-align: center;
  padding-bottom: 4em;
  font-weight: 300;
`

export const ServicesButton = styled.a`
  font-size: 1.6rem;
  border-bottom: var(--highlight) solid 4px;
  color: var(--light);
  text-decoration: none;
  transition: all .2s;

  :hover {
    border-bottom-color: var(--highlight)
  }
`