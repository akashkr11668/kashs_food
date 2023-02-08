import styled from "styled-components";
import { device } from "styles/theme";

export const ServiceContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;

  img {
    width: 300px;
    justify-self: center;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceTitle = styled.h1 `
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p `
  line-height: 1.2;
  color: ${(props) => props.theme.TextColor};
  margin-bottom: 1rem;
`;

export const ServiceDetails = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
  row-gap: 4rem;
  padding-bottom: 1.2rem;
`;

export const ServiceDetailTitle = styled.p `
  font-weight: 600;
`;