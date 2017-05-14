import React, { Component, PropTypes } from 'react';
import Follow from './Follow';
import Text from './Text';

import '../styles/topic.scss';

class Topic extends Component {
  handleOnClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className="topic-container" onClick={this.handleOnClick}>
        <Text value={this.props.name} className="topic-text" />
        <Follow follow={this.props.follow} />
      </div>
    );
  }
}

Topic.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Topic;
