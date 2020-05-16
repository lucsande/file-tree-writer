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
  margin-bottom: 0.5rem;
  margin-left: ${props => props.col * 2}rem;
  position: relative;

  &:hover div {
    opacity: 1;
    transition: opacity 1s 0.75s;
  }
  `;
  
  export const AddButtons = styled.div`
  font-weight: bold;
  z-index: 50;
  color: #f48024;
  opacity: 0;
  transition: opacity 0.5s 0s;
  
  svg {
    margin-right: 0.2rem;
  }
`;

export const AddFolder = styled.div`
  position: absolute;
  left: 0rem;
  top: -0.7rem;
`;

export const AddFile = styled.div`
  position: absolute;
  left: 0rem;
  bottom: -0.8rem;
`;

export const Input = styled.input`
  background-color: #fff;
  border: red solid;
  border-color: rgba(0, 0, 0, 0);
  margin-left: 0.1rem;
  position: relative;
  max-width: 6rem;
  font-family: "PT Sans", sans-serif;
  color: #242729;
  font-size: 0.9rem;

  &:focus {
    outline: 2px solid #fdcf30;
  }
`;

export const DeleteButton = styled.div`
  margin-left: 0.5rem;
  color: #f48024;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const MidDot = styled.span`
  width: 1rem;
  text-align: center;
  opacity: 0.6;
`;
