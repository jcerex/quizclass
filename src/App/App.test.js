import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// yarn add enzyme --dev
// yarn add react-test-renderer --dev
it('restartQuiz() resets quiz state', () => {
    let component = shallow(<App />);
    component.instance().setState = jest.fn();

    component.instance().state = {
      progress: 2,
	    selected: 'Yowzer',
	    score: 4
    };

    component.instance().restartQuiz();

    // expect(someValue).toEqual(sameValue)
    expect(component.instance().setState).toHaveBeenCalledWith({
    	progress: 0,
      selected: 'None yet!',
      score: 0
    });
});
