import styled from "styled-components";

export const FilesFormContainer = styled.div`
  background-color: #fff;
  padding: 1.25rem 0.75rem 2rem;
  min-heigth: calc(100% - 3px);
  border: #ffc89b 0.1rem solid;
  border-radius: 5px 5px 0 0;
  flex-grow: 1;
  

  @media (min-width: 1100px) {
    border-radius: 5px 0px 0 5px;
  }
`;

export const Line = styled.div`
  max-height: 1000rem;
  max-width: 1000rem;
  transition: max-width 1.5s;
  transition: max-height 2s;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0rem;
  padding-left: ${props => props.col * 1}rem;
  position: relative;

  @media (min-width: 500px) {
    padding-left: ${props => props.col * 2}rem;
    flex-direction: row;
  }

  &:hover {
    background-color: #ffe0c6;
  }

  &:hover input {
    background-color: #ffe0c6;
  }

  &:hover svg {
    z-index: 50;
    opacity: 1;
    transition: opacity 0.75s;
  }
  &:hover .file-plus-btn {
    transition-delay: 0.05s;
  }
  &:hover .folder-plus-btn {
    transition-delay: 0.2s;
  }

  @media (min-width: 500px) {
    &:hover svg {
      transition: opacity 1s;
    }
    &:hover .file-plus-btn,
    &:hover .folder-plus-btn {
      transition-delay: 0s;
    }
  }
`;

export const Buttons = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #f48024;
  transition: opacity 0.2s;

  position: absolute;
  right: -2.5rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;

  svg {
    z-index: -50;
    opacity: 0;
    margin-right: 0.3rem;
    margin-top: 1.3rem;
  }

  @media (min-width: 500px) {
    position: static;
    flex-direction: row;

    svg {
      margin: auto 0.2rem;
    }
  }
`;

export const Input = styled.input`
  border-color: rgba(0, 0, 0, 0);
  margin-left: 1.1rem;
  position: relative;
  font-family: "PT Sans", sans-serif;
  color: #242729;
  font-size: 0.9rem;
  max-width: 6rem;
  display: block;

  &:focus {
    outline: 2px solid #fdcf30;
    background-color: #fff !important;
  }

  @media (min-width: 500px) {
    display: inline-block;
    margin-left: 0.1rem;
    max-width: none;
  }
`;

export const MidDot = styled.span`
  width: 1rem;
  display: inline-block;
  text-align: center;
  opacity: 0.6;
`;
