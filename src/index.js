import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './app';

export const myAPI = "http://127.0.0.1:4000"

ReactDOM.render(

    //Declare what I want to render
    <App></App>
    //Where the component is rendering
    ,document.getElementById("root")

);