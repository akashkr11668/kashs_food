import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div ``;

export const NavList = styled.ul `
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  transition: 0.5s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5.1rem;
    padding: 5rem;
    background-color: ${(props) => props.theme.ContainerColor};
    position: fixed;
    width: 358px;
    min-height: 100vh;
    top: 55px;
    box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
    right: ${(props) => (props.sideMenu ? "0" : "-200%")};
  }
`;

export const NavItem = styled.li ``;

export const NavLink = styled(Link)
`
  color: ${(props) => props.theme.TitleColor};
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.MikadoYellow};
  }
`;

export const NavIcon = styled.div `
  svg {
    font-size: 2.2rem;
    cursor: pointer;
    fill: ${(props) => props.theme.TitleColor};
  }
`;