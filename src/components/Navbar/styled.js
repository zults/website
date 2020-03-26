import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`

const navbarAnim = keyframes`
  0% {
    left: 100vw;
  }
  100% {
    left: 0w;
  }
`

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const NavToggleOpen = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;
  transition: all .3s linear;
  animation: ${opacityAnim} .3s linear;
  color: var(--light);
`

export const NavToggleClose = styled(NavToggleOpen)`
  margin-top: 3vh;

`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 40%;
  bottom: 0;
  width: 60%;
  background: var(--dark);
  color: var(--light);
  z-index: 999;
  transition: all .3s linear;
  animation: ${navbarAnim} .3s linear;
  padding-left: 5vw;
  padding-right: 5vw;

  ${media.greaterThan("large")`
  left: 75%;
  width: 25%;
  `
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 34vh;
  margin-top: 10vh;
  justify-content: space-between;
  align-items: flex-start;  
`

export const NavItem = styled.li`
  list-style: none;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--light);
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: var(--highlight) 3px solid;
  transition: all .3s;

  span {
    background: var(--highlight);
    padding: .4em .8em;
    border-radius: 5px;
    border: none;
  }
`