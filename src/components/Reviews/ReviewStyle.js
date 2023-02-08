import styled from "styled-components";
import { device } from "styles/theme";

export const ReviewData = styled.div `
  .carousel .slide {
    text-align: left;
  }
  .carousel .carousel-slider {
    z-index: -1;
  }

  .carousel .slide img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const ReviewContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2rem;
  padding: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    width: 100%;
  }
`;

export const SectionTitle = styled.h1 `
  text-align: center;
`;

export const ReviewCard = styled.div `
  display: grid;
  row-gap: 1.6rem;
  border-radius: 1.6rem;
  padding: 3.2rem 2.2rem;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  background-color: ${(props) => props.theme.ContainerColor};
  width: 100%;
`;

export const CustomerReview = styled.p `
  color: ${(props) => props.theme.TextColor};
  line-height: 1.4;
`;

export const CustomerName = styled.h4 `
  font-size: 1.4rem;
  color: ${(props) => props.theme.TextColor};
  font-weight: 600;
`;