import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators';

import '../styles/articles-page.scss';


class ArticlesPage extends Component {
  componentDidMount() {
    this.props.actions.fetchArticles();
  }

  render() {
    console.log('this.props ', this.props);
    return (
      <div className="component-container">
        <h1>ArticlesPage</h1>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles
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
)(ArticlesPage);
