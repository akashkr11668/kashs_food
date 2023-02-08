import {
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavList
} from './NavbarStyle'
import { BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Navbar ({ sideMenu, setTheme }) {
  return (
    <NavbarContainer>
      <NavList sideMenu={sideMenu}>
        <NavItem>
          <NavLink to='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          {/* <Link href='' > */}
          <NavLink to='#Menu'>Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='#Services'>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='#Reviews'>Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#Chefs'>
            <a href='#Chefs'>Chefs</a>
          </NavLink>
        </NavItem>

        <NavIcon onClick={setTheme}>
          <BsSun />
        </NavIcon>
      </NavList>
    </NavbarContainer>
  )
}
