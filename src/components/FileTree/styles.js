import styled from "styled-components";

export const FileTreeContainer = styled.div`
  background-color: #eff0f1;
  border: 0.1rem solid #d0caca;
  border-right-width: 0;
  border-radius: 5px 0px 0px 5px;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
  font-size: 13px;
  padding: 1rem 1rem;
  min-height: calc(100% - 2.2rem);
  min-width: 8rem;
`;

export const FileTreeLine = styled.pre`
  margin: 0.1rem;
`
