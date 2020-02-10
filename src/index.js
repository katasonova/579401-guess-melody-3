import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const allowedErrors = 4;

ReactDOM.render(
    <App errors={allowedErrors}/>,
    document.getElementById(`root`)
);
