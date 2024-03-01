import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";


const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerPostList postStyle="STYLE_FIVE" col={3}  row={2} gap={30} />
      <ShimmerPostList postStyle="STYLE_FIVE" col={3}  row={2} gap={30} />
    </div>
  )
}

export default Shimmer