import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';

class Main extends Component {
  state = {
    mode: null  // easy | medium | hard | null
  }

  modeHandler = (e:any) => {
    this.setState({
      mode: e.target.innerText.toLowerCase()
    })
  }
  
  render() {
    console.log(this.state)
    return (
      
      <main>
        {!this.state.mode ? <HomeScreen onClick={this.modeHandler} /> : null}
        {this.state.mode ? <QuizScreen /> : null}
        {/* <HomeScreen onClick={this.modeHandler} /> */}
        
      </main>
    )
  }
}

export default Main;