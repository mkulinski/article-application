import React, { PropTypes } from 'react';

import '../styles/topic.scss';


const Topic = ({ name }) => {
  return (
    <div className="topic-container">
      <p>{name}</p>
    </div>
  );
};

Topic.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Topic;
