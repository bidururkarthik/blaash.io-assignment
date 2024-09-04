import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <Skeleton
      height="164px"
      width="243px"
      baseColor="grey"
      borderRadius="24px"
      highlightColor="darkGrey"
    />
  );
};

export default SkeletonLoader;
