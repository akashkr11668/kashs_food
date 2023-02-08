import styled from "styled-components";
import { device } from "styles/theme";

export const HeroContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  row-gap: 2rem;
  height: 100vh;

  img {
    height: 200px;
    width: 200px;
    justify-self: center;
    align-self: flex-end;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 9.6rem;
    text-align: left;

    img {
      height: 200px;
      width: 300px;
      order: 1;
      align-self: center;
    }
  }
`;

export const HeroTitle = styled.h1 `
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 0.85rem;
  color: ${(props) => props.theme.TitleColor};
`;

export const HeroDescription = styled.p `
  line-height: 1.8;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.TextColor};
`;