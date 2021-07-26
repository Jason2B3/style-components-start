// import React from "react";
import styled from "styled-components";
import React, { useState } from "react";
//#—————————————————————【 STYLED COMPONENTS 】——————————————————————————
const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  background-color: ${(props) => props.theme.colors.light};
`;
const StyledButton2 = styled(StyledButton)`
  font-size: 4.8rem;
`;

function Button(props) {
  const [validity, setValidity] = useState(true);
  const [btnText, setBtnText] = useState("valid");

  const validHandler = function () {
    // Switch validity upon button press
    if (validity) {
      setBtnText("invalid"); // change button text
      setValidity(false); // update the stateful variable
      console.log("valid -> invalid");
      return;
    }
    if (!validity) {
      setBtnText("valid");
      setValidity(true);
      console.log("invalid -> valid");
      return;
    }
  };

  return (
    <div>
      <StyledButton isValid={validity} onClick={validHandler}>
        {btnText}
      </StyledButton>
      <StyledButton2>valid</StyledButton2>
    </div>
  );
}
export default Button;
