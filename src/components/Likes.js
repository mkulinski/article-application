import React, { PropTypes } from 'react';
import Heart from '../img/favorite-heart-button.svg';

import '../styles/likes.scss';


const Likes = ({ likesCount, className }) => {
  return (
    <div className={className}>
      <img src={Heart} alt="heart" className="likes-image" />
      <span className="likes-text">{likesCount}</span>
    </div>
  );
};

Likes.propTypes = {
  likesCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Likes;
