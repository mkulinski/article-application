import React, { PropTypes } from 'react';
import Text from './Text';
import Likes from './Likes';

import '../styles/article.scss';


const Article = ({ title, summary, createdAt, likesCount, url, attribution }) => {
  return (
    <div className="article-container">
      <div className="article-header">
        <a href={url} className="article-title">{title}</a>
        <Likes className="article-likes-container" likesCount={likesCount} />
      </div>
      <Text value={attribution.displayName} className="article-display-name" />
      <p>{createdAt}</p>
      <Text value={summary} className="article-summary" />
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
