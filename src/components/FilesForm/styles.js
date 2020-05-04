import styled from "styled-components";

export const FilesFormContainer = styled.div`
  margin: 3rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-left: ${props => props.col * 2}rem;
`;

export const Input = styled.input`
  border-color: rgba(0, 0, 0, 0);
  margin-left: 0.1rem;

  &:focus {
    outline: 2px solid #ffe281;
  }
`;

export const MidDot = styled.span`
  width: 1rem;
  text-align: center;
  opacity: 0.6;
`;
