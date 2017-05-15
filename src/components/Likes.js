import React, { PropTypes } from 'react';
import Text from './Text';
import Heart from '../img/favorite-heart-button.svg';

import '../styles/likes.scss';


const Likes = ({ likesCount, className }) => {
  return (
    <div className={className}>
      <img src={Heart} alt="heart" className="likes-image" />
      <Text value={likesCount} className="likes-text" />
    </div>
  );
};

Likes.propTypes = {
  likesCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Likes;
