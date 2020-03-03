import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArtistQuestionScreen from '../question-artist-screen/question-artist-screen.jsx';
import GenreQuestionScreen from '../question-genre-screen/question-genre-screen.jsx';

const welcomeButtonHandler = () => {};

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errors={props.errors} onWelcomeButtonClick={welcomeButtonHandler} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errors: PropTypes.number.isRequired,
};

export default App;
