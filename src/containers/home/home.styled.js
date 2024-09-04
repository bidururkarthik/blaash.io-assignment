import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledHomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 0 14px 0;
`;

export const StyledHomeMainContainer = styled.main`
  display: flex;
  gap: 12px;
  height: 435px;
`;

export const StyledMainCardsContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 16px;
  overflow-y: scroll;
`;

export const StyledPlaylistsCardWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;
