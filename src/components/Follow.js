import React, { PropTypes } from 'react';

import '../styles/follow.scss';


const Follow = ({ follow }) => {
  const followText = follow ? 'Following' : 'Follow';
  const isActive = follow ? 'button-active' : null;
  const className = `follow-button ${isActive}`;
  return (
    <div className="follow-container">
      <button className={className}>
        {followText}
      </button>
    </div>
  );
};

Follow.propTypes = {
  follow: PropTypes.bool.isRequired,
};

export default Follow;
