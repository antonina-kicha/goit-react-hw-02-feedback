import { Component } from 'react';

import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state =  {
      good: 0,
      neutral: 0,
      bad: 0
  }
  scoreСounter = (score) => {
    console.log(score)

    this.setState(prevState => {
      switch (score) {
        case "good":
          return { good: prevState.good + 1 };
          break;
        case "neutral":
          return { neutral: prevState.neutral + 1 };
          break;
        case "bad":
          return { bad: prevState.bad + 1 };
          break;
      }
      
    })
    
  }
  render() {
      return (
    <>
      <Feedback onClick={this.scoreСounter}/>
      <Statistics score={this.state} />
    </> 
  );
    
  }
}




