import styled from "styled-components";

export const Title = styled.h1`
  color: #f48024;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 0;

  span {
    display: block;
    line-height: 3rem;
  }
  
  .lighter-title {
    font-size: 2.7rem;
    font-weight: 400;
  }
  
  @media (min-width: 500px) {
    span {
      display: inline-block;
    }
  }
`;

export const SubTitle = styled.h2`
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 0.25rem;
  margin-bottom: 3rem;
`;
