import React, { PropTypes } from 'react';
import check from "../img/follow.svg";
import x from "../img/unfollow.svg";

import '../styles/follow.scss';


const Follow = ({ follow }) => {
  const followIcon = follow ? check : x;
  const followText = follow ? 'Following' : 'Not Following';
  return (
    <div className="followContainer">
      <img src={followIcon} alt="follow/unfollow icon" />
      <span>{followText}</span>
    </div>
  );
};

Follow.propTypes = {
  follow: PropTypes.bool.isRequired,
};

export default Follow;
