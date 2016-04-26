// @flow
import React from 'react';

const App = () => (
  <div>
    <h1>Example app</h1>
    <p>It works!</p>
  </div>
);

App.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object,
};

export default App;
