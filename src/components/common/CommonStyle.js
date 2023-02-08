import styled from "styled-components";
import { device } from "styles/theme";

export const Section = styled.div `
  padding: 3rem 0 2rem;
  @media ${device.laptop} {
    padding: 9.6rem 0 3%;
  }
`;

export const Container = styled.div `
  max-width: 968px;
  margin: 0 2.4rem;

  @media ${device.laptop} {
    margin: 0 auto;
  }
`;

export const StyledButton = styled.button `
  background-color: ${(props) => props.theme.BtnBg};
  font-weight: 600;
  border-radius: 3rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: 0.3s;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.MikadoYellow};
  }
  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.3rem 2.4rem;
  }
`;

export const CtaBtn = styled(StyledButton)
`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.MikadoYellow};
  color: ${(props) => props.theme.TextColor};

  &:hover {
    color: #fff;
  }
`;