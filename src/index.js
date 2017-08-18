import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import observableProjectsStore from './store/projects'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App store={observableProjectsStore} />, document.getElementById('root'));
});

