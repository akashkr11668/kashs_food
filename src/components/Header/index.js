import { Container, StyledButton } from 'components/common/CommonStyle'
import Navbar from 'components/Navbar'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Hamburger, HeaderContainer, HeaderTitle, Wrapper } from './HeaderStyle'

export default function Header ({ setTheme }) {
  const [sideMenu, setSideMenu] = useState(false)
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderTitle to='/'>Foody</HeaderTitle>
          <Navbar setTheme={setTheme} sideMenu={sideMenu} />
          <StyledButton>Reserve Table</StyledButton>

          <Hamburger onClick={() => setSideMenu(!sideMenu)}>
            <GiHamburgerMenu />
          </Hamburger>
        </HeaderContainer>
      </Container>
    </Wrapper>
  )
}
