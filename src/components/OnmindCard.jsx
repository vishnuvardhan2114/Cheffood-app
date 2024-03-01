import React from 'react';
import { ON_MIND } from '../utils/constants';
const OnmindCard = (props) => {
  const { bannerData } = props;
  const { imageId } = bannerData;
  return (
    <div className="onMind-container">
      <img className="onmind-img" alt="card-img" src={ON_MIND + imageId} />
    </div>
  );
};

export default OnmindCard;
