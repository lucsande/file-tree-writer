import styled from "styled-components";

export const FileTreeContainer = styled.div`
  background-color: #eff0f1;
  border: 0.1rem solid #d0caca;
  border-top-width: 0;
  border-radius: 0 0 5px 5px ;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
  font-size: 13px;
  padding: 1.5rem 1rem 2rem;
  min-width: 8rem;
  
  @media (min-width: 1100px) {
    border-top-width: 0.1rem;
    border-left-width: 0;
    border-radius: 0px 5px 5px 0;
  }
`;

export const FileTreeLine = styled.pre`
  margin: 0.1rem;
`;
