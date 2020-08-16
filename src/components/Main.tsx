import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';

class Main extends Component {
  state = {
    mode: null,  // easy | medium | hard | null,
    score: null
  }

  modeHandler = (e:any) => {
    this.setState({
      mode: e.target.innerText.toLowerCase()
    })
  }

  getScore = (score: number) => {
    this.setState({score})
  }
  
  render() {
    console.log(this.state)
    return (
      
      <main>
        {!this.state.mode ? <HomeScreen onClick={this.modeHandler} /> : null}
        {this.state.mode && this.state.score === null ? <QuizScreen mode={this.state.mode} getScore={this.getScore} /> : null}
        {this.state.score !== null ? <h1>Your scored is {this.state.score}</h1>: null}        
      </main>
    )
  }
}

export default Main;