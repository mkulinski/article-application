import React, { PropTypes } from 'react';

import '../styles/follow.scss';


const Follow = ({ follow }) => {
  const followText = follow ? 'Following' : 'Follow';
  const isActive = follow ? 'button-active' : null;
  const className = `follow-container ${isActive}`
  return (
    <button className={className}>
      {followText}
    </button>
  );
};

Follow.propTypes = {
  follow: PropTypes.bool.isRequired,
};

export default Follow;
