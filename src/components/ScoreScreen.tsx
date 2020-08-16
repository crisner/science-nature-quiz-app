import React, { Fragment } from 'react';
import Button from './Button';

interface ScoreProps {
  score: number | null
  replay: any
}

const ScoreScreen = (props: ScoreProps) => (
  <Fragment>
    <h1>Your scored is {props.score}</h1>
    <Button onClick={props.replay} color="grey" text="Play again" />
  </Fragment>
)

export default ScoreScreen;