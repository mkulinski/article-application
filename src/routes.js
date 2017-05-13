import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import ArticlesPage from './containers/ArticlesPage';
import TopicsPage from './containers/TopicsPage';
import NotFoundPage from './containers/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="articles" component={ArticlesPage}/>
    <Route path="topics" component={TopicsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
