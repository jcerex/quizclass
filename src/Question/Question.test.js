import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const question = 'What is life?'
  ReactDOM.render(<Question current_question={question} />, div);
});
