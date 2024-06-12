import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";

import './fonts/TT Firs Neue/TT Firs Neue Regular.ttf'
import './fonts/TT Firs Neue/TT Firs Neue Medium.ttf'
import './fonts/TT Firs Neue/TT Firs Neue Bold.ttf'
import './fonts/Abhaya Libre/AbhayaLibre-ExtraBold.ttf'

const Global = createGlobalStyle`
  @font-face {
    font-family: 'TT Firs Neue Regular';
    src: local('TT Firs Neue Regular'), url("./fonts/TT Firs Neue/TT Firs Neue Regular.ttf") format("ttf");
  }
  
  @font-face {
    font-family: 'TT Firs Neue Medium';
    src: local('TT Firs Neue Medium'), url("./fonts/TT Firs Neue/TT Firs Neue Medium.ttf") format("ttf");
  }

  @font-face {
    font-family: 'TT Firs Neue Bold';
    src: local('TT Firs Neue Bold'), url("./fonts/TT Firs Neue/TT Firs Neue Bold.ttf") format("ttf");
  }

  @font-face {
    font-family: 'Abhaya Libre Extra Bold';
    src: local('Abhaya Libre Extra Bold'), url("./fonts/Abhaya Libre/AbhayaLibre-ExtraBold.ttf") format("ttf");
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'TT Firs Neue Regular', sans-serif;
    font-size: 14px;
    color: #060606;
  }
  
  a {
    text-decoration: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Global />
    <App />
  </Router>
);
