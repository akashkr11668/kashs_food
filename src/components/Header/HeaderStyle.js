import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/theme";

export const Wrapper = styled.div `
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(3px);
`;

export const HeaderContainer = styled.div `
  height: calc(2.8rem + 2.4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
  }

  @media ${device.tablet} {
    height: calc(4.8rem + 2.4rem);

    button {
      display: block;
    }
  }
`;

export const Hamburger = styled.div `
  font-size: 2rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const HeaderTitle = styled(Link)
`
  color: ${(props) => props.theme.TitleColor};
  font-weight: 600;
  font-size: 1.6rem;
`;