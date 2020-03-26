import styled from 'styled-components'
import media from 'styled-media-query'

export const Contact = styled.section`
  background-color: var(--highlight);
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
`

export const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--light);
  margin-bottom: .5rem;
  text-align: center;
`

export const ContactDescription = styled.p`
  font-size: 1rem;
  color: var(--light);
  margin-bottom: 2rem;
  text-align: center;
`

export const ContactInfo = styled.a`
  font-size: 1.3rem;
  color: var(--light);
  text-decoration: none;
  display: block;
  margin-top: 1em;
  text-align: center;

  ${media.greaterThan("large")`
    font-size: 2rem;
  `
  }
`