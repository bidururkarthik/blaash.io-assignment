import styled from "styled-components";

export const StyledPlaylistCardContainer = styled.div`
  position: relative;
  height: fit-content;
  cursor: pointer;
`;

export const StyledPlaylistCardDescription = styled.span`
  position: absolute;
  left: -0.5px;
  top: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledPlaylistCardFooter = styled.footer`
  background-color: #1c1c23;
  height: 29px;
  width: 100%;
  border-radius: 0 0 25px 25px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  top: 135px;
  font-size: 14px;
  font-weight: 500;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledPlaylistDescriptionIcon = styled.img`
  position: absolute;
  right: 0;
`;
