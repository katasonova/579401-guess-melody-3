import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`The button on the welcome screen is expected to be pressed`, () => {
  const errors = 17;
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(<WelcomeScreen errors={errors} onWelcomeButtonClick={onWelcomeButtonClick}/>);

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
