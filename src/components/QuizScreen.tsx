import React, { Component, Fragment, MouseEvent } from 'react';
import Button from './Button';

interface QuizState {
  currentQuiz: any[]
  choices: any[]
  currentQuestion: number
  score: number
  indices: number[]
  answer: number | null
  correct: boolean | null
}

class QuizScreen extends Component<{}, QuizState> {
  state: QuizState = {
    currentQuiz: [],
    choices: [],
    currentQuestion: 0,
    score: 0,
    indices: [],
    answer: null,
    correct: null
  }

  randomPick = (indices: number[]) => {
    let randIdx = [...indices];
    for(let i = 0; i < indices.length; i++) {
      let randNum: number = Math.floor(Math.random() * indices.length);
      let temp = randIdx[randNum];
      randIdx[randNum] = randIdx[0];
      randIdx[0] = temp;
    }
    return randIdx;
  }

  isCorrect = (index: number) => {
    const { answer, correct } = this.state;
    return answer === index && correct ? 'green' : (answer === index && !correct ? 'red' : 'grey');
  }

  async componentDidMount() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple');
    const results = await response.json();
    this.setState((prevState) => ({
      currentQuiz: results.results,
      choices: [results.results[prevState.currentQuestion].correct_answer,
                ...results.results[prevState.currentQuestion].incorrect_answers],
      indices: this.randomPick([0,1,2,3])
    }))
  }

  componentDidUpdate(prevProps: any, prevState: QuizState) {
    if(this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => ({
        choices: [this.state.currentQuiz[this.state.currentQuestion].correct_answer,
                  ...this.state.currentQuiz[this.state.currentQuestion].incorrect_answers],
        indices: this.randomPick([0,1,2,3]),
        answer: null,
        correct: null
      }))
    }
  }

  render() {
    const {currentQuiz, currentQuestion, choices, indices} = this.state;
    const quiz = currentQuiz[currentQuestion];
    console.log(this.state)
    console.log(quiz)
    console.log(indices)
    return (
      <Fragment>
        <h1>Choose the right answer</h1>
        <h2>{quiz && quiz.question}</h2>
        <div>
          {indices && indices.map(index => <Button onClick={(e: MouseEvent<HTMLButtonElement>) => {
            if(e.currentTarget.innerText === quiz.correct_answer) {
              this.setState(prevState => ({
                score: prevState.score + 1,
                answer: index,
                correct: true
              }))
            } else {
              this.setState({
                answer: index,
                correct: false
              })
            }
          }} color={this.isCorrect(index)} text={choices[index]} />)}
        </div>
        <footer>
          <Button onClick={() => {
            this.setState((prevState) => ({
              currentQuestion: prevState.currentQuestion + 1
            }))
            console.log(this.state)
          }} color="grey" text="Next" />
        </footer>
      </Fragment>
    )
  }
}

export default QuizScreen;