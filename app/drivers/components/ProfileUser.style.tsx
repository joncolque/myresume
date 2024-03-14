import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  color: var(--primary);

  @media only screen and (max-width: 768px) {
    font-size:  var(--md);
  }

  @media only screen and (min-width: 769px) {
    font-size:  var(--lg);
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size:  var(--md);
  }

  @media only screen and (min-width: 769px) {
    font-size:  var(--lg);
  }
`;
