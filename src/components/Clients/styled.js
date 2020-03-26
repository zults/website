import styled from 'styled-components'

export const Clients = styled.section`
  background-color: #f8f8ff;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
  max-width: 100%;
`

export const ClientsTitle = styled.h2`
   font-size: 2rem;
  font-weight: bold;
  color: var(--dark);
  margin-bottom: .5rem;
  text-align: center;
`

export const ClientsDescription = styled.p`
  font-size: 1rem;
  color: var(--gray1);
  margin-bottom: 5rem;
  text-align: center;
`

export const TestimonialBlock = styled.blockquote`
  margin: 0;
  box-shadow: 0 15px 25px -7px rgba(0,0,0,.09), 0 -12px 10px -10px rgba(0,0,0,.04);
  border-radius: 5px;
  padding: 2em 2em;
  min-height: 345px;
`

export const Testimonial = styled.p`
  font-size: 1rem;
  color: var(--secondary);
  font-style: italic;
  line-height: 1.1rem;
  
`

export const TestimonialAuthor = styled(Testimonial)`
  color: var(--gray1);
  font-weight: 700;
  margin-top: 2em;
`

export const TestimonialAuthorOrg = styled(TestimonialAuthor)`
  font-weight: 400;
  margin-top: .2em;
`

export const TestimonialStars = styled.div`
  margin-top: .5em;
  color: #fbe100;
`

export const ImgLogo = styled.img`
  opacity: .8;
`