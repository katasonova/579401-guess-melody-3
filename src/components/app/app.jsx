import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';

const welcomeButtonHandler = () => {};

const App = (props) => {
  return (
    <WelcomeScreen errors={props.errors} onWelcomeButtonClick={welcomeButtonHandler} />
  );
};

App.propTypes = {
  errors: PropTypes.number.isRequired,
};

export default App;

