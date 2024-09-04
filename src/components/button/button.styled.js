import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ flag }) => (flag ? "#017EFA" : "transparent")};
  font-weight: ${({ flag }) => (flag ? "600" : "400")};
  margin: ${({ margin }) => (margin ? "auto" : "")};
  padding: 8px 10px;
  border: 1px solid var(--blue-color);
  color: white;
  font-size: 14px;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`;

export const StyledButtonIcon = styled.img`
  height: 20px;
  width: 20px;
`;
