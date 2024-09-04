import styled from "styled-components";

export const StyledProductCardContainer = styled.article`
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
`;

export const StyledProductImage = styled.img`
  margin-left: 8px;
  height: 64px;
  width: 63px;
  border-radius: 8px;
`;

export const StyledProductDetailsSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: 5px;
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0;
`;

export const StyledProductTimeContainer = styled.span`
  padding: 3px 5px;
  border-radius: 10px;
  background-color: rgba(53, 55, 59, 1);
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  width: fit-content;
`;

export const StyledProductRectangle = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
