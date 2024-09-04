import React from "react";
import {
  StyledInputText,
  StyledProductListContainer,
  StyledProductLists,
  StyledSliderContainer,
  StyledSliderSearchInput,
  StyledSliderUpperContainer,
  StyledSliderVideoStatus,
  StyledVideoStatusButton,
} from "./slider.styled";
import ActiveIcon from "../../assets/slider/active.svg";
import InactiveIcon from "../../assets/slider/inactive.svg";
import ProductCard from "../productCard";
import Button from "../button";
import UpdateIcon from "../../assets/slider/update.svg";
import { STRINGS } from "../../constants";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";

const Slider = ({ thumbnail, description }) => {
  const feedsLoading = useSelector((state) => state?.playlists?.feedsLoading);
  const feedsData = useSelector((state) => state?.playlists?.feedsData);

  return (
    <StyledSliderContainer>
      <StyledSliderUpperContainer>
        <span>{thumbnail}</span>
        <StyledSliderSearchInput>
          <StyledInputText>{description}</StyledInputText>
        </StyledSliderSearchInput>
        <span>{STRINGS.VIDEO_STATUS}</span>
        <StyledSliderVideoStatus>
          <StyledVideoStatusButton>
            <img src={ActiveIcon} />
            <span>{STRINGS.ACTIVE}</span>
          </StyledVideoStatusButton>
          <StyledVideoStatusButton>
            <img src={InactiveIcon} />
            <span>{STRINGS.INACTIVE}</span>
          </StyledVideoStatusButton>
        </StyledSliderVideoStatus>
      </StyledSliderUpperContainer>
      <StyledProductListContainer>
        <span>{STRINGS.PRODUCT_LIST}</span>
        <StyledProductLists>
          {!feedsLoading &&
            feedsData?.map((feed) => (
              <ProductCard
                title={feed.Thumbnail_Title}
                time={feed.Video_duration}
                image={feed.Thumbnail_URL}
              />
            ))}
          {feedsLoading && <Loader />}
        </StyledProductLists>
      </StyledProductListContainer>
      <Button
        label={STRINGS.UPDATE_PLAYLIST}
        flag={true}
        icon={UpdateIcon}
        margin={true}
      />
    </StyledSliderContainer>
  );
};

export default Slider;
