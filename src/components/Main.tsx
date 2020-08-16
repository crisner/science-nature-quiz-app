import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ScoreScreen from './ScoreScreen';

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

  replay = () => {
    this.setState({ 
      mode: null,
      score: null
    })
  }
  
  render() {
    return (
      <main>
        {!this.state.mode ? <HomeScreen onClick={this.modeHandler} /> : null}
        {this.state.mode && this.state.score === null ? <QuizScreen mode={this.state.mode} getScore={this.getScore} /> : null}
        {this.state.score !== null ? <ScoreScreen score={this.state.score} replay={this.replay} />: null}        
      </main>
    )
  }
}

export default Main;