import styled from "styled-components";
import { device } from "styles/theme";

export const ChefsContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media ${device.laptopS} {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

export const SectionTitle = styled.h1 `
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.TitleColor};
  text-align: center;
`;

export const ChefData = styled.div `
  padding: 1.8rem;
  text-align: center;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);

  img {
    width: 200px;
    height: 200px;
    border-radius: 5%;
  }
`;

export const ChefName = styled.p `
  margin-top: 1rem;
  font-weight: 600;
`;