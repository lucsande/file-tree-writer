import styled from "styled-components";

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0 7%;
  background-color: #fdcf30;
  min-height: 100vh;
`;

export const Container = styled.div`
  border-radius: 5px;
  background-color: #fff;
  max-width: 1200px;
  margin: 50px 0;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const FilesContainer = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 5px;
`;
