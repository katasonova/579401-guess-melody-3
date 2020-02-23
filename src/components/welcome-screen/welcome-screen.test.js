import React from "react";
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errors = 17;

it(`<WelcomeScreen /> is expected to render errors count`, () => {
  const app = renderer.create(<WelcomeScreen errors={errors}/>).toJSON();
  expect(app).toMatchSnapshot();
});
