import React, { PropTypes } from 'react';

import '../styles/text.scss';


const Text = ({ value, className }) => {
  return (
    <p className={className}>
      {value}
    </p>
  );
};

Text.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Text;
