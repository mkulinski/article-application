import React, { PropTypes } from 'react';

import '../styles/article.scss';


const Article = ({ title, summary, createdAt, likesCount, url, attribution }) => {
  return (
    <div className="article-container">
      <p>{title}</p>
      <p>{summary}</p>
      <p>{createdAt}</p>
      <p>{likesCount}</p>
      <p>{attribution.displayName}</p>
      <p>{url}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  attribution: PropTypes.object.isRequired,
};

export default Article;
