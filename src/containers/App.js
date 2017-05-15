import React, { PropTypes } from 'react';
import Nav from '../components/Nav';


const App = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
