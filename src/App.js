import styled from "styled-components";
import Button from "./components/Button";
import React, { useState } from "react";

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  
  return (
    <MainWrapper>
      <p>I should be blue!!</p>
      <Button></Button>
    </MainWrapper>
  );
}
export default App;
