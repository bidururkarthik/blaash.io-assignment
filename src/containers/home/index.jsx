import React, { useEffect, useState } from "react";
import {
  StyledHomeContainer,
  StyledHomeHeader,
  StyledHomeMainContainer,
  StyledMainCardsContainer,
  StyledPlaylistsCardWrapper,
} from "./home.styled";
import Button from "../../components/button";
import LinkIcon from "../../assets/home/link.svg";
import PlaylistCard from "../../components/playlistCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlaylists, getFeedsByPlaylist } from "../../redux/actions";
import { PlaylistBackgoundImages, STRINGS } from "../../constants";
import Slider from "../../components/slider";
import SkeletonLoader from "../../components/skeleton";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const playlistsLoading = useSelector(
    (state) => state?.playlists?.playlistsLoading
  );
  const allPlaylists = useSelector(
    (state) => state?.playlists?.data?.data || []
  );
  const feeds = useSelector((state) => state?.playlists?.feedsData);

  useEffect(() => {
    dispatch(getAllPlaylists());
  }, []);

  const handlePlaylistClick = (
    postIds,
    thumbnail_title,
    thumbnail_description
  ) => {
    dispatch(getFeedsByPlaylist(postIds));
    setThumbnail(thumbnail_title);
    setDescription(thumbnail_description);
    setIsSliderOpen(true);
  };

  return (
    <StyledHomeContainer>
      <StyledHomeHeader>
        <span>{STRINGS.HOME_HEADER_TEXT}</span>
        <Button
          icon={LinkIcon}
          label={STRINGS.HOME_HEADER_BTN_LABEL}
          flag={true}
        />
      </StyledHomeHeader>
      <StyledHomeMainContainer>
        <StyledMainCardsContainer>
          <StyledPlaylistsCardWrapper>
            {!playlistsLoading &&
              allPlaylists?.map((playlist, index) => (
                <PlaylistCard
                  image={PlaylistBackgoundImages?.[index]}
                  name={playlist.Name}
                  videos={playlist.Post_Ids.length}
                  onClick={() =>
                    handlePlaylistClick(
                      playlist.Post_Ids,
                      playlist.Name,
                      playlist.Description
                    )
                  }
                />
              ))}

            {playlistsLoading &&
              [1, 2, 3, 4, 5, 6]?.map(() => <SkeletonLoader />)}
          </StyledPlaylistsCardWrapper>
        </StyledMainCardsContainer>
        {isSliderOpen && (
          <Slider thumbnail={thumbnail} description={description} />
        )}
      </StyledHomeMainContainer>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
