import { Component } from 'react';

import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state =  {
      good: 0,
      neutral: 0,
      bad: 0
  }
  render() {
      return (
    <>
      <Feedback/>
      <Statistics/>
    </> 
  );
    
  }
}




