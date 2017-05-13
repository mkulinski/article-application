import React, { PropTypes } from 'react';

import '../styles/articles-page.scss';


const ArticlesPage = (props) => {
  return (
    <div className="component-container">
      <h1>Articles Page</h1>
    </div>
  );
};

ArticlesPage.propTypes = {
  articles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ArticlesPage;
