import styled from "styled-components";

export const FilesFormContainer = styled.div`
  background-color: #fff;
  padding: 0.75rem 0.75rem;
  flex-grow: 1;
  min-heigth: calc(100% - 3px);
  border: #ffc89b 0.1rem solid;
  border-radius: 0 5px 5px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0rem;
  padding-left: ${props => props.col * 2}rem;
  position: relative;

  &:hover {
    background-color: #ffe0c6;
  }

  &:hover input {
    background-color: #ffe0c6;
  }

  &:hover div {
    opacity: 1;
    transition: opacity 1s;
  }
`;

export const Buttons = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 50;
  color: #f48024;
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;

  svg {
    margin-right: 0.3rem;
  }
`;

export const Input = styled.input`
  border-color: rgba(0, 0, 0, 0);
  margin-left: 0.1rem;
  position: relative;
  max-width: 6rem;
  font-family: "PT Sans", sans-serif;
  color: #242729;
  font-size: 0.9rem;

  &:focus {
    outline: 2px solid #fdcf30;
    background-color: #fff!important;
  }
`;

export const MidDot = styled.span`
  width: 1rem;
  display: inline-block;
  text-align: center;
  opacity: 0.6;
`;
