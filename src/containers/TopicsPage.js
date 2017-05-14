import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/topicActions';

import Loading from '../components/Loading';
import Topic from '../components/Topic';

import '../styles/topics-page.scss';


class TopicsPage extends Component {
  componentDidMount() {
    this.props.actions.fetchTopics();
  }

  createTopics = () => {
    return this.props.topics.allTopics.map((topic, index) => {
      const follow = this.props.topics.topicsUnFollowed.indexOf(topic.id) === -1;
      return (
        <Topic
          {...topic}
          follow={follow}
          onClick={this.props.actions.unFollowTopic}
          index={index}
          key={index}
        />
      );
    });
  }

  render() {
    const loading = this.props.topics.isFetching ? <Loading /> : null;
    const topics = this.createTopics();
    return (
      <div className="component-container">
        <h1>Topics</h1>
        {loading}
        {topics}
      </div>
    );
  }
}

TopicsPage.propTypes = {
  topics: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsPage);
