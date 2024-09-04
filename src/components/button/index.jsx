import React from "react";
import { StyledButton, StyledButtonIcon } from "./button.styled";

const Button = ({ label, icon, flag, margin }) => {
  return (
    <StyledButton flag={flag} margin={margin}>
      <StyledButtonIcon src={icon} />
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
