import styled from "styled-components";

export const StyledSidebarContainer = styled.aside`
  background-color: var(--secondary-color);
  border-radius: 12px;
  position: relative;

`;

export const StyledSidebarToggleButton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  position: absolute;
  right: -14px;
  top: 18px;
  cursor: pointer;
`;

export const StyledToggleBtnCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #737382;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSidebarHeader = styled.header`
  position: absolute;
  top: 20px;
  left: 30px;
`;

export const StyledSidebarItemsContainer = styled.section`
  width: 250px;
  position: relative;
  top: 80px;
  height: calc(100% - 88px);
  display: flex;
  flex-flow: column;
  gap: 2px;
`;

export const StyledSidebarItem = styled.article`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  margin-left: 29px;
  font-size: 14px;
  font-weight: 500;
  color: #828293;
  position: relative;
`;

export const StyledDownArrowIcon = styled.img`
  position: absolute;
  left: 196px;
`;

export const StyledSidebarOpenItem = styled.article`
  display: flex;
  flex-flow: column;
  margin-left: 8px;
  border-radius: 10px 0 0 10px;
  padding: 12px 15px 15px 15px;
  border: 1px solid #017efa;
  border-right: none;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  gap: 15px;
`;

export const StyledSidebarOpenItemLayerOne = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 13px;
`;

export const StyledSidebarOpenItemLayerTwo = styled.div`
  padding: 10px 6px;
  border-radius: 6px;
  background-color: #5a5a68;
  font-size: 13px;
`;
