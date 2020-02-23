import React from "react";
import renderer from 'react-test-renderer';
import App from './app.jsx';

const allowedErrors = 7;

it(`<App /> is expected to render errors count`, () => {
  const welcomeButtonHandler = jest.fn();

  const app = renderer.create(<App errors={allowedErrors} onWelcomeButtonClick={welcomeButtonHandler} />).toJSON();
  expect(app).toMatchSnapshot();
});
