import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './index.css';
import App from './App';

const AppWithRouter = withRouter(App)

ReactDOM.render(<Router><AppWithRouter /></Router>, document.getElementById('root'));
