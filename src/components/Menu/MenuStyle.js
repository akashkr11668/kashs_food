import styled from "styled-components";
import { device } from "styles/theme";

export const MenuContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 4.5rem;
  }
`;

export const MenuTitle = styled.h1 `
  font-weight: bold;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.TitleColor};
  text-align: center;
`;

export const MenuCard = styled.div `
  display: grid;
  row-gap: 1.6rem;
  padding: 3.2rem 2.2rem;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.ContainerColor};
  text-align: center;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  margin-top: 1rem;

  img {
    width: 130px;
    justify-self: center;
    margin-bottom: 0.5rem;
  }

  svg {
    font-size: 2rem;
    fill: ${(props) => props.theme.BtnBg};
    cursor: pointer;
  }
`;

export const MenuName = styled.h2 ``;

export const MenuDescription = styled.p `
  line-height: 1.2;
  color: ${(props) => props.theme.TextColor};
  margin-top: 0.8rem;
  text-align: center;
`;

export const MenuCta = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const MenuPrice = styled.p `
  font-weight: 600;
  color: ${(props) => props.theme.EerieBlack};
`;