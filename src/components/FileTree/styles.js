import styled from "styled-components";

export const FileTreeContainer = styled.div`
  position: relative;
  background-color: #eff0f1;
  border: 0.1rem solid #d0caca;
  border-top-width: 0;
  border-radius: 0 0 5px 5px;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
  font-size: 13px;
  padding: 1.5rem 1rem 2rem;
  min-width: 8rem;

  @media (min-width: 500px) {
    border-top-width: 0.1rem;
    border-left-width: 0;
    border-radius: 0px 5px 5px 0;

    &:hover #copy-icon {
      opacity: 0.6;
    }
  }
`;

export const CopyIconContainer = styled.div`
  position: absolute;
  display: inline-block;
  right: 1.5rem;
  top: 0.5rem;

  #copy-icon {
    top: 0.75rem;
    right: 0rem;
    font-size: 1.1rem;
    text-align: right;
    opacity: 0.6;
  }

  @media (min-width: 500px) {
    #copy-icon {
      opacity: 0;
    }
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 8rem;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: -6rem;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const FileTreeLine = styled.pre`
  margin: 0.1rem;
`;
