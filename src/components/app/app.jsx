import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <WelcomeScreen errors={props.errors}/>
  );
};

export default App;

