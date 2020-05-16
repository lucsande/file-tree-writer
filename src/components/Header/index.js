import React from "react";
import { Title, SubTitle } from "./styles";

function Header() {
  return (
    <>
      <Title>
        <span className="lighter-title">Simple</span>
        <span className='2-line-breaker'>
          <span className='3-line-breaker'>FileTree</span>
          <span className='3-line-breaker'>Writer</span>
        </span>
      </Title>
      <SubTitle>
        Improve your StackOverflow questions with this simple directory structure generator{" "}
      </SubTitle>
    </>
  );
}

export default Header;
