import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/articleActions';

import Loading from '../components/Loading';
import Article from '../components/Article';

import '../styles/articles-page.scss';


class ArticlesPage extends Component {
  componentDidMount() {
    this.props.actions.fetchArticles();
  }

  createArticles = () => {
    return this.props.articles.allArticles.map((article, index) => (
      <Article
        {...article}
        key={index}
      />
    ));
  }

  render() {
    const loading = this.props.articles.isFetching ? <Loading /> : null;
    const articles = this.createArticles();
    // console.log('this.props ', this.props);
    return (
      <div className="component-container">
        <h1>ArticlesPage</h1>
        {loading}
        {articles}
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
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
