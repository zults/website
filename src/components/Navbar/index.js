import React, { useState } from 'react'
import { IoMdMenu, IoIosCloseCircleOutline } from 'react-icons/io'

import * as S from './styled'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.NavContainer>
      {
        isActive ?
          null :
          <S.NavToggleOpen onClick={() => setIsActive(!isActive)}>
            <IoMdMenu fontSize={40} />
          </S.NavToggleOpen>
      }
      {
        isActive ?
          <S.NavMenu>
            <S.NavToggleClose onClick={() => setIsActive(!isActive)}>
              <IoIosCloseCircleOutline fontSize={40} />
            </S.NavToggleClose>
            <S.NavList>
              <S.NavItem>
                <S.NavLink
                  href="/#contato"
                  title="Vai para o Contato">
                  <span>
                    Contato
                    </span>
                </S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink
                  href="https://www.facebook.com/agenciazults/"
                  title="Vai para o Facebook"
                  target="_blank">
                  Facebook
                </S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink
                  href="https://www.instagram.com/agenciazults/"
                  title="Vai para o Instagram"
                  target="_blank">
                  Instagram
                </S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink
                  href="https://www.linkedin.com/company/agenciazults"
                  title="Vai para o LinkedIn"
                  target="_blank">
                  LinkedIn
                </S.NavLink>
              </S.NavItem>
            </S.NavList>
          </S.NavMenu> : null
      }
    </S.NavContainer>
  )
}

export default Navbar