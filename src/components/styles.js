import styled from "styled-components";

export const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4%;
  background-color: #fdcf30;
  min-height: 100vh;

  @media (min-width: 500px) {
    padding: 0 7%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  min-width: 5px;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  margin: 50px 0;
  padding: 30px 30px 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (min-width: 500px) {
    padding: 50px 50px;
  }
  `;
  
  export const FilesContainer = styled.div`
  align-items: stretch;
  border-radius: 5px;
  
  @media (min-width: 1100px) {
    display: flex;
    flex-display: row;
  }
`;
