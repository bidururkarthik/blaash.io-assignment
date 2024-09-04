import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 67px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-color);
  border-radius: 12px;
`;

export const StyledLeftHeader = styled.span`
  font-weight: 500;
  margin-left: 12px;
`;

export const StyledRightHeader = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 12px;
`;

export const StyledRightUser = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
`;

export const StyledUserImage = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

export const StyledNotificationIconContainer = styled.span`
  border: 1px solid #484851;
  border-radius: 10px;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchContainer = styled.div`
  height: 37px;
  width: 194px;
  border: 1px solid #484851;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  justify-content: space-between;
`;

export const StyledSearchPlaceholder = styled.span`
  height: 17px;
  width: 110px;
  font-size: 14px;
  line-height: 16.59px;
  color: #c0c0d680;
`;

export const StyledSearchIconContainer = styled.div`
  height: 27px;
  width: 28px;
  border-radius: 10px;
  border: 1px solid #484851;
  display: flex;
  align-items: center;
  justify-content: center;
`;
