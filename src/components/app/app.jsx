import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArtistQuestionScreen from '../question-artist-screen/question-artist-screen.jsx';
import GenreQuestionScreen from '../question-genre-screen/question-genre-screen.jsx';
import {GameType} from '../../const.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    if (this.state.step === -1 || this.state.step >= this.props.questions.length) {
      return (
        <WelcomeScreen errors={this.props.errors} onWelcomeButtonClick={() => {
          this.setState({
            step: 0
          });
        }} />
      );
    }

    if (this.props.questions[this.state.step]) {
      switch (this.props.questions[this.state.step].type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreen question={this.props.questions[this.state.step]} onAnswer={()=>{
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}/>
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreen question={this.props.questions[this.state.step]} onAnswer={()=>{
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}/>
          );
      }
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()};
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen question={this.props.questions[1]} onAnswer={()=>{}}/>
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen question={this.props.questions[0]} onAnswer={()=>{}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  errors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
