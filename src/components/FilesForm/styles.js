import styled from "styled-components";

export const FilesFormContainer = styled.div`
  margin: 3rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: ${props => props.col * 2}rem;
  position: relative;

  &:hover div {
    opacity: 1;
  }
`;

export const AddButtons = styled.div`
  position: absolute;
  font-weight: bold;
  left: -2.2rem;
  color: #62a962;
  opacity: 0;
  transition: opacity 0.2s;

  svg {
    margin-right: 0.2rem
  }
`;

export const Input = styled.input`
  border-color: rgba(0, 0, 0, 0);
  margin-left: 0.1rem;
  position: relative;
  max-width: 6rem;

  &:focus {
    outline: 2px solid #ffe281;
  }
`;

export const DeleteButton = styled.div`
  margin-left: 1rem;
  color: #e44343;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const MidDot = styled.span`
  width: 1rem;
  text-align: center;
  opacity: 0.6;
`;
