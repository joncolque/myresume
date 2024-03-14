import styled from "styled-components"

export const AboutMeWeb = styled.p`
  font-size: var(--md);
  text-align: justify;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) {
    
  }
`

export const AboutMePhone = styled.p`
  font-size: var(--sm);
  text-align: justify;
  @media only screen and (max-width: 768px) {
    
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`