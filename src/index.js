import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

const allowedErrors = 4;

ReactDOM.render(
    <App errors={allowedErrors} questions={questions}/>,
    document.getElementById(`root`)
);
