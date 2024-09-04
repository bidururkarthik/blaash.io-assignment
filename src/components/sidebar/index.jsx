import React from "react";
import {
  StyledSidebarItemsContainer,
  StyledSidebarContainer,
  StyledSidebarHeader,
  StyledSidebarToggleButton,
  StyledToggleBtnCircle,
  StyledSidebarItem,
  StyledDownArrowIcon,
  StyledSidebarOpenItem,
  StyledSidebarOpenItemLayerOne,
  StyledSidebarOpenItemLayerTwo,
  StyledSidebar,
} from "./sidebar.styled";
import LeftArrow from "../../assets/sidebar/arrow.svg";
import BlaashLogo from "../../assets/sidebar/blaash.svg";
import RevenueIcon from "../../assets/sidebar/revenue.svg";
import { STRINGS, SidebarItems } from "../../constants";

const Sidebar = () => {
  return (
      <StyledSidebarContainer>
        <StyledSidebarHeader>
          <img src={BlaashLogo} />
        </StyledSidebarHeader>
        <StyledSidebarItemsContainer>
          {SidebarItems.map((item) => {
            if (item.upArrow) {
              return (
                <StyledSidebarOpenItem>
                  <StyledSidebarOpenItemLayerOne>
                    <img src={item.icon} />
                    <span>{item.text}</span>
                    <StyledDownArrowIcon src={item.upArrowIcon} />
                  </StyledSidebarOpenItemLayerOne>
                  <StyledSidebarOpenItemLayerTwo>
                    {STRINGS.SIDEBAR_OPEN_TEXT}
                  </StyledSidebarOpenItemLayerTwo>
                </StyledSidebarOpenItem>
              );
            } else {
              return (
                <StyledSidebarItem>
                  <img src={item.icon} />
                  <span>{item.text}</span>
                  <StyledDownArrowIcon src={item.downArrowIcon} />
                </StyledSidebarItem>
              );
            }
          })}
        </StyledSidebarItemsContainer>
        <StyledSidebarToggleButton>
          <StyledToggleBtnCircle>
            <img src={LeftArrow} />
          </StyledToggleBtnCircle>
        </StyledSidebarToggleButton>
      </StyledSidebarContainer>
  );
};

export default Sidebar;
