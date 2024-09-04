import React from "react";
import {
  StyledProductCardContainer,
  StyledProductDetailsSection,
  StyledProductImage,
  StyledProductRectangle,
  StyledProductTimeContainer,
} from "./productCard.styled";
import RectangleIcon from "../../assets/slider/rectangle.svg";

const ProductCard = ({ image, title, time }) => {
  return (
    <StyledProductCardContainer>
      <StyledProductImage src={image} />
      <StyledProductDetailsSection>
        <span>{title}</span>
        <StyledProductTimeContainer>{time}</StyledProductTimeContainer>
        <span>Products Attached : 5</span>
      </StyledProductDetailsSection>
      <StyledProductRectangle src={RectangleIcon} />
    </StyledProductCardContainer>
  );
};

export default ProductCard;
