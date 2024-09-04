import React from "react";
import {
  StyledPlaylistCardContainer,
  StyledPlaylistCardDescription,
  StyledPlaylistCardFooter,
  StyledPlaylistDescriptionIcon,
} from "./playlistCard.styled";
import PlaylistsIcon from "../../assets/home/playlists.svg";
import HalfCircleIcon from "../../assets/home/halfCircle.svg";
import DescriptionIcon from "../../assets/home/description.svg";

const PlaylistCard = ({ image, name, videos, onClick }) => {
  return (
    <StyledPlaylistCardContainer onClick={onClick}>
      <img src={image} loading="lazy" />
      <StyledPlaylistDescriptionIcon src={DescriptionIcon} />
      <StyledPlaylistCardDescription>
        <img src={HalfCircleIcon} />
        <span>{name}</span>
      </StyledPlaylistCardDescription>
      <StyledPlaylistCardFooter>
        <img src={PlaylistsIcon} />
        <span>{videos} Videos</span>
      </StyledPlaylistCardFooter>
    </StyledPlaylistCardContainer>
  );
};

export default PlaylistCard;
