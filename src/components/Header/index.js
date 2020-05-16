import React from "react";
import { Title, SubTitle } from "./styles";

function Header() {
  return (
    <>
      <Title><span className='lighter-title'>Simple</span><span>FileTree</span><span>Writer</span></Title>
      <SubTitle>Improve your StackOverflow questions with this simple directory structure generator </SubTitle>
    </>
  );
}

export default Header;
